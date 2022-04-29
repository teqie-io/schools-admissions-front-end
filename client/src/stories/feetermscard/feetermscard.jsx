import React, { useState } from 'react'
import Box from '@mui/material/Box'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopDatePicker from '@mui/lab/DatePicker'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import PropTypes from 'prop-types'

const theme = createTheme({
  palette: {
    primary: { main: '#27C59A' }
  }
})

export default function FeeTermsCard({ num, admNum, maxValue }) {
  const [value, setValue] = useState(new Date())
  const [isOpen, setOpen] = useState(false)
  const [admValue, setAdmValue] = useState(admNum)

  let dateValidation = value.toString().substr(4, 6) + ',' + value.toString().substr(10, 6)

  const styles = {
    p: { color: '#81878c', fontSize: '0.875rem', marginBottom: '0.313rem' }
  }

  return (
    <div className={`flex ml-1.5 mb-${(num + 1 === maxValue && 16) || 5}`}>
      <div className='flex flex-col w-40'>
        <p className='w-28' style={styles.p}>
          {`Term ${num + 1} Fee`}
        </p>
        <div className='flex items-center'>
          ₹{' '}
          <input
            className='w-24 text-black ml-1'
            type='number'
            value={admValue}
            onChange={(e) => setAdmValue(e.target.value)}
          />
        </div>
      </div>
      <div className='flex flex-col justify-between w-40'>
        <p className='w-28' style={styles.p}>
          Due Fee
        </p>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label='Custom input'
              value={value}
              onChange={(newValue) => {
                setValue(newValue)
              }}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <p className='flex items-center' ref={inputRef} onClick={() => setOpen(!isOpen)}>
                    {dateValidation}
                  </p>
                  {InputProps?.endAdornment}
                </Box>
              )}
            />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </div>
  )
}

FeeTermsCard.propTypes = { num: PropTypes.number, admNum: PropTypes.number, maxValue: PropTypes.number }
