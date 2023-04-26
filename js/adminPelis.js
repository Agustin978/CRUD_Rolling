import Pelicula from "./clasePelicula.js"; //Si no tuviera el default tendria que usar -->import {Pelicula} from ..
import { cantidadCaracteres, sumarioValidaciones } from "./helper.js";
let peli1 = new Pelicula('El juicio', 'algo', 'https://pics.filmaffinity.com/el_juicio-391136016-large.jpg', 2023, '177', 'Argentina', '-');

//const btnEditar = document.querySelector('#btnEditar')
//btnEditar.addEventListener('click', creaPeli);
const btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', mostrarModalPeli);
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

function mostrarModalPeli()
{   
    modalPeli.show();
}

function cargarPeli(e)
{
    e.preventDefault();
    let resumen = sumarioValidaciones(titulo.value, descripcion.value, imagen.value, duracion.value, genero.value, anio.value);
    if(resumen.length === 0)
    {
        console.log('Cargando pelicula...');
        let peliculaIngresa = new Pelicula(titulo.value, descripcion.value, imagen.value, genero.value, anio.value, duracion.value, pais.value, reparto.value);
        listaPeliculas.push(peliculaIngresa);
        guardaEnLocalStorage();
        limpiaFormulario();
        modalPeli.hide();
    }else   
    {
        msjFormulario.className = 'alert alert-danger mt-2';
        msjFormulario.innerHTML = resumen;
    }
    
}

function guardaEnLocalStorage()
{
    localStorage.setItem('listadoPeliculas',JSON.stringify(listaPeliculas));
}

function limpiaFormulario()
{
    formularioPelicula.reset();
}

function creaPeli()
{
    let nuevaPeli = new Pelicula('Super Mario', 'algo', 'url', 'aventura', 2023, '2hs', 'EEUU', '-');
    console.log(nuevaPeli);
}