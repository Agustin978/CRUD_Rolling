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
        this.#codigo = uuidv4();
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
        return this.#titulo;
    }
    
    set titulo(nuevoTitulo) 
    {
        this.#titulo = nuevoTitulo;
    }
    
    // Getter y Setter para la descripción
    get descripcion() 
    {
        return this.#descripcion;
    }
    
    set descripcion(nuevaDescripcion) 
    {
        this.#descripcion = nuevaDescripcion;
    }
    
    // Getter y Setter para la imagen
    get img() 
    {
        return this.#img;
    }
    
    set img(nuevaImg) 
    {
        this.#img = nuevaImg;
    }
    
    // Getter y Setter para el género
    get genero() 
    {
        return this.#genero;
    }
    
    set genero(nuevoGenero) 
    {
        this.#genero = nuevoGenero;
    }
    
    // Getter y Setter para el año
    get anio() 
    {
        return this.#anio;
    }
    
    set anio(nuevoAnio) 
    {
        this.#anio = nuevoAnio;
    }
    
    // Getter y Setter para la duración
    get duracion() 
    {
        return this.#duracion;
    }
    
    set duracion(nuevaDuracion) 
    {
        this.#duracion = nuevaDuracion;
    }
    
    // Getter y Setter para el país
    get pais() 
    {
        return this.#pais;
    }
    
    set pais(nuevoPais) 
    {
        this.#pais = nuevoPais;
    }
    
    // Getter y Setter para el reparto
    get reparto() 
    {
        return this.#reparto;
    }
    
    set reparto(nuevoReparto) 
    {
        this.#reparto = nuevoReparto;
    }
    
    // Getter y Setter para el estado
    get estado() 
    {
        return this.#estado;
    }
    
    set estado(nuevoEstado) 
    {
        this.#estado = nuevoEstado;
    }

    toJSON()
    {
        return{
            codigo: this.codigo,
            titulo: this.titulo,
            descripcion: this.descripcion,
            imagen: this.img,
            genero: this.genero,
            duracion: this.duracion,
            pais: this.pais,
            reparto: this.reparto,
            estado: this.estado
        }
    }
}