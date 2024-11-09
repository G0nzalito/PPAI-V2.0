import supabase from '../supabase/client.js';
import { dataTipoUva } from './data/data.js';
import TipoUva from './tipoDeUva.js';
export default class interfazBD {
    static interfazBD;
    supabase;
    constructor(supabase) {
        this.supabase = supabase;
    }
    static getInstancia() {
        if (!interfazBD.interfazBD) {
            interfazBD.interfazBD = new interfazBD(supabase);
        }
        return interfazBD.interfazBD;
    }
    recuperarTiposUVas(idUva) {
        supabase
            .from('TipoUva')
            .select()
            .eq('id', idUva)
            .then(data => {
            console.log(data);
            let tipoUva = dataTipoUva.find(uva => uva.getNombre() === data.data[0].nombre);
            if (tipoUva) {
                return tipoUva;
            }
            else {
                let tipoUva = new TipoUva(data.data[0].nombre, data.data[0].descripcion);
                console.log(data.data[0].nombre);
                console.log(data.data[0].descripcion);
                dataTipoUva.push(tipoUva);
                return tipoUva;
            }
        });
    }
    async recuperarVarietales(idVino) {
        const { data, error } = await supabase
            .from('Varietal_de_vino')
            .select()
            .eq('id_Vino', idVino);
        if (data) {
            const variIds = data.id;
            for (let id of variIds) {
                const { dataVarietales } = await supabase
                    .from('Varietal')
                    .select()
                    .eq('id');
                const idUva = dataVarietales.TipoUva;
            }
        }
    }
    async recuperarVinos(nombreBodega) {
        const { data, error } = await supabase
            .from('Bodegas')
            .select()
            .eq('nombre', nombreBodega);
        if (data) {
            const idBodega = data.id;
            const { dataVinos, errorVinos } = await supabase
                .from('Bodegas')
                .select()
                .eq('bodega', idBodega);
        }
    }
}
