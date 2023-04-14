import Pelicula from "./clasePelicula.js"; //Si no tuviera el default tendria que usar -->import {Pelicula} from ..
import { cantidadCaracteres, sumarioValidaciones } from "./helper.js";
let peli1 = new Pelicula('El juicio', 'algo', 'https://pics.filmaffinity.com/el_juicio-391136016-large.jpg', 2023, '177', 'Argentina', '-');

//const btnEditar = document.querySelector('#btnEditar')
//btnEditar.addEventListener('click', creaPeli);
const btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', nuevaPeli);
const formularioPelicula = document.getElementById('formularioPeliculas');
formularioPelicula.addEventListener('submit', cargarPeli);

//Datos de la pelicula
const codigo = document.getElementById('inputCodigo');
const titulo = document.getElementById('inputTitulo');
const descripcion = document.getElementById('inputDescripcion');
const imagen = document.getElementById('inputImg');
const genero = document.getElementById('inputGenero');
const anio = document.getElementById('inputAnio');
const duracion = document.getElementById('inputDuracion');
const pais = document.getElementById('inputPais');
const reparto = document.getElementById('inputReparto');
const msjFormulario = document.getElementById('msjFormulario');

let listaPeliculas = [];

const modalPeli = new bootstrap.Modal(document.getElementById('modalAgregar'));

//Al colocar el type module desde html para el archivo js, el html no podra llamar a funciones puesto que el archivo js se volvera privado, por lo tanto debo usar los event desde js

function nuevaPeli()
{   
    modalPeli.show();
}

function cargarPeli(e)
{
    e.preventDefault();
    console.log('Cargando pelicula...');
    let resumen = sumarioValidaciones(titulo,descripcion,imagen);
    if(resumen.length === 0)
    {
        console.log('Correcto');
        modalPeli.hide();
    }else   
    {
        msjFormulario.className = 'alert alert-danger';
        msjFormulario.innerHTML = resumen;
    }
    
}