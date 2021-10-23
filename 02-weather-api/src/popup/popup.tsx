import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import WeatherCard from './weatherCard'
import SearchBar from './weatherCard/searchBar'

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>(['Milan', 'Seoul'])
  return (
    <div>
      <SearchBar />
      {cities.map((city, index) => (
        <WeatherCard key={index} city={city} />
      ))}
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
