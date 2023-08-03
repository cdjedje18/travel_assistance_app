const axios = require('axios')



const requests = {
    get: async (url) => {
        try {
            return await axios.get(url)
        } catch (error) {
            return error?.response
        }
    }
}



module.exports = requests