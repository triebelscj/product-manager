

const { Product } = require('../models/models');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}



module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}

module.exports.createProduct = (req, res) => {

    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
}

module.exports.findAllProducts = (req, res) => {
    Product.find().sort({ "productName": "asc" })
        .then(allProduct => res.json(allProduct))
        .catch(err => res.status(400).json(err));
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.status(400).json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        });
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteProduct => res.json(deleteProduct))
        .catch(err => res.status(400).json(err));
}