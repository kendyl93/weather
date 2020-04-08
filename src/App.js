import React, { useEffect, useState } from "react"
import logo from "./logo.svg"
import axios from "axios"
import "./App.css"

const API_KEY = "dcc5b65560b4c5a817bd29988271028e"

const App = () => {
  const [data, setData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://api.openweathermap.org/data/2.5/forecast?q=München,DE&appid=${API_KEY}`
      )

      setData(result.data)
    }
    fetchData()
  }, [])

  console.log({ data })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
