import React, { useState } from 'react'
import clsx from 'clsx'

import { TasksPick, NotePick, CalendarPick, CallPick, MessagePick } from './sub-components'
import { filelistfill, group, mailunreadfill, phonefill, todofill } from './image'
import './application-panel.scss'

export default function ApplicationPanel() {
  const [status, setStatus] = useState('')

  const dataStatus = [
    {
      type: 'call',
      image: phonefill,
      bg: '#FFF7CD',
      labelBg: '#FFC107',
      labelNum: 12,
      component: <CallPick visible={status === 'call' ? true : false} />
    },
    {
      type: 'message',
      image: mailunreadfill,
      bg: '#C8FACD',
      labelBg: '#FFC107',
      labelNum: 0,
      component: <MessagePick visible={status === 'message' ? true : false} />
    },
    {
      type: 'tasks',
      image: todofill,
      bg: '#D0F2FF',
      labelBg: '#FFC107',
      labelNum: 0,
      component: <TasksPick visible={status === 'tasks' ? true : false} />
    },
    {
      type: 'calendar',
      image: group,
      bg: '#FFE7D9',
      labelBg: '#B72136',
      labelNum: 4,
      component: <CalendarPick visible={status === 'calendar' ? true : false} />
    },
    {
      type: 'note',
      image: filelistfill,
      bg: '#F4F6F8',
      labelBg: '#F4F6F8',
      labelNum: 0,
      component: <NotePick visible={status === 'note' ? true : false} />
    }
  ]

  return (
    <div className='application-panel'>
      <div className={clsx('application-panel-closed', status === '' ? 'hidden' : '')} onClick={() => setStatus('')} />
      {dataStatus.map((data) => {
        const styles = {
          button: { background: data.bg },
          label: {
            background: data.labelBg,
            bottom: '3.563rem',
            left: '1.625rem'
          }
        }

        return (
          <React.Fragment key={data.type}>
            <div className={clsx(status === '' ? 'pointer-events-none' : 'pointer-events-auto')}>{data.component}</div>
            <div className='relative'>
              <button
                className='application-panel-button'
                style={styles.button}
                onClick={() => setStatus(data.type === status ? '' : data.type)}
              >
                <img src={data.image} alt={data.type} />
              </button>
              {data.labelNum > 0 && (
                <label className='application-panel-label' style={styles.label}>
                  {data.labelNum}
                </label>
              )}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
