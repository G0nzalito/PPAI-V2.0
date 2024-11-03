import { dataMaridajes, dataVinoEnBD } from './data/data.js';
import Vino from './vino.js';
export default class Bodega {
    descripcion;
    historia;
    nombre;
    periodoActualizacion;
    fechaUltimaActualizacion;
    coordenadas;
    region;
    novedad;
    constructor(nom, desc, hist, perAct, fecUltAct, coordenadas) {
        this.descripcion = desc;
        this.historia = hist;
        this.nombre = nom;
        this.periodoActualizacion = perAct;
        this.fechaUltimaActualizacion = fecUltAct;
        this.coordenadas = coordenadas;
    }
    getDescripcion() {
        return this.descripcion;
    }
    setDescripcion(v) {
        this.descripcion = v;
    }
    getHistoria() {
        return this.historia;
    }
    setHistoria(v) {
        this.historia = v;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(v) {
        this.nombre = v;
    }
    getPeriodoActualizacion() {
        return this.periodoActualizacion;
    }
    setPeriodoActualizacion(v) {
        this.periodoActualizacion = v;
    }
    getFechaUltimaActualizacion() {
        return this.fechaUltimaActualizacion;
    }
    setFechaUltimaActualizacion(v) {
        this.fechaUltimaActualizacion = v;
    }
    getCoordenadas() {
        return this.coordenadas;
    }
    setCoordenadas(coordenadas) {
        this.coordenadas = coordenadas;
    }
    contarReseñas() { }
    mostrarTodosVinos(vinosGlobales) {
        return vinosGlobales.filter(vino => vino.getBodega().nombre === this.nombre);
    }
    crearVino(vinoACrear) {
        let maridaje = this.buscarMaridaje(vinoACrear);
        let tiposUvas = this.buscarTipoUva(vinoACrear);
        // let a = vinoACrear.getAñada()
        let vinoNuevo = new Vino(vinoACrear.getNombre(), this, vinoACrear.getAñada(), new Date(), vinoACrear.getImagenEtiqueta(), vinoACrear.getNotaCata(), vinoACrear.getPrecio(), vinoACrear.getReseña(), tiposUvas, maridaje);
        return vinoNuevo;
    }
    buscarMaridaje(vinoACrear) {
        let maridajesVinoACrear = vinoACrear.getMaridaje();
        let maridajesADevolver = [];
        maridajesVinoACrear.forEach(maridajeAAsignar => {
            for (let i = 0; dataMaridajes.length > i; i++) {
                let maridajeEnBd = dataMaridajes[i];
                if (maridajeEnBd.sosMaridaje(maridajeAAsignar.getNombre())) {
                    maridajesADevolver.push(maridajeEnBd);
                    break;
                }
            }
        });
        return maridajesADevolver;
    }
    buscarTipoUva(vinoACrear) {
        let varietalVinoACrear = vinoACrear.getVarietal();
        let tiposUvasACrear = [];
        varietalVinoACrear.forEach(varietal => {
            let tipoUva = varietal.conocerTipoDeUva();
            let porcentaje = varietal.getPorcentajeComposicion();
            let objetoTipoUva = { uva: tipoUva, porcentaje: porcentaje };
            tiposUvasACrear.push(objetoTipoUva);
        });
        return tiposUvasACrear;
    }
    actualizarVinos(vinosAActualizar) {
        let vinosActualizados = [];
        // console.log(dataVinoEnBD[0])
        for (let i = 0; vinosAActualizar.length > i; i++) {
            // Esto de acá deberia ser remplazado por el acceso a la BD, o para no cambiar tanto, meter un método y guardar los vinos de la BD en un array que se llame igual
            let vino = vinosAActualizar[i];
            // if (!vino.esDeBodega(this.nombre))
            //   //Toda esta condición podría irse ahora que vamos a implementar BD metiendo en vinos a actualizar solo los vinos de la bodega especifica
            //   continue /* -------- No respeta patron experto, hay que mandarle al vino el nombre de la bodega y que el vino diga si es de esa bodega -------- Esta parte lista
            //                                                                 ------- Ademas hay que agregar una dependencia entre bodega y vino ------- Listo */
            // const vinoAActualizar = dataVinoEnBD.find(
            //   v =>
            //     v.esTuNombre(
            //       vino.getNombre()
            //     ) /* -------- No respeta patron experto, hay que mandarle al vino un nombre y preguntarle si es ese vino -------- Esto era más complicado de lo que parece */
            // )
            if (vino.sosVinoAActualizar(dataVinoEnBD)) {
                // alternativa existe vino
                // if (!vino.sosVinoAActualizar(vinosAActualizar)) continue
                const vinoAActualizar = dataVinoEnBD.find(v => v.esTuNombre(vino.getNombre()));
                //falta agregarlo al diagrama de secuencia
                let varietalAMostrar = vino.getVarietalesAMostrar();
                vinosActualizados.push({
                    vinoAMostrar: vino,
                    estado: 'Actualizado',
                    varietalesAMostrar: varietalAMostrar
                });
                //@ts-expect-error
                vino.setPrecio(vinoAActualizar.getPrecio());
                //@ts-expect-error
                vino.setImagenEtiqueta(vinoAActualizar.getImagenEtiqueta());
                //@ts-expect-error
                vino.setFechaActualizacion(vinoAActualizar.getFechaActualizacion());
                //@ts-expect-error
                vino.setNotaCata(vinoAActualizar.getNotaCata());
                // vinosAActualizar = vinosAActualizar.filter(
                //   vino => vino !== vinoAActualizar
                // )
            }
            else {
                this.crearVino(vino);
                //falta agregar al diagrama de secuencia
                let varietalAMostrar = [];
                for (let varietal of vino.getVarietal()) {
                    /* ---------- creo que habia  problema con el diagrama de secuencia que no esta este loop o algo asi,
                  verificar que lo que aparezca en el codigo sea lo mismo del diagrama*/
                    let nombreTipoUva = varietal.conocerTipoDeUva().getNombre();
                    let porcentaje = varietal.getPorcentajeComposicion();
                    varietalAMostrar.push(`${nombreTipoUva}: ${porcentaje}%`);
                }
                vinosActualizados.push({
                    vinoAMostrar: vino,
                    estado: 'Creado',
                    varietalesAMostrar: varietalAMostrar
                });
                dataVinoEnBD.push(vino);
            }
        }
        // vinosAActualizar.forEach(vinoACrear => {
        //   let vinoNuevo = this.crearVino(vinoACrear)
        //   let varietalAMostrar: String[] = []
        //   for (let varietal of vinoNuevo.getVarietal()) {
        //     /* ---------- creo que habia  problema con el diagrama de secuencia que no esta este loop o algo asi,
        //   verificar que lo que aparezca en el codigo sea lo mismo del diagrama*/
        //     let nombreTipoUva = varietal.conocerTipoDeUva().getNombre()
        //     let porcentaje = varietal.getPorcentajeComposicion()
        //     varietalAMostrar.push(`${nombreTipoUva}: ${porcentaje}%`)
        //   }
        //   vinosActualizados.push({
        //     vinoAMostrar: vinoNuevo,
        //     estado: 'Creado',
        //     varietalesAMostrar: varietalAMostrar
        //   })
        //   dataVinoEnBD.push(vinoNuevo)
        // })
        return vinosActualizados;
    }
    esTiempoDeActualizar(fechaActual) {
        let fehcaActualizacion = this.fechaUltimaActualizacion;
        fehcaActualizacion.setMonth(fehcaActualizacion.getMonth() + this.periodoActualizacion);
        return fechaActual > fehcaActualizacion;
    }
}
