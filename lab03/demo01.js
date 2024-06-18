const express = require('express');
const app = express();

//define server information
const HOST = 'localhost';
const PORT = 3000;

//define route
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain');
    res.send('POST request to the homepage');
});

app.put('/', (req, res) => {
    res.set({'Content-Type': 'text/plain'});
    res.send('PUT request to the homepage');
});

app.delete('/', (req, res) => {
    res.status(200).send('DELETE request to the homepage');
});

//start server
app.listen(PORT, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});