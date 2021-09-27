const fs = require("fs");

class Contenedor {
    constructor(filename) {
        this.filename = filename;
    }
    async save(product) {
        //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
        try {
            const content = await fs.promises.readFile(`./${this.filename}`, "utf-8");
            let products;

            if (content === "") {
                product.id = 0;
            } else {
                products = JSON.parse(content);
                product.id = Math.max.apply(
                    Math,
                    products.map((o) => {
                        return o.id + 1;
                    })
                );
            }

            fs.promises.writeFile(
                `./${this.filename}`,
                JSON.stringify([...products, product], null, 2)
            );

            return product.id;
        } catch (error) {
            console.log("Error:" + error);
        }
    }
    async getById(id) {
        // Recibe un id y devuelve el objeto con ese id, o null si no está.
        
        try {
            const file = await fs.promises.readFile(`./${this.filename}`, "utf-8")
            //console.log(file)
            const products = JSON.parse(file)
            
            const found = products.find((element) => {

                if (element.id === id) {
                    return element
                }

            })
            console.log(found)
            return found

        } catch (error) {
            console.log("Error:" + error);
        }


    }
    async getAll() {
        // Devuelve un array con los objetos presentes en el archivo.
        const file = await fs.promises.readFile(`./${this.filename}`, "utf-8")
        const products = JSON.parse(file);
        return products;
    }
    async deleteById(id) {
        //  Elimina del archivo el objeto con el id buscado.
        const file = await fs.promises.readFile(`./${this.filename}`, "utf-8")
        const products = JSON.parse(file);
        const removeID = products.findIndex(pr => pr.id === id)
        products.splice(removeID, 1);
        console.log('deleteById', products)


    }
    async deleteAll() {
        //  Elimina todos los objetos presentes en el archivo.
        try {
            const file = await fs.promises.writeFile(`./${this.filename}`, "utf-8", '')
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = Contenedor;