import React from 'react'
import PropTypes from 'prop-types'

import OverviewCardWindow from './overviewcardwindow.jsx'
import { mainavatar, peoplefill } from '../../app/static/image'
import './overviewcard.scss'

const OverviewCard = ({ data, title, body = 'Bloomingdale, Gallileo' }) => {
  return (
    <div className='overview-card'>
      <div className='overview-card-group'>
        <div className='flex flex-col'>
          <h3 className='text-base text-main-black font-semibold'>{title}</h3>
          <p className='text-xs text-second-gray'>{body}</p>
        </div>
        <div className='flex items-center'>
          <img src={peoplefill} alt='' />
          <div className='flex -space-x-2 overflow-hidden ml-2'>
            {[0, 1, 2].map((key) => (
              <img key={key} className='inline-block h-9 w-9 rounded-full ring-2 ring-white' src={mainavatar} alt='' />
            ))}
          </div>
        </div>
      </div>
      {data.map((item, key) => (
        <OverviewCardWindow title={item.title} number={item.number} key={key} />
      ))}
    </div>
  )
}

OverviewCard.propTypes = {
  /**  @param Type An object.
   * @param Object Keys for objects - data: array, title: string
   * @param data An array for objects. Keys for object - title: string, link: string, number: string
   * @param Example {
  data: [
        { title: 'Enquiries', link: '', number: '20' },
        { title: 'Application', link: '', number: '8' },
        { title: 'E Signature', link: '', number: '4' },
        { title: 'Exam', link: '', number: '2' },
        { title: 'Approval', link: '', number: '2' },
        { title: 'Closed', link: '', number: '3' },
        { title: 'Failed', link: '', number: '2' }
      ],
  title: 'Playgroup',
  location: 'Bloomingdale, Gallileo'
}
   **/
  data: PropTypes.array
}

export default OverviewCard
