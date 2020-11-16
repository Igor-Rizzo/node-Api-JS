const express = require('express');

const routes = express.Router()

const ProductController = require("./controllers/ProductController")

// Rota
routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.post('/products', ProductController.store) //Post sempre que for uma rota para criar novos objetos
routes.put("/products/:id", ProductController.update)//Atualiza o objeto
routes.delete("/products/:id", ProductController.destroy)

module.exports = routes;