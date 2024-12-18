import { dataBodega, dataEnofilos, dataTipoUva } from './data/data.js';
import InterfazNotificacionPush from './interfazNotificacionPush.js';
import InterfazSistemaDeBodega from './interfazSistemaBodega.js';
// import supabase from '../supabase/client.js'
import interfazBD from './interfazBD.js';
export default class Gestor {
    coordenadasBodega;
    descripcionBodega;
    nombreBodega;
    bodegasAActualizar;
    seleccionBodegas;
    fechaActual;
    vinosAActualizar;
    pantalla;
    interfazNotificacionPush;
    interfazSistemaDeBodega;
    interfazBDVinos;
    nombreUsuariosANotificar;
    notificacion;
    constructor() {
        this.seleccionBodegas = dataBodega[0];
        this.fechaActual = new Date();
        this.vinosAActualizar = [];
        this.pantalla = undefined;
        this.interfazNotificacionPush = new InterfazNotificacionPush();
        this.interfazSistemaDeBodega = new InterfazSistemaDeBodega();
        this.nombreUsuariosANotificar = [];
        this.notificacion = '';
        this.interfazBDVinos = interfazBD.getInstancia();
    }
    opcionImportarActualizacion(pantalla) {
        this.getFechaActual();
        this.pantalla = pantalla;
        this.bodegasAActualizar = this.buscarBodegasConActualizacion(this.fechaActual);
    }
    buscarBodegasConActualizacion(fechaActual) {
        let bodegasAActualizar = [];
        for (let bodega of dataBodega) {
            if (bodega.esTiempoDeActualizar(fechaActual)) {
                bodegasAActualizar.push(bodega);
            }
        }
        return bodegasAActualizar;
    }
    getFechaActual() {
        console.log(dataTipoUva);
        var fechaActual = new Date();
        this.fechaActual = fechaActual;
        this.interfazBDVinos.recuperarTiposUVas(2).then(data => {
            console.log(dataTipoUva);
        });
        //console.log(dataTipoUva)
    }
    tomarSeleccionBodega(bodegaAActualizar) {
        this.seleccionBodegas = bodegaAActualizar;
        this.obtenerActualizacionesVinos();
        if (bodegaAActualizar.getNombre() !== 'Los robles') {
            this.actualizarVinosDeBodega();
        }
        else {
            bodegaAActualizar.setFechaUltimaActualizacion(new Date());
            //@ts-expect-error
            this.pantalla.mostrarPantallaError();
        }
    }
    obtenerActualizacionesVinos() {
        this.vinosAActualizar =
            this.interfazSistemaDeBodega.obtenerActualizacionVinos(this.seleccionBodegas);
    }
    actualizarVinosDeBodega() {
        let vinosAMostrar = this.seleccionBodegas.actualizarVinos(this.vinosAActualizar);
        this.seleccionBodegas.setFechaUltimaActualizacion(new Date());
        //@ts-expect-error
        this.pantalla.mostrarResumenDeActualizacion(vinosAMostrar);
        this.notificarEnofilosSuscriptos(); /*  ---------- EN EL DIAGRAMA DE SECUENCIA HAY UN ASTERISCO EN NOTIFICAR, HAY QUE SACAR EL ASTERISCO  Fue sacado*/
    }
    notificarEnofilosSuscriptos() {
        let nombresUsuariosANotificar = [];
        dataEnofilos.forEach(enofilo => {
            if (enofilo.estaSuscriptoABodega(this.seleccionBodegas)) {
                let nombreUsuarioEnofilo = enofilo.obtenerNombreUsuario();
                nombresUsuariosANotificar.push(nombreUsuarioEnofilo);
            }
        });
        this.nombreUsuariosANotificar = nombresUsuariosANotificar;
        this.generarNotificacion(this.interfazNotificacionPush, this.nombreUsuariosANotificar);
        // console.log(supabase)
    }
    generarNotificacion(InterfazNotificacionPush, nombresUsuariosANotificar) {
        this.notificacion = `Hay novedades de la bodega ${this.seleccionBodegas.getNombre()} disponibles en la app`;
        InterfazNotificacionPush.notificarActualizacionBodega(this.notificacion, nombresUsuariosANotificar);
    }
    generarResumen() { }
}
