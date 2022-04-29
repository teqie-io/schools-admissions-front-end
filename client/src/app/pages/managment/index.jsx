import React, { useState } from 'react'
import clsx from 'clsx'

import { arrow } from '../../static/image'
import { TypesOfFees, CompanyTabs } from '../../../stories'
import { NavLinks } from '../../components/header'
import { dataLinks } from '../../entities/routes'
import './managment.scss'

const dataTypes = ['Enquiry', 'Student', 'Parent', 'Campus', 'Staff']

export default function Managment({ burger }) {
  const [isData, setIsData] = useState(data)

  const [typeState, setTypeState] = useState(dataTypes && dataTypes[0])

  const addCard = () =>
    setIsData([
      ...isData,
      {
        name: 'Your Name',
        fields: [
          { title: 'Field Type', sum: 'Short Text', type: 'text', value: null },
          { title: 'Filterable', sum: '', type: 'checkbox', value: false },
          { title: 'Manager Lock', sum: '', type: 'checkbox', value: false },
          { title: 'Tansfer to', sum: 'none', type: 'text', value: null },
          { title: '', sum: '', type: 'text', value: null },
          { title: '', sum: '', type: 'text', value: null }
        ],
        inputState: [{ value: '1' }, { value: '2' }, { value: '3' }]
      }
    ])

  return (
    <div className={clsx('managment pr-24', burger ? 'pl-24 1400px:pl-80' : 'pl-24 1400px:pl-40')}>
      <NavLinks urls={dataLinks.managmentLinks} />
      <div className='mb-12'>
        <CompanyTabs types={dataTypes} setTypeState={setTypeState} typeState={typeState} />
      </div>
      {isData.map((item, key) => (
        <Card key={key} name={item.name} fields={item.fields} inputState={item.inputState} />
      ))}
      <button
        className='feebook-edit-card text-xs'
        style={{ width: '61.063rem', height: '3.375rem', color: 'rgba(145, 158, 171, 0.32)' }}
        onClick={() => addCard()}
      >
        + Add Field
      </button>
    </div>
  )
}

export const Card = ({ name, fields, inputState }) => {
  const [isOpen, setIsOpen] = useState(false)

  // inputState: [{ value: '1' }, { value: '2' }, { value: '3' }]
  const [state, setState] = useState(inputState)

  const addInput = () => setState([...state, { value: '' }])

  const upStateElement = (key) => {
    state.splice(key - 1, 0, state.splice(key, 1)[0])

    setState([...state])
  }

  const downStateElement = (key) => {
    state.splice(key + 1, 0, state.splice(key, 1)[0])

    setState([...state])
  }

  return (
    <div
      className={clsx('feebook-edit-card mb-10', isOpen ? 'feebook-edit-card_open' : 'feebook-edit-card_closed')}
      style={{ width: '61.063rem' }}
    >
      <div className='feebook-edit-card_row' style={{ width: '61.063rem' }} onClick={() => setIsOpen(!isOpen)}>
        <p className='w-36 ml-7'>{name}</p>
        {fields.map((item, key) => (
          <TypesOfFees key={key} title={item.title} sum={item.sum} type={item.type} value={item.value} />
        ))}
        <button className='feebook-edit-card_row_button'>
          <img src={arrow} />
        </button>
      </div>
      {isOpen && (
        <div className='feebook-edit-card_content'>
          <div className='flex'>
            <p>Choices</p>
            <div className='flex flex-col'>
              {state.map((item, key) => (
                <div key={key}>
                  <input
                    value={item.value}
                    onChange={(e) => {
                      state[key].value = e.target.value
                      setState([...state])
                    }}
                    placeholder='Enter your choice'
                    className='border rounded-lg mb-4 transition-all ml-16 mr-8 w-56 h-8 pl-2.5 pr-2.5 hover:border-main-blue focus:border-main-blue text-sm'
                  />
                  {key - 1 >= 0 && (
                    <button onClick={() => upStateElement(key)}>
                      <ArrowUp />
                    </button>
                  )}
                  {key + 1 <= state.length - 1 && (
                    <button onClick={() => downStateElement(key)}>
                      <ArrowDown />
                    </button>
                  )}
                </div>
              ))}

              <button className='text-sm text-main-blue mb-10' onClick={() => addInput()}>
                + Add Choice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const data = [
  {
    name: 'Previous School',
    fields: [
      { title: 'Field Type', sum: 'Short Text', type: 'text', value: null },
      { title: 'Filterable', sum: '', type: 'checkbox', value: true },
      { title: 'Manager Lock', sum: '', type: 'checkbox', value: true },
      { title: 'Tansfer to', sum: 'Student', type: 'text', value: null },
      { title: 'Unique', sum: '', type: 'checkbox', value: true },
      { title: 'Mandotory', sum: '', type: 'checkbox', value: true }
    ],
    inputState: [{ value: '1' }, { value: '2' }, { value: '3' }]
  },
  {
    name: 'Reson for Transfer',
    fields: [
      { title: 'Field Type', sum: 'Short Text', type: 'text', value: null },
      { title: 'Filterable', sum: '', type: 'checkbox', value: true },
      { title: 'Manager Lock', sum: '', type: 'checkbox', value: true },
      { title: 'Tansfer to', sum: 'none', type: 'text', value: null },
      { title: '', sum: '', type: 'text', value: null },
      { title: '', sum: '', type: 'text', value: null }
    ],
    inputState: [{ value: '1' }, { value: '2' }, { value: '3' }]
  }
]

const ArrowUp = () => {
  return (
    <svg width='12' className='mr-2' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M6 1L8.5 3.2M6 1L3.5 3.2M6 1V12M6 1L1 5.4M6 1L11 5.4' stroke='#2ED775' />
    </svg>
  )
}

const ArrowDown = () => {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M6 11L3.5 8.8M6 11L8.5 8.8M6 11L6 -2.38419e-07M6 11L11 6.6M6 11L1 6.6' stroke='#EB5757' />
    </svg>
  )
}
