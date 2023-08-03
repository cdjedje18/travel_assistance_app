const config = require('../common/config')
const requests = require('../common/requests')


const weatherController = {
    index: async (req, res) => {

        let city = req.query?.city

        if (city) {
            let url = `${config.weatherConfigs.apiUrl}?q=${city}&appid=${config.weatherConfigs.apiKey}&cnt=2`

            const response = await requests.get(url)
            // console.log(response.data)

            if (response?.data?.code === 200) {
                return res.status(parseInt(response?.data?.cod)).send(response?.data)
            } else {
                return res.status(parseInt(response?.data?.cod)).send(response?.data)
            }

        } else {
            res.status(400).send({ message: "City name not provided" })
        }

    }

}

module.exports = weatherController;