import Siguiendo from '../siguiendo.js';
import TipoUva from '../tipoDeUva.js';
import Varietal from '../varietal.js';
import Bodega from '../bodega.js';
import Reseña from '../reseña.js';
import Enofilo from '../enofilo.js';
import Usuario from '../usuario.js';
import Maridaje from '../maridaje.js';
export const dataUsuarios = [
    new Usuario('1111', 'Gonzalo', true, '-'),
    new Usuario('2222', 'Alan', true, '-'),
    new Usuario('3333', 'Brenda', true, '-'),
    new Usuario('4444', 'Renata Ramona', true, '-')
];
export const dataTipoUva = [
    new TipoUva('Chardonnay', 'Versátil y reconocida. Vinos blancos secos y cremosos con notas de frutas cítricas y manzanas'),
    // new TipoUva(
    //   'Moscatel',
    //   'Intenso y aromático. Vinos blancos dulces con sabores a uva, albaricoque y miel.'
    // ),
    new TipoUva('Merlot', 'Suave y accesible. Uva tinta versátil que ofrece vinos con sabores a ciruelas, cerezas negras y taninos suaves.'),
    new TipoUva('Cabernet Sauvignon', 'Acidez equilibrada y taninos suaves.'),
    new TipoUva('Claret', 'Es una uva con mucho tanino que da unos vinos con una ligera astringencia'),
    new TipoUva('Macabeo', 'Produce vinos potentes y con mucha estructura.')
];
export const dataVarietal = [
    new Varietal(15, 'descripción de este varietal', dataTipoUva[0]),
    new Varietal(18, 'otra descripción varietal', dataTipoUva[1]),
    new Varietal(25, 'esta es la descripción de varietal', dataTipoUva[2]),
    new Varietal(13, 'un varietal muy común en Argentina', dataTipoUva[4]),
    new Varietal(26, 'con aromas a manzana, melocotón y flores', dataTipoUva[5]),
    new Varietal(30, 'posee sabores a frutos rojos como frambuesas y ciruelas', dataTipoUva[5])
];
export const dataBodega = [
    new Bodega('Los olmos', 'una linda bodega', 'tiene muchos años', 3, new Date(2024, 5, 19), [4586351846]),
    new Bodega('Los plátanos', 'la mejor de todas', 'ha ganado muchos premios', 3, new Date(2020, 5, 10), [54564985]),
    new Bodega('Los robles', 'una bodega humilde', 'están recién arrancando', 3, new Date(2020, 7, 14), [498638752489]),
    new Bodega('La Cañada', 'una bodega para los que saben', 'es el lider en importaciones a Portugal', 3, new Date(2024, 2, 10), [92736182943]),
    new Bodega('Las Urracas', 'una bodega con estilo', 'creada por una familia mendocina tradicional', 3, new Date(2022, 8, 1), [32893423084])
];
export const dataSiguiendo = [
    new Siguiendo(new Date(2020, 9, 23), dataBodega[1]),
    new Siguiendo(new Date(2021, 2, 3), dataBodega[1]),
    new Siguiendo(new Date(2021, 5, 13), dataBodega[4]),
    new Siguiendo(new Date(2021, 3, 20), dataBodega[3]),
    new Siguiendo(new Date(2001, 6, 11), 'hola')
];
export const dataEnofilos = [
    new Enofilo('Zavala', '-', 'Gonzalo', dataUsuarios[0], [dataSiguiendo[0]]),
    new Enofilo('Moyano', 'https://http.cat/400.jpg', 'Alan', dataUsuarios[1], [
        dataSiguiendo[1]
    ]),
    new Enofilo('Tapari', '-', 'Brenda', dataUsuarios[2], [dataSiguiendo[2]]),
    new Enofilo('Perez', '-', 'Renata', dataUsuarios[3], [dataSiguiendo[3]])
];
export const dataReseñas = [
    new Reseña('El mejor vino que probé en toda mi vida', true, new Date(), 5, undefined),
    new Reseña('El peor vino que probé en toda mi vida', false, new Date(), 1, undefined),
    new Reseña('Un vino más del montón, ni fu ni fa', true, new Date(), 3, undefined),
    new Reseña('epectacula', false, new Date(), 5, undefined),
    new Reseña('Está bien, nada del otro mundo. Cumple.', true, new Date(), 3, undefined),
    new Reseña('¡Me encantó! Perfecto para la cena de anoche.', false, new Date(), 4, undefined),
    new Reseña('Vale cada centavo, un vino premium increíble.', true, new Date(), 5, undefined),
    new Reseña('Un aroma delicioso y un sabor suave, ideal para cualquier ocasión.', true, new Date(), 3, undefined),
    new Reseña('Un poco caro para lo que ofrece.', false, new Date(), 3, undefined),
    new Reseña('Excelente vino, perfecto para una ocasión especial', true, new Date(), 5, undefined),
    new Reseña('No está mal, pero esperaba algo mejor por el precio', false, new Date(), 2, undefined),
    //cargo hasta acá
    new Reseña('Sabor suave y muy agradable, lo recomiendo', true, new Date(), 4, undefined),
    new Reseña('Muy básico, no destaca en nada', false, new Date(), 1, undefined),
    new Reseña('Sorprendentemente bueno, tiene una gran relación calidad-precio', true, new Date(), 4, undefined),
    new Reseña('Sorprendentemente malo, tiene una pésima relación calidad-precio', true, new Date(), 1, undefined)
];
export const dataMaridajes = [
    new Maridaje('albóndigas con salsa', 'Que no combina con albóndigas con salsa'),
    new Maridaje('higos', 'una mezcla atrevida pero seductora al ojo experto'),
    new Maridaje('fresas', 'una combinación segura pero deliciosa para aquellos que le gustan los clásicos'),
    new Maridaje('tabla de quesos', 'los sabores salados permiten lavar el paladar del consumidor'),
    new Maridaje('hummus de calabaza', 'su sabor dulce acompaña perfectamente las notas dulces del vino'),
    new Maridaje('empanada de carne cortada a cuchillo', 'el sabor ahumado de la carne intensifica la acidez del vino')
];
export const dataVinoEnBD = [];
export const dataVinoRemoto = [
// new Vino(
//   'Otro loco mas 2',
//   dataBodega[1],
//   2006,
//   new Date('2024-07-20'),
//   'otraImagen.jpg',
//   'En nariz despliega aromas de buena intensidad, con toques de frutos rojos conjugados con notas de madera, debido a su crianza.',
//   7200,
//   [dataReseñas[1], dataReseñas[2]],
//   [dataMaridajes[0], dataMaridajes[2]],
//   [
//     { uva: dataTipoUva[1], porcentaje: 70 },
//     { uva: dataTipoUva[2], porcentaje: 10 }
//   ]
// ),
// new Vino(
//   'Cabernet Locura',
//   dataBodega[1],
//   2010,
//   new Date('2024-07-20'),
//   'imagenNueva.jpg',
//   'Se presenta sabroso y de tacto muy agradable.',
//   7200,
//   [dataReseñas[11]],
//   [dataMaridajes[0], dataMaridajes[2]],
//   [{ uva: dataTipoUva[1], porcentaje: 80 }]
// ),
// new Vino(
//   'El hombre en moto',
//   dataBodega[2],
//   2006,
//   new Date('2024-07-20'),
//   'imagenMoto.jpg',
//   'Taninos maduros y dulces, buena acidez y sensaciones frutales bien ligadas con las notas de su justa estancia en madera.',
//   7200,
//   [dataReseñas[12]],
//   [dataMaridajes[0], dataMaridajes[2]],
//   [{ uva: dataTipoUva[1], porcentaje: 80 }]
// ),
// new Vino(
//   'Otro loco mas 3',
//   dataBodega[2],
//   2006,
//   new Date('2024-07-20'),
//   'imagenLoco.png',
//   'Su paso se encuentra un balance de fruta-madera muy equilibrado, marcado por los especiados del roble francés y los frutillos rojos de la uva.',
//   7200,
//   [dataReseñas[3]],
//   [dataMaridajes[0], dataMaridajes[2]],
//   [{ uva: dataTipoUva[1], porcentaje: 80 }]
// ),
// new Vino(
//   'Montañoso',
//   dataBodega[4],
//   2000,
//   new Date('2024-05-27'),
//   'imagen',
//   'asd',
//   4500,
//   [dataReseñas[6]],
//   [dataMaridajes[4], dataMaridajes[5]],
//   [
//     { uva: dataTipoUva[5], porcentaje: 40 },
//     { uva: dataTipoUva[3], porcentaje: 60 }
//   ]
// ),
// new Vino(
//   'Motañita',
//   dataBodega[3],
//   2000,
//   new Date('2024-05-27'),
//   'imagen',
//   'asd',
//   4500,
//   [dataReseñas[13]],
//   [dataMaridajes[4], dataMaridajes[5]],
//   [
//     { uva: dataTipoUva[5], porcentaje: 40 },
//     { uva: dataTipoUva[3], porcentaje: 60 }
//   ]
// ),
// new Vino(
//   'Vendaval',
//   dataBodega[0],
//   30000,
//   new Date('2024-05-27'),
//   'imagen',
//   'asd',
//   4500,
//   [dataReseñas[14]],
//   [dataMaridajes[4], dataMaridajes[5]],
//   [
//     { uva: dataTipoUva[5], porcentaje: 40 },
//     { uva: dataTipoUva[3], porcentaje: 60 }
//   ]
// )
];
/*  fechaInicio : Date, bodega : Bodega, fechaFin ?: Date,  ) */
/*
for (let tipo of dataTipoUva){
    const nom = tipo.getNombre()
    console.log(nom)
    
    

}

dataTipoUva[1].setNombre("nuevoNombre")
const nom = dataTipoUva[1].getNombre()
console.log(nom)*/
