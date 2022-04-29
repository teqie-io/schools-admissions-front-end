import React, { useState } from 'react'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

import { feebookFieldRow } from '../../../entities/data'
import { anal, arrow, analarrow } from '../../../static/image'
import { TypesOfFees, ToggleButton, FeeTermsCard } from '../../../../stories'
import { dataLinks } from '../../../entities/routes'
import { NavLinks } from '../../../components/header'
import './feebook-edit.scss'

const types = ['Monthly', 'Quaterly', 'Trimester', 'Half Yearly', 'Term Dates', 'Custom']

export default function FeebookEdit({ burger }) {
  return (
    <div className={clsx('feebook-edit', burger ? 'ml-80' : 'ml-40')}>
      <Fade clear duration={300}>
        <NavLinks urls={dataLinks.feebooksLinksEdit} />
        <h1 className='namepage'>Fee Book IB 2021-22</h1>
        <div className='flex'>
          <Card />
          <div className='feebook-edit-field'>
            {feebookFieldRow.map((item, key) => {
              return (
                <div key={key} className='flex justify-between mb-10'>
                  <div className={`feebook-edit-field_dot feebook-edit-field_${item.style}`} />
                  <p className='ml-4'>{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Fade>
    </div>
  )
}

export const Card = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [admission, setAdmission] = useState(true)
  const [book, setBook] = useState(false)
  const [active, setActive] = useState(types && types[0])

  const [numFee, setNumFee] = useState('15000')
  const [numBook, setNumBook] = useState('2000')
  const [numAdms, setNumAdms] = useState('10000')

  const stringValidation = (val) =>
    val > 999
      ? val < 9999
        ? val.substr(0, 1) + ',' + val.substr(1, val.length)
        : val < 99999
        ? val.substr(0, 2) + ',' + val.substr(2, val.length)
        : val.substr(0, 3) + ',' + val.substr(3, val.length)
      : val

  const [numberTerms, setNumberTerms] = useState(4)
  let termsArray = [...Array(Number(numberTerms)).keys()]

  const styles = {
    p: { color: '#81878c', fontSize: '0.875rem', marginBottom: '0.313rem' },
    img: { marginBottom: '0.125rem', marginLeft: '0.313rem' },
    span: { fontSize: '0.75rem', color: '#2ED775', marginBottom: '0.063rem' }
  }

  return (
    <React.Fragment>
      <div className={clsx('feebook-edit-card', isOpen ? 'feebook-edit-card_open' : 'feebook-edit-card_closed')}>
        <div className='feebook-edit-card_row' onClick={() => setIsOpen(!isOpen)}>
          <p className='font-normal text-base ml-8'>Early Years 1</p>
          <TypesOfFees
            title={`${active} Fee`}
            sum={active !== 'Custom' ? `₹ ${stringValidation(numFee)}` : numberTerms > 0 ? numberTerms : '0'}
          />
          <TypesOfFees title='Book-Kit Fee' sum={`₹ ${stringValidation(numBook)}`} />
          <TypesOfFees
            title='Admission Fee'
            sum={active === 'Custom' ? `Custom Fee` : `₹ ${stringValidation(numAdms)}`}
          />
          <TypesOfFees title='Est. Annual Fee' sum='₹ 105,000' />
          <div className='flex items-center'>
            <img src={anal} />
            <span className='ml-1'>+2.6%</span>
          </div>
          <button className='feebook-edit-card_row_button'>
            <img src={arrow} />
          </button>
        </div>
        {isOpen && (
          <div className='feebook-edit-card_content'>
            <h3 className=' font-normal text-sm'>Fee Type</h3>
            <div className='feebook-edit-card_content_buttons'>
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setActive(type)
                  }}
                  className={clsx('tab-button', type === active && 'tab-button_active')}
                >
                  {type}
                </button>
              ))}
            </div>
            <h3 className=' font-normal text-sm'>Fee Distribution</h3>
            <div className='flex ml-1.5 mb-3'>
              <div className='flex flex-col w-40'>
                <p style={styles.p}>{active === 'Custom' ? 'Number of Terms' : `${active} Fee`}</p>
                <p className='flex items-center'>
                  {active === 'Custom' ? (
                    <input
                      value={numberTerms}
                      type='number'
                      className='w-14'
                      onChange={(e) => setNumberTerms(e.target.value)}
                    />
                  ) : (
                    <React.Fragment>
                      ₹{' '}
                      <input
                        value={numFee}
                        type='number'
                        className='ml-1'
                        style={{ maxWidth: '3.5rem' }}
                        onChange={(e) => setNumFee(e.target.value)}
                      />{' '}
                      <img src={analarrow} style={styles.img} />
                      <span style={styles.span}>8%</span>
                    </React.Fragment>
                  )}
                </p>
              </div>
              {active !== 'Custom' && (
                <div className='flex flex-col w-40 mr-6'>
                  <p className='flex items-center' style={styles.p}>
                    Admission Fee
                    <ToggleButton
                      value={admission}
                      onChange={() => {
                        setAdmission(!admission)
                      }}
                      inputSize='smalling'
                      customStyle={styles.img}
                    />
                  </p>
                  <p className={clsx('flex items-center', admission ? ' card-row_active' : ' card-row')}>
                    ₹{' '}
                    <input
                      value={numAdms}
                      type='number'
                      className='ml-1'
                      style={{ maxWidth: '3.5rem' }}
                      onChange={(e) => setNumAdms(e.target.value)}
                    />{' '}
                    <img src={analarrow} style={styles.img} />
                    <span style={styles.span}>5%</span>
                  </p>
                </div>
              )}
              <div className='flex flex-col'>
                <p className='flex items-center' style={styles.p}>
                  Book Fee
                  <ToggleButton
                    value={book}
                    onChange={() => {
                      setBook(!book)
                    }}
                    inputSize='smalling'
                    customStyle={styles.img}
                  />
                </p>
                <p className={clsx('flex items-center', book ? ' card-row_active' : ' card-row')}>
                  ₹{' '}
                  <input
                    value={numBook}
                    type='number'
                    className='ml-1'
                    style={{ maxWidth: '3.5rem' }}
                    onChange={(e) => setNumBook(e.target.value)}
                  />{' '}
                  <img src={analarrow} style={styles.img} />
                  <span style={styles.span}>2%</span>
                </p>
              </div>
            </div>
            {active === 'Custom' &&
              termsArray.map((item, key) => (
                <FeeTermsCard admNum={10000} key={key} num={key} maxValue={termsArray.length} />
              ))}
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

FeebookEdit.propTypes = {
  burger: PropTypes.bool
}
