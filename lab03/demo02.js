const express = require('express');
const app = express();

//define server information
const HOST = 'localhost';
const PORT = 3000;

//define middleware
const logger = require('./middleware/log-middeware');
app.use(logger);

//define route
app.get('/', (req, res) => {
    res.send('Hello World');
});

const productRouter = require('./routes/product.route');
app.use('/products', productRouter);

//start server
app.listen(PORT, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});