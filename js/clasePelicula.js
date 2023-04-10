export default class Pelicula //export default permite exportar un unico elemento, export solo permite exportar varios elementos
{ 
    #codigo;
    #titulo;
    #descripcion;
    #img;
    #genero;
    #anio;
    #duracion;
    #pais;
    #reparto;
    #estado;
    constructor(titulo, descripcion, img, genero, anio, duracion, pais, reparto)
    {
        this.#codigo = 0;
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#img = img;
        this.#genero = genero;
        this.#anio = anio;
        this.#duracion = duracion;
        this.#pais = pais;
        this.#reparto = reparto;
        this.#estado = false;   
    }
    
    //Metodos getter y setter
    // Getter y Setter para el título
    get titulo() 
    {
        return this._titulo;
    }
    
    set titulo(nuevoTitulo) 
    {
        this._titulo = nuevoTitulo;
    }
    
    // Getter y Setter para la descripción
    get descripcion() 
    {
        return this._descripcion;
    }
    
    set descripcion(nuevaDescripcion) 
    {
        this._descripcion = nuevaDescripcion;
    }
    
    // Getter y Setter para la imagen
    get img() 
    {
        return this._img;
    }
    
    set img(nuevaImg) 
    {
        this._img = nuevaImg;
    }
    
    // Getter y Setter para el género
    get genero() 
    {
        return this._genero;
    }
    
    set genero(nuevoGenero) 
    {
        this._genero = nuevoGenero;
    }
    
    // Getter y Setter para el año
    get anio() 
    {
        return this._anio;
    }
    
    set anio(nuevoAnio) 
    {
        this._anio = nuevoAnio;
    }
    
    // Getter y Setter para la duración
    get duracion() 
    {
        return this._duracion;
    }
    
    set duracion(nuevaDuracion) 
    {
        this._duracion = nuevaDuracion;
    }
    
    // Getter y Setter para el país
    get pais() 
    {
        return this._pais;
    }
    
    set pais(nuevoPais) 
    {
        this._pais = nuevoPais;
    }
    
    // Getter y Setter para el reparto
    get reparto() 
    {
        return this._reparto;
    }
    
    set reparto(nuevoReparto) 
    {
        this._reparto = nuevoReparto;
    }
    
    // Getter y Setter para el estado
    get estado() 
    {
        return this._estado;
    }
    
    set estado(nuevoEstado) 
    {
        this._estado = nuevoEstado;
    }
}