import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import StaticDatePicker from '@mui/lab/StaticDatePicker'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const StaticPicker = ({ pValue, psetValue, color }) => {
  const [value, setValue] = useState(new Date())

  const theme = createTheme({
    palette: {
      primary: { main: color || '#27C59A' }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs='desktop'
          openTo='day'
          minDate={new Date(2019, 11, 24)}
          maxDate={new Date(2025, 11, 24)}
          value={pValue ? pValue : value}
          shouldDisableYear={null}
          onChange={(newValue) => {
            psetValue ? psetValue(newValue) : setValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default StaticPicker

StaticPicker.propTypes = {
  pValue: PropTypes.string,
  psetValue: PropTypes.func,
  color: PropTypes.string
}
