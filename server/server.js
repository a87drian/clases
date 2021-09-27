const express = require('express');
const server = express();
const PORT = 8080
const Contenedor = require('../archivos/contenedor')

const container = new Contenedor('../archivos/productos.json')

server.get('/productos', async (req, res) => {

        const products = await container.getAll()
        console.log(products)
    
    
    res.json(products);

});
server.get('/productoRandom', async (req, res) => {
    const products = await container.getAll();

    //return Math.floor(Math.random() * (max - min)) + min;
    const id = Math.floor(Math.random() * (products.length - 1)) + 1;

    const product = await container.getById(id)
    console.log(product)


    res.json(product);

});

server.listen(PORT, ()=>{
    console.log('server ok')
})