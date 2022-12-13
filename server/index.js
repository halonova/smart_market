const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const { products } = require('./controllers');
const app = express();
const port = 3000;
const path = require('path');

app.use(bodyParser.json());

//app.get('/', (req, res) => res.send(products));

app.use('/products', controllers.products);

app.use(express.static('../client/public'));

app.listen(port, () => console.log(`Listening on port ${port}!`));
