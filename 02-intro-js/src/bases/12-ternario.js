const activo = true;

// if (!activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
//const mensaje = (activo) ? 'Activo' : 'Inactivo';
const mensaje = (!activo) && 'Activo';
console.log(mensaje);
