const { constants } = require('buffer');
const Contenedor = require('./contenedor')

const miContenedor = new Contenedor("productos.json");
const product = {
    title: 'Portaminas',                                                                                                                              
    price: 154

};
const main = async () => {
   const id = await miContenedor.save(product);
    console.log(id)
    const pr = await miContenedor.getById(2);
    console.log('getById', pr)
    const all = await miContenedor.getAll();
    console.log('all', all)
    const remove = await miContenedor.deleteById(17)
    
}
main();
