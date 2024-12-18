//@ts-nocheck
import PantallaAdministradorActualizacionBonVino from './models/PantallaAdministradorActualizacionBonVino.js';
import Gestor from './models/gestor.js';
import supabase from './supabase/client.js';
export function renderizarPantalla(gestor, pantalla) {
    let cuerpo = document.getElementById('cuerpoModificable');
    if (cuerpo) {
        cuerpo.innerHTML = `<div>
  <div class="container.fluid text-center" id="paddingBoton">
    <button type="button" class="btn" id="btIrAActualizarBodegas">
      Importar Actualización de vinos de bodega
    </button>
  </div>
  </div>`;
        let boton = document.getElementById('btIrAActualizarBodegas');
        boton.addEventListener('click', () => {
            pantalla.opcionImportarActualizacion(gestor);
        });
    }
}
function main() {
    const gestor = new Gestor();
    const pantalla = new PantallaAdministradorActualizacionBonVino();
    renderizarPantalla(gestor, pantalla);
    console.log(supabase);
}
main();
