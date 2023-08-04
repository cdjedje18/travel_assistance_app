let config = {
    weatherConfigs: {
        apiUrl: "https://api.openweathermap.org/data/2.5/forecast",
        apiKey: "702bcddbb96297c82ae7e42d57bd975f"
    },
    gdpConfigs : {
        apiUrl: "https://api.worldbank.org/v2/country",
        populationIndicator: "SP.POP.TOTL",
        gdpIndicator: "NY.GDP.PCAP.CD"
    },
    exchangeConfigs: {
        apiUrl: "http://api.exchangeratesapi.io",
        apiKey: "0341e5ca947495f61bd996ac662aa1b7"
    }
}

module.exports = config