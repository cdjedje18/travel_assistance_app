const weatherController = {
    index: async (req, res) => {

        res.status(200).send({ weather: null })

    }

}

module.exports = weatherController;