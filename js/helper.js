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

export function sumarioValidaciones(titulo,descripcion, imagen)
{
    let resumen = '';

    if(!cantidadCaracteres(titulo.value, 5, 150))1
    {
        resumen+='No se ingresaron correctamente los datos del titulo, debe tener entre 5 y 150 caracteres. </br>';
    }
    if(!cantidadCaracteres(descripcion.value, 20,200))
    {
        resumen+='No se ingresaron correctamente los datos de la descripcion, debe tener entre 20 y 200 caracteres ';
    }
    return resumen;
}