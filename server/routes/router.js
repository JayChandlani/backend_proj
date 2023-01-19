const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');


route.get('/', services.homeRoutes);
route.get('/add-user', services.addUser);
route.get('/update', services.updateUser);
route.post('/api/users', controller.create);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);
route.get('/api/users', controller.find);
module.exports = route;