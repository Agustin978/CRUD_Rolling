import Pelicula from "./clasePelicula.js"; //Si no tuviera el default tendria que usar -->import {Pelicula} from ..
let peli1 = new Pelicula('El juicio', 'algo', 'https://pics.filmaffinity.com/el_juicio-391136016-large.jpg', 2023, '177', 'Argentina', '-');

const btnEditar = document.querySelector('#btnEditar')
btnEditar.addEventListener('click', creaPeli);

//Al colocar el type module desde html para el archivo js, el html no podra llamar a funciones puesto que el archivo js se volvera privado, por lo tanto debo usar los event desde js
function creaPeli() 
{
    console.log(peli1);
}
