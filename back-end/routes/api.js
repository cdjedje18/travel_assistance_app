const express = require('express');
const weatherControllerr = require('../controllers/weatherController');

const routes = express.Router();

routes.get("/weather", weatherControllerr.index)


module.exports = routes;