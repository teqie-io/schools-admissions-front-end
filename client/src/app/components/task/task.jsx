import React, { useState } from 'react'
import Checkbox from '../../../stories/checkbox/checkbox'
import Chip from '../../../stories/chip/chip'
import clsx from 'clsx'

import './task.scss'
import { phone, chat, whatsapp, email } from './images'

const Task = ({ data }) => {
  return (
    <table className='w-full'>
      <thead className=''>
        <tr className='text-sm text-main-black h-10'>
          <th align='left' className='relative pt-2 pl-2' style={{ right: 2 }}>
            <TaskSvg />
          </th>
          <th align='left'>Tasks</th>
          <th align='left'>Maximum Time</th>
          <th align='left'>Reminders</th>
          <th align='left'>Linked Goal</th>
          <th align='left'>Person or Roles</th>
        </tr>
      </thead>

      <tbody className=''>
        {data.map((item, key) => {
          const [chips, setChips] = useState(item.person)

          return (
            <tr
              key={key}
              className='text-sm text-main-black'
              style={key % 2 === 0 ? { background: 'rgba(196, 196, 196, 0.2)' } : {}}
            >
              <td className='align-top pt-2 pl-2' style={{ width: '6rem' }}>
                <Checkbox />
              </td>
              <td className='align-top pt-2' style={{ width: '16.375rem' }}>
                {item.title}
              </td>
              <td className='' />
              <td className='' />
              <td className='' />
              <td className='pt-2 pb-2' style={{ width: '18.375rem' }}>
                <ul className='chips'>
                  {item.person &&
                    chips.map((person, key) => {
                      return (
                        <Chip
                          image='https://via.placeholder.com/18'
                          label={person.label}
                          deleteChip={true}
                          customStyle={{ height: 24 }}
                          chipAvatarStyle={{ width: 18, height: 18 }}
                          styleChip={person.role ? 'text' : 'contained'}
                          onDeleteClick={() => {
                            setChips([
                              ...chips.filter((value, index, arr) => {
                                return index !== key
                              })
                            ])
                          }}
                        />
                      )
                    })}
                </ul>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Task

const TaskSvg = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5 22H19C20.103 22 21 21.103 21 20V5C21 3.897 20.103 3 19 3H17C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2H8C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3H5C3.897 3 3 3.897 3 5V20C3 21.103 3.897 22 5 22ZM5 5H7V7H17V5H19V20H5V5Z'
        fill='black'
      />
      <path
        d='M11 13.586L9.20697 11.793L7.79297 13.207L11 16.414L16.207 11.207L14.793 9.79297L11 13.586Z'
        fill='black'
      />
    </svg>
  )
}
