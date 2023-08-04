import { configs } from "./config"
import axios from 'axios'

export const getWeatherData = async (city) => {
    const url = `${configs.apiUrl}/api/weather?city=${city}`

    try {
        return await axios.get(url)
    } catch (error) {
        return error?.response
    }
}

export const getCountryIndicators = async (country) => {
    const url = `${configs.apiUrl}/api/countryIndicators?country=${country}`
    try {
        return await axios.get(url)
    } catch (error) {
        return error?.response
    }
}

export const getExhangeRates = async () => {
    const url = `${configs.apiUrl}/api/exchangeRates`
    try {
        return await axios.get(url)
    } catch (error) {
        return error?.response
    }
}