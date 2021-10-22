import React from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import WeatherCard from './weatherCard'

const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city="Milan" />
      <WeatherCard city="Seoul" />
      <WeatherCard city="error" />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
