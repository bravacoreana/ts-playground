import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import WeatherCard from './weatherCard'
import { Box } from '@mui/system'
import { Grid, IconButton, InputBase, Paper } from '@mui/material'
import { Add } from '@mui/icons-material'

const styleBox = {
  display: 'flex',
  justifyContents: 'space-around',
  boxSizing: 'border-box',
  padding: '5px 15px',
} as const

const styleInputBase = {
  flexGrow: 1,
} as const

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>(['Milan', 'Seoul'])
  const [cityInput, setCityInput] = useState<string>('')

  const handleCityButtonClick = () => {
    if (cityInput === '') {
      return
    }
    setCities([...cities, cityInput])
    setCityInput('')
  }

  const handleCityDeleteButtonClick = (index: number) => {
    cities.splice(index, 1)
    setCities([...cities])
  }

  return (
    <div>
      <Box mx="8px" my="16px">
        <Grid container>
          <Grid item xs zeroMinWidth>
            <Paper>
              <Box sx={styleBox}>
                <InputBase
                  placeholder="Add a city name"
                  sx={styleInputBase}
                  onChange={event => setCityInput(event.target.value)}
                />
                <IconButton onClick={handleCityButtonClick}>
                  <Add />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {cities.map((city, index) => (
        <WeatherCard
          key={index}
          city={city}
          onDelete={() => {
            handleCityDeleteButtonClick(index)
          }}
        />
      ))}
      <Box height="16px" />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
