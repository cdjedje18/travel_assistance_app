const config = require('../common/config')
const requests = require('../common/requests')


const gdpController = {
    index: async (req, res) => {

        let country = req.query?.country
        const lastYear = new Date().getFullYear() - 1

        if (country) {
            let url = `${config.gdpConfigs.apiUrl}/${country}/indicator/${config.gdpConfigs.populationIndicator};${config.gdpConfigs.gdpIndicator}?format=json&date=${lastYear}&source=2`

            const response = await requests.get(url)
            // console.log(response?.data)
            res.status(200).send(response?.data)

        } else {
            res.status(400).send({ message: "country name not provided" })
        }

    }

}

module.exports = gdpController;