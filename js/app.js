let temaAlmacenado = JSON.parse(localStorage.getItem('tema')) || 'dark';
cambiarTema(temaAlmacenado);
let btnClaro = document.getElementById('btnTemaClaro');
let btnOscuro = document.getElementById('btnTemaOscuro');
btnClaro.addEventListener('click',()=>cambiarTema('light'));
btnOscuro.addEventListener('click',()=>cambiarTema('dark'));

function cambiarTema(tema)
{
    console.log('Cambio de tema');
    let body = document.querySelector('body');
    let IconTema = document.getElementById('IconTema');
    if(tema === 'dark')
    {
        IconTema.className = 'bi bi-moon-stars-fill';
    }else
    {
        IconTema.className = 'bi bi-brightness-high-fill';
    }
    //let body = document.getElementsByTagName('body'); Lo use para poder ver que se le pueden agregar atributos nuevos
    body.setAttribute('data-bs-theme',tema);
    console.log(body);

    //Debo guardar el color en local storage
    //localStorage.setItem('tema', tema);
    localStorage.setItem('tema',JSON.stringify(tema));
}