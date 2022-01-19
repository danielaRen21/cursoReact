const persona = {
    nombre: 'Daniela',
    apellido: 'Renteria',
    edad: 22,
    direccion: {
        ciudad: 'Villa Union',
        zip: 34800
    },
};

const persona2 = { ...persona };
persona2.nombre = 'Salvador'

console.table({ persona })
console.log(persona2)