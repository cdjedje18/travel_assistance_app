const config = require('../common/config')
const requests = require('../common/requests')


const exchangeController = {
    index: async (req, res) => {

        let url = `${config.exchangeConfigs.apiUrl}/v1/latest?access_key=${config.exchangeConfigs.apiKey}&symbols=MZN,ZAR,USD,GB`

        const response = await requests.get(url)

        const exchangeRates = Object.keys(response?.data?.rates)?.map((value) => (
            { id: value, value: parseFloat(response?.data?.rates[value]).toFixed(2) }
        ))


        res.status(200).send({ exchangeRates })

    }

}

module.exports = exchangeController;