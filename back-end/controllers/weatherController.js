const request = require('request')
const config = require('../common/config')


const weatherController = {
    index: async (req, res) => {

        let city = req.query?.city

        if (city) {
            let url = `${config.weatherConfigs.apiUrl}?q=${city}&appid=${config.weatherConfigs.apiKey}&cnt=2`

            request.get(url, (error, response, body) => {
                res.status(200).send({ weather: JSON.parse(body) })
            })

        } else {
            res.status(400).send({ message: "City name not provided" })
        }

    }

}

module.exports = weatherController;