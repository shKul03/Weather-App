import {BASE_URL, API_KEY} from './config'

export async function getWeather(city: string, aqi: boolean){
    const response = await(fetch(`${BASE_URL}current.json?key=${API_KEY}&q=${city}&aqi=${aqi}`));
    return await response.json();
}