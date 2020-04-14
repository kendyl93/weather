import React, {  useState } from "react"
import axios from "axios"
import "./App.css"


const API_KEY = "dcc5b65560b4c5a817bd29988271028e"

    
const getCityData = setData => async cityName =>  {
  try {

    const result = await axios(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
      )
      debugger;

    setData(result.data.list)
  } catch (error) {
    console.error(error)
  }
}

const fromKelvinsToCelcius = value => Math.round(value - 273.15);

const calculateDataToCelcius = data => data.map(fromKelvinsToCelcius)

const App = () => {
  const [data, setData] = useState()
  const [cityName, setCityName] = useState('London');

  const getCityDataByName = getCityData(setData)
  const handleCityName = ({target: {value}})=> setCityName(value)

  const onFormSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();
    await getCityDataByName(cityName)
  }

  return (
    <div className="App">
      <header className="App-header">Weather tracker</header>
      <form onSubmit={onFormSubmit}>
      <input type="text" value={cityName} onChange={handleCityName} placeholder="i.e. London"/>
      <button type="submit">Get</button>
    </form>  
  {data && console.log({ data, KK: calculateDataToCelcius(data.map(({main: {temp}})=>temp))})}
    </div>
  )
}

export default App
