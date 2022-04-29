import React, { useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import StaticDatePicker from '@mui/lab/StaticDatePicker'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Zoom from 'react-reveal/Zoom'
import clsx from 'clsx'

import { mainavatar } from '@image'
import { group } from '../image'

const theme = createTheme({
  palette: {
    primary: { main: '#27C59A' }
  }
})

const CalendarPick = ({ visible }) => {
  const [value, setValue] = useState(new Date())
  const [shed, setShed] = useState(false)

  return (
    <Zoom bottom duration={700} when={visible}>
      <div className={clsx('windows-field', visible ? 'pointer-events-auto' : 'pointer-events-none hidden')}>
        <div className='flex items-center justify-between pt-5 pl-5 pr-5'>
          <div className='flex item'>
            <div
              className='w-10 h-10 mr-3 flex items-center justify-center rounded-lg mb-7'
              style={{ background: '#FFE7D9' }}
            >
              <img src={group} alt='' />
            </div>
            <p className='font-semibold mt-2.5'>Calendar</p>
          </div>
          <button className='bg-main-blue w-6 h-6 text-white text-xl flex items-center justify-center rounded-full mb-9'>
            +
          </button>
        </div>
        <div style={{ height: 330, overflow: 'hidden' }}>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                displayStaticWrapperAs='desktop'
                openTo='day'
                minDate={new Date(2019, 11, 24)}
                maxDate={new Date(2025, 11, 24)}
                value={value}
                shouldDisableYear={null}
                onChange={(newValue) => {
                  setValue(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
        <p className='text-base pl-5 mb-2'>Schedule</p>
        <div className='w-full flex items-center flex-col'>
          {shed ? (
            <React.Fragment>
              <div className='maincard'>
                <div className='text-sm font-semibold flex items-center mb-1'>
                  Meeting with{' '}
                  <span className='mr-2 ml-2' style={{ color: '#0C53B7' }}>
                    Dhruv Malpuri’s Parent{' '}
                  </span>{' '}
                  by
                  <img className='w-5 h-5 ml-2' src={mainavatar} />
                </div>
                <p className='text-xs text-second-gray mt-1'>Feb 10, 2021 at 12:15 PM GMT +5:30</p>
              </div>
              <div className='maincard'>
                <div className='text-sm font-semibold flex items-center mb-1'>
                  Meeting with{' '}
                  <span className='mr-2 ml-2' style={{ color: '#0C53B7' }}>
                    Dhruv Malpuri’s Parent{' '}
                  </span>{' '}
                  by
                  <img className='w-5 h-5 ml-2' src={mainavatar} />
                </div>
                <p className='text-xs text-second-gray mt-1'>Feb 10, 2021 at 12:15 PM GMT +5:30</p>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className='mb-2 text-sm text-second-gray'>Nothing on schedule.</p>
              <button
                className='bg-main-blue flex items-center justify-center text-white font-semibold'
                style={{ width: 342, height: 42 }}
                onClick={() => setShed(true)}
              >
                Schedule an Activity
              </button>
            </React.Fragment>
          )}
        </div>
      </div>{' '}
    </Zoom>
  )
}

export default CalendarPick
