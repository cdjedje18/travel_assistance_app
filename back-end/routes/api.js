const express = require('express');
const weatherControllerr = require('../controllers/weatherController');
const gdpController = require('../controllers/gdpController');

const routes = express.Router();

routes.get("/weather", weatherControllerr.index)
routes.get("/gdp", gdpController.index)


module.exports = routes;