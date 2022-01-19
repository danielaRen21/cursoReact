const personajes = ['Goku', 'Vegeta', 'Trunks']
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numero] = retornaArreglo();
console.log(letras, numero)


//Tarea 
// primer valor del arreglo sera nombre
//segundo setnombre
const userState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo');
    }];
}

const [nombre, setNombre] = userState('Goku');
//arr[1](); //muestra la posicion 1 del arreglo en consola

console.log(nombre);
setNombre();