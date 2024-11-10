import supabase from '../supabase/client.js'
import { dataTipoUva } from './data/data.js'
import TipoUva from './tipoDeUva.js'
import Vino from './vino.js'

export default class interfazBD {
  private static interfazBD: interfazBD | null
  private supabase: any

  private constructor(supabase: unknown) {
    this.supabase = supabase
  }

  public static getInstancia() {
    if (!interfazBD.interfazBD) {
      interfazBD.interfazBD = new interfazBD(supabase)
    }
    return interfazBD.interfazBD
  }
      //BRENDA
    async getVinos(): Promise<Vino[] | null> {
      const { data, error } = await this.supabase
        .from('vinos')
        .select('*');
    
      if (error) {
        console.error("Error trayendo vinos:", error);
        return null;
      }
    
      // Mapear los datos al tipo `Vino`
      const vinosBD: Vino[] = data.map((vino: any) => ({
        nombre: vino.nombre,
        bodega: vino.bodega,
        añada: vino.añada,
        fechaActualizacion: vino.fechaActualizacion,
        imagenEtiqueta: vino.imagenEtiqueta,
        notaCataBodega: vino.notaCataBodega,
        precio: vino.precio,
      }));
    
      return vinosBD;
    }

  // public recuperarTiposUVas(idUva: number) {
  //   supabase
  //     .from('TipoUva')
  //     .select()
  //     .eq('id', idUva)
  //     .then(data => {
  //       const dataTiposUva = data.data

  //       let tipoUva = dataTipoUva.find(
  //         uva => uva.getNombre() === dataTiposUva[0].nombre
  //       )

  //       if (tipoUva) {
  //         return tipoUva
  //       } else {
  //         let tipoUva = new TipoUva(
  //           dataTiposUva[0].nombre,
  //           dataTiposUva[0].descripcion
  //         )
  //         console.log(dataTiposUva[0].nombre)
  //         console.log(dataTiposUva[0].descripcion)
  //         dataTipoUva.push(tipoUva)
  //         return tipoUva
  //       }
  //     })
  // }

  // public async recuperarVarietales(idVino: number) {
  //   supabase
  //     .from('Varietal_de_vino')
  //     .select()
  //     .eq('id_Vino', idVino)
  //     .then(data =>{

  //       const variIds = data.id
  //       for (let id of variIds) {
  //         supabase
  //           .from('Varietal')
  //           .select()
  //           .eq('id')
  //           .then()
  //         const idUva = dataVarietales.TipoUva
  //     }
  //     })
  // }

  // public async recuperarVinos(nombreBodega: string) {
  //   const { data, error } = await supabase
  //     .from('Bodegas')
  //     .select()
  //     .eq('nombre', nombreBodega)
  //   if (data) {
  //     const idBodega = data.id
  //     const { dataVinos, errorVinos } = await supabase
  //       .from('Bodegas')
  //       .select()
  //       .eq('bodega', idBodega)
  //   }
  // }
}
