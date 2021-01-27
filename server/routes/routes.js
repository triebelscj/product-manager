// const ProductController = require("../controllers/controller");

// module.exports = function (app) {
//     app.get('/api', ProductController.index);
//     app.post('/api/products', ProductController.createProduct)
// }


const ProductController = require('../controllers/controller');

module.exports = function (app) {
    app.get('/api', ProductController.index);

    app.post('/api/products/new', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.findOneProduct);

    app.get('/api/products', ProductController.findAllProducts);


    app.put('/api/products/:id', ProductController.updateProduct);

    app.delete('/api/products/:id', ProductController.deleteProduct);
}