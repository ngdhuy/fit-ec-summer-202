const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());

// load data from data.json file
const products = require('../data/data.json');

// define route
// GET /products
router.get('/', (req, res) => {
    res.status(200).json(products);
});

// GET /products/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === parseInt(id));
    if (!product) {
        res.status(404).json({ message: 'Product not found' });
    } else {
        res.status(200).json(product);
    }
});

// POST /products
router.post('/', (req, res) => {
    const product = req.body;
    console.log(product);
    products.push(product);
    res.status(201).json(product);
});

// PUT /products/:id
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
        res.status(404).json({ message: 'Product not found' });
    } else {
        products[index] = req.body;
        res.status(200).json(products[index]);
    }
});

// DELETE /products/:id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
        res.status(404).json({ message: 'Product not found' });
    } else {
        products.splice(index, 1);
        res.status(200).json({ message: 'Product has been deleted' });
    }
});

module.exports = router;