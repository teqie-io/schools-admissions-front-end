import React, { useState } from 'react'

import Checkbox from '../../../stories/checkbox/checkbox'
import Chip from '../../../stories/chip/chip'
import clsx from 'clsx'

import './notifications.scss'
import { phone, chat, whatsapp, email } from './images'

const Notifications = ({ data }) => {
  return (
    <table className='notifications-table'>
      <thead className='notifications-table_header notifications-header'>
        <tr>
          <th>
            <ul className='notifications-header_icons'>
              <li>
                {' '}
                <img src={email} alt='icon' className='notifications-header_icon' />
              </li>
              <li>
                {' '}
                <img src={phone} alt='icon' className='notifications-header_icon' />
              </li>
              <li>
                {' '}
                <img src={chat} alt='icon' className='notifications-header_icon' />
              </li>
              <li>
                {' '}
                <img src={whatsapp} alt='icon' className='notifications-header_icon' />
              </li>
            </ul>
          </th>{' '}
          <th className='notifications-header_title'>Notification topics</th>
          <th className='notifications-header_title'>Person roles</th>
        </tr>
      </thead>

      <tbody className='notifications-table_body'>
        {data.map((item) => {
          const [chips, setChips] = useState(item.person)

          return (
            <tr className=''>
              <td className='notifications-checkbox-list'>
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
              </td>
              <td className='notifications-content'>{item.title}</td>
              <td className='notifications-chips pt-2 pb-2'>
                <ul className=''>
                  {item.person &&
                    chips.map((person, key) => {
                      return (
                        <Chip
                          image='https://via.placeholder.com/24'
                          label={person.label}
                          customStyle={{ height: 24 }}
                          chipAvatarStyle={{ width: 18, height: 18 }}
                          styleChip={person.role ? 'text' : 'contained'}
                          deleteChip={true}
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

export default Notifications
