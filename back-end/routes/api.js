const express = require('express');
const weatherControllerr = require('../controllers/weatherController');
const countryIndicator = require('../controllers/countryIndicatorController');
const exchangeController = require('../controllers/exchangeController');

const routes = express.Router();

routes.get("/weather", weatherControllerr.index)
routes.get("/countryIndicators", countryIndicator.index)
routes.get("/exchangeRates", exchangeController.index)


module.exports = routes;