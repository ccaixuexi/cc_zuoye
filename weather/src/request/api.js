import { GaoDe_KEY } from "@/config";
import request from "./request";
export const fetchCityData = () => {
    return request.get('/config/district',{
        params: {
        keywords: '中国',
        subdistrict: 2,
        key: `${GaoDe_KEY}`
        }
    })
}
export const queryCurCity = () => {
    return request.get(`/ip?ip=219.140.34.161&key=${GaoDe_KEY}`)
}
export const queryCityAdcode = (city) => {
    return request.get(`/geocode/geo?address=${city}&key=${GaoDe_KEY}`)
}
export const queryCityWeatherAll = (adcode) => {
    return request.get(`/weather/weatherInfo?city=${adcode}&key=${GaoDe_KEY}&extensions=all`)
}
export const queryCityWeatherBase = (adcode) => {
    return request.get(`/weather/weatherInfo?city=${adcode}&key=${GaoDe_KEY}&extensions=base`)
}