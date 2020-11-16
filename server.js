const express = require("express")
const mongoose = require("mongoose")
const requireDir = require('require-dir')
const cors = require('cors');


//Iniciando o App
const app = express()
app.use(express.json()) //Permitir que envie dados da aplicação no formato .JSON (Mais usado para api REST)
app.use(cors()) //Para liberar acesso à todos os dominios.

//Iniciando o MongoDb
mongoose.connect(`mongodb://localhost:27017/nodeapi`, { useNewUrlParser: true, useUnifiedTopology: true })

requireDir('./src/models')


//rotas

app.use('/api', require('./src/routes'))

app.listen(3333)