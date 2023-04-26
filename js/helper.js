export function cantidadCaracteres(texto, min, max)
{
    if(texto.length >= min && texto.length <= max)
    {
        console.log('Cantidad de caracteres correctos.');
        return true;
    }else
    {
        console.log('Cantidad de caracteres incorrecto.');
        return false;
    }
}

function validaDuracion(value)
{
    let patron = /^[0-9]{1,3}$/;
    if(patron.test(value) && parseInt(value) > 0)
    {
        console.log('digito valido de 1 a 3 caracteres.');
        return true;
    }else
    {
        console.log('no paso la expresion regular del tiempo');
        return false;
    }
}

function validaURLImagen(value)
{
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
    if(patron.test(value))
    {
        console.log('url valida');
        return true;
    }else
    {
        console.log('url invalida');
        return false;
    }
}

function validaGenero(genero)
{
    //AL genero.length lo uso ya por defecto en html esta seleccionado una opcion sin texto, asi que asi evito
    //el ingreso de un dato vacio en la pagina.
    if(genero.length > 0 && (genero === 'Aventura' || genero === 'Accion' || genero === 'Drama' || genero === 'Terror'))
    {
        console.log('genero valido');
        return true;
    }else
    {
        console.log('genero invalido');
        return false;
    }
}

function validaAnio(anio)
{
    if(parseInt(anio) >= 1896)
    {
        console.log('Año valido');
        return true;
    }else
    {
        console.log('Año invalido');
        return false;
    }
}

export function sumarioValidaciones(titulo,descripcion, imagen, duracion, genero, anio)
{
    let resumen = '';

    if(!cantidadCaracteres(titulo, 5, 150))
    {
        resumen+='-> No se ingresaron correctamente los datos del titulo, debe tener entre 5 y 150 caracteres. </br>';
    }
    if(!cantidadCaracteres(descripcion, 20,200))
    {
        resumen+='-> No se ingresaron correctamente los datos de la descripcion, debe tener entre 20 y 200 caracteres. </br>';
    }
    if(!validaDuracion(duracion))
    {
        resumen+='-> La duracion debe contener un numero de 3 digitos como maximo, y debe ser un valor valido. </br>';
    }
    if(!validaURLImagen(imagen))
    {
        resumen+='-> Corregir la URL de la imagen, la extension debe ser .jpg, .gif o .png <br>';
    }
    if(!validaGenero(genero))
    {
        resumen+='-> Debe seleccionar un genero de la lista</br>';
    }
    if(!validaAnio(anio))
    {
        resumen+='-> El año ingresado es invalido.';
    }
    return resumen;
}