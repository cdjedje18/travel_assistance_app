import { useRef, useState } from "react"
import { WeatherCard, } from "../components/WeatherCard"
import { getCountryIndicators, getExhangeRates, getWeatherData } from "../common/requests"
import { ExchangeRate } from "../components/ExchangeRate"
import { CountryIndicatorItem } from "../components/CountryIndicatorItem"

export const Home = () => {

    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const [countryIndicators, setCountryIndicators] = useState(null)
    const [exchangeRates, setExchangeRates] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    const handleSearch = async () => {
        console.log("Clicked!")

        setIsLoading(true)

        let weatherDataResponse = await getWeatherData(city)

        let countryIndicatorsResponse = await getCountryIndicators(weatherDataResponse?.data?.country)
        let exchangeRatesResponse = await getExhangeRates()
        
        setWeatherData(weatherDataResponse?.data)
        setCountryIndicators(countryIndicatorsResponse?.data)
        setExchangeRates(exchangeRatesResponse?.data)
        setIsLoading(false)

    }


    // console.log({ countryIndicators })

    return (

        <div className="container position-relative">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="site-heading">
                        <h1>Search City</h1>
                    </div>
                    <div className="input-group mt-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type city name"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={() => handleSearch()} disabled={city === ""}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading && (
                <div className="row mt-5 justify-content-center" style={{ height: "4rem" }}>
                    <div className="col-md-12 col-lg-12 col-xl-12 justify-content-center d-flex">
                        <img src="assets/img/loading.gif" alt="" />
                    </div>
                </div>
            )}

            {!isLoading && (
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-12 col-lg-10 col-xl-8">
                        <div className="row">
                            {weatherData?.weatherData?.map((item) => (
                                <WeatherCard temp={item?.temp} date={item?.date} key={item?.id} />
                            ))}
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-10 col-xl-8 mt-4">
                        <div className="row">
                            <div className="col-md-12">
                                {(exchangeRates?.exchangeRates && exchangeRates?.exchangeRates?.length > 0) && (
                                    <div className="card" style={{ borderRadius: "0.5rem" }}>
                                        <div className="card-body">
                                            <div className="row">
                                                {exchangeRates?.exchangeRates?.map((item) => (
                                                    <ExchangeRate title={item?.id} value={item?.value} key={item?.id} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="col-md-12 mt-2">
                                {(countryIndicators?.countryIndicators && countryIndicators?.countryIndicators.length > 0) && (
                                    <div className="card" style={{ borderRadius: "0.5rem" }}>
                                        <div className="card-body">
                                            <div className="row">
                                                {countryIndicators?.countryIndicators?.map((item) => (
                                                    <CountryIndicatorItem title={item?.title} value={item?.value} key={item?.id} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>

    )
}