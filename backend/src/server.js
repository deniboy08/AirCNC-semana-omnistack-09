const { request } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect(
    'mongodb+srv://omnistack:omnistack@omnistack.yc0ywnr.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//mongoose.connect('mongodb://omnistack:omnistack@ac-u20ajod-shard-00-00.9afjt4t.mongodb.net:27017,ac-u20ajod-shard-00-01.9afjt4t.mongodb.net:27017,ac-u20ajod-shard-00-02.9afjt4t.mongodb.net:27017/?ssl=true&replicaSet=atlas-2fkuzg-shard-0&authSource=admin&retryWrites=true&w=majority')

// GET, POST, PUT, DELETE

//req.query = Acessar query params
//req.params = Acessar route params(para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição)

//função para escolher endereço unico para acesso a API
    //app.use(cors({origin: 'http://localhost:3333'}));

//função para liberar uso da API para geral
app.use(cors());

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
