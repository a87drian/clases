class Usuario {
    // constructor(nombre, apellido, libros, mascotas){
     constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }
    addMascotas(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(libro){
        this.libros.push(libro);
    }
    getBookNames(){
        return this.libros.map(l => l.titulo)

    }
}
class Libro {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}

const libro1 = new Libro("El Aleph","Borges");
const libro2 = new Libro("Dracula","Dan Brown");

const usuario = new Usuario("Catalina","Chaves");
usuario.addMascotas("Box");
usuario.addBook(libro1);
usuario.addBook(libro2);

console.log(usuario.getFullName())
console.log(usuario.getBookNames());
console.log(usuario.countMascotas());