//Funciones JS

//Funcion tradicional
const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

//Funcion flecha
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

//Funcion flecha quitando return
const saludar3 = (nombre) => `Hola ${nombre}`;

const getUser = () => ({
    uid: 'ABCD',
    username: 'Dani21'
})

console.log(getUser());

const getUsuarioActivo = (nombre) => ({
    uid: 'hfhgkf',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);