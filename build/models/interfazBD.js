import supabase from '../supabase/client.js';
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
}
