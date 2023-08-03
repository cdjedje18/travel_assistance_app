const config = require('../common/config')
const requests = require('../common/requests')


const weatherController = {
    index: async (req, res) => {

        let city = req.query?.city

        if (city) {
            let url = `${config.weatherConfigs.apiUrl}?q=${city}&appid=${config.weatherConfigs.apiKey}&cnt=4&units=metric`
         
            const response = await requests.get(url)

            if (response?.data?.cod === '200') {

                const weatherData = response?.data?.list?.map((value) => ({
                    id: value?.dt,
                    min: value?.main?.temp_min, max: value?.main?.temp_max, temp: value?.main?.temp, date: value?.dt_txt
                }))

                return res.status(parseInt(response?.data?.cod)).send({ country: response?.data?.city?.country, city: response?.data?.city.name, weatherData: weatherData })
            } else {
                return res.status(parseInt(response?.data?.cod)).send(response?.data)
            }

        } else {
            res.status(400).send({ message: "City name not provided" })
        }

    }

}

module.exports = weatherController;