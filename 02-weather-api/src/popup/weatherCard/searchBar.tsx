import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import { Grid, Paper } from '@mui/material'
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

const SearchBar = () => {
  return (
    <Box mx="8px" my="16px">
      <Grid container>
        <Grid item xs zeroMinWidth>
          <Paper>
            <Box sx={styleBox}>
              <InputBase placeholder="Add a city name" sx={styleInputBase} />
              <IconButton>
                <Add />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SearchBar
