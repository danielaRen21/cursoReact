//Desestructuracion
//Asignacion Desustructurante

const persona = {
    nombre: 'Salvador',
    edad: 24,
    clave: 'bebe',
    rango: 'Capitan'
};

const userContext = ({ clave, nombre, edad, rango = 'Novio' }) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latLon: {
            lat: 45.85,
            lon: 85.45
        }
    }
};

const { nombreClave, anios, latLon: { lat, lon } } = userContext(persona);

console.log(nombreClave, anios);
console.log(lat, lon)