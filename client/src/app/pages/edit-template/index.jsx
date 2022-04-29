import React, { useState } from 'react'
import clsx from 'clsx'

import Editor from '@components/editor/editor'
import { NavLinks } from '@components/header'
import { dataLinks } from '@entities/routes'
import Footer from '@components/footer/footer.jsx'
import { CompanyTabs } from '@stories'
import './edit-template.scss'

const dataTypes = ['Email', 'App Notification', 'SMS', 'Whatsapp']

const content = `<p>​<span style="white-space:pre-wrap;">Hello {{Name}}<br><br>On Behalf of {{School}}, I would like to invite {{Student Full Name}}. </span>​<br></p>`

export default function EditTemplate({ burger }) {
  const [typeState, setTypeState] = useState(dataTypes && dataTypes[0])

  const componentRender = [{ type: 'Email' }, { type: 'App Notification' }, { type: 'SMS' }, { type: 'Whatsapp' }]

  return (
    <div className={clsx('edit-template pr-24', burger ? 'pl-24 1400px:pl-80' : 'pl-24 1400px:pl-40')}>
      <NavLinks urls={dataLinks.editLinks} />
      <div className='namepage'>Edit Template</div>
      <p className='text-sm font-normal mb-3' style={{ color: 'rgba(0, 0, 0, 0.6)', width: '40.8rem' }}>
        Setup the templates for frequently sent emails. Only finished templates will be visible in your Email Panel
      </p>
      <div className='flex items-center w-full'>
        <CompanyTabs types={dataTypes} setTypeState={setTypeState} typeState={typeState} />
      </div>
      <div className='mb-20 pr-10'>
        {componentRender.map(
          (item, key) =>
            item.type === typeState && (
              <Editor subject={true} colorsButton={true} linkButton={true} content={content} key={key} />
            )
        )}
      </div>
      <Footer burger={burger} />
    </div>
  )
}
