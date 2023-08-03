const express = require('express');
const weatherControllerr = require('../controllers/weatherController');
const gdpController = require('../controllers/gdpController');

const routes = express.Router();

routes.get("/weather", weatherControllerr.index)
routes.get("/countryIndicators", gdpController.index)


module.exports = routes;