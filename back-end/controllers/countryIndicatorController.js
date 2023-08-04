const config = require('../common/config')
const requests = require('../common/requests')


const countryIndicatorController = {
    index: async (req, res) => {

        let country = req.query?.country
        const lastYear = new Date().getFullYear() - 1

        if (country) {
            let url = `${config.gdpConfigs.apiUrl}/${country}/indicator/${config.gdpConfigs.populationIndicator};${config.gdpConfigs.gdpIndicator}?format=json&date=${lastYear}&source=2`

            const response = await requests.get(url)
    
            const countryIndicators = response?.data[1]?.map((value) => ({
                id: value?.indicator?.id, title: value?.indicator?.value,
                value: parseInt(value?.value), date: value?.date
            }))

            res.status(200).send({ countryIndicators })

        } else {
            res.status(400).send({ message: "country name not provided" })
        }

    }

}

module.exports = countryIndicatorController;