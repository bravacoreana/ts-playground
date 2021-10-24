import React, { useEffect, useState } from 'react'
import { fetchOpenWeatherData, OpenWeatherData } from '../../utils/api'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, CardActions } from '@mui/material'

const WeatherCardContainer: React.FC<{
  children: React.ReactNode
  onDelete?: () => void
}> = ({ children, onDelete }) => {
  return (
    <Box mx={'4px'} my={'16px'}>
      <Card>
        <CardContent>{children}</CardContent>
        <CardActions>
          {onDelete && <Button onClick={onDelete}>Delete</Button>}
        </CardActions>
      </Card>
    </Box>
  )
}

const WeatherCard: React.FC<{ city: string; onDelete?: () => void }> = ({
  city,
  onDelete,
}) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null)
  const [cardState, setCardState] = useState<WeatherCardState>('loading')

  useEffect(() => {
    fetchOpenWeatherData(city)
      .then(data => {
        setWeatherData(data)
        setCardState('ready')
      })
      .catch(err => setCardState('error'))
  }, [city])

  if (cardState === 'loading' || cardState === 'error') {
    return (
      <WeatherCardContainer>
        <Typography variant="body1">
          {cardState === 'loading'
            ? 'Loading...'
            : 'Error: could not retrieve weather data for this city'}
        </Typography>
      </WeatherCardContainer>
    )
  }

  type WeatherCardState = 'loading' | 'error' | 'ready'

  return (
    <WeatherCardContainer onDelete={onDelete}>
      <Typography variant="h5">{weatherData.name}</Typography>
      <Typography variant="body1">
        {Math.round(weatherData.main.temp)} °C
      </Typography>
      <Typography variant="body1">
        Feels like: {Math.round(weatherData.main.feels_like)}
      </Typography>
    </WeatherCardContainer>
  )
}

export default WeatherCard
