import React from 'react'
import Zoom from 'react-reveal/Zoom'
import clsx from 'clsx'

import { mailunreadfill } from '../image'

const MessagePick = ({ visible }) => {
  return (
    <Zoom bottom duration={700} when={visible}>
      <div className={clsx('windows-field', visible ? 'pointer-events-auto' : 'pointer-events-none hidden')}>
        <div className='flex items-center justify-between pt-5 pl-5 pr-5'>
          <div className='flex item'>
            <div
              className='w-10 h-10 mr-3 flex items-center justify-center rounded-lg mb-7'
              style={{ background: '#C8FACD' }}
            >
              <img src={mailunreadfill} alt='' />
            </div>
            <p className='font-semibold mt-2.5'>My Messages</p>
          </div>
          <button className='bg-main-blue w-6 h-6 text-white text-xl flex items-center justify-center rounded-full mb-9'>
            +
          </button>
        </div>
      </div>
    </Zoom>
  )
}

export default MessagePick
