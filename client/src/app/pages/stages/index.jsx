import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { NavLinks } from '../../components/header'
import { dataLinks } from '../../entities/routes'
import './stages.scss'

export default function Stages({ burger }) {
  const [cards, setCards] = useState(data && data)
  return (
    <div className={clsx('stages pr-24', burger ? 'pl-24 1400px:pl-80' : 'pl-24 1400px:pl-40')}>
      <NavLinks urls={dataLinks.admissionsStagesLinks} />
      <div className='flex justify-between'>
        <div>
          <h1 className='text-base font-normal mt-7 mb-1.5'>Pre Enquiry</h1>
          <p className='text-sm font-normal' style={{ color: '#81878C', width: '16.438rem' }}>
            This is the stage where you got data or Refferal but havent contacted
          </p>
          <h1 className='text-base font-normal mt-12 mb-1.5'>Enquiry</h1>
          <p className='text-sm font-normal' style={{ color: '#81878C', width: '16.438rem' }}>
            Once the cantact is made my the admissions team
          </p>
        </div>
        <div className='flex flex-col'>
          {cards.map((item, key) => (
            <div className='flex' key={key}>
              <Cards item={item} setCards={setCards} num={key} cards={cards} />
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center w-full relative left-0 1340px:left-9 justify-between'>
        <div className='relative bottom-8'>
          <h1 className='text-base font-normal mb-1.5'>Closed</h1>
          <p className='text-sm font-normal' style={{ color: '#81878C', width: '16.438rem' }}>
            These stages represent results of Admission Journey
          </p>
        </div>
        <div className='flex justify-end w-full items-center'>
          {closedCardsData.map((item, key) => (
            <FooterCard key={key} title={item.title} body={item.body} type={item.type} />
          ))}
        </div>
      </div>
      <div className='flex items-center w-full relative left-0 1340px:left-9 justify-between'>
        <div className='relative bottom-8'>
          <h1 className='text-base font-normal'>Other</h1>
          <p className='text-sm font-normal' style={{ color: '#81878C', width: '16.438rem' }}>
            Inconclusive
          </p>
        </div>
        <div className='flex justify-end w-full items-center'>
          {otherCardsData.map((item, key) => (
            <FooterCard key={key} title={item.title} body={item.body} type={item.type} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const FooterCard = ({ title, body, type }) => {
  return title !== null ? (
    <div className='stages--dom-card justify-center items-center pl-0 pt-0 pb-0 mr-1 ml-1 1340px:mr-3.5 1340px:ml-3.5'>
      <p className='mb-2'>{title}</p>
      <p style={{ color: '#81878C' }}>{body}</p>
      <div
        className='absolute bottom-0 left-0 w-full rounded-br-lg rounded-bl-lg'
        style={{ height: '0.438rem', background: type }}
      />
    </div>
  ) : (
    <div className='mr-1 ml-1 1340px:mr-3.5 1340px:ml-3.5' style={{ width: ` 10.938rem` }} />
  )
}

FooterCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  type: PropTypes.string
}

export const Cards = ({ item, num, setCards, cards }) => {
  const addLeftCard = () => {
    cards[num].left === null
      ? (cards[num].left = { align: 'left', text: 'Left card', percent: 0 })
      : (cards[num].left = null)

    setCards([...cards])
  }

  const addMiddleCard = () => {
    cards.splice(num + 1, 0, {
      left: null,
      middle: { align: 'middle', text: 'Middle card', percent: 0 },
      right: null
    })

    setCards([...cards])
  }

  const addMiddleUpCard = () => {
    cards.splice(num, 0, {
      left: null,
      middle: { align: 'middle', text: 'Middle card', percent: 0 },
      right: null
    })

    setCards([...cards])
  }

  const removeDownCards = () => {
    cards.splice(num + 1, 1)

    setCards([...cards])
  }

  const removeUpCards = () => {
    cards.splice(num - 1, 1)

    setCards([...cards])
  }

  const addRightCard = () => {
    cards[num].right === null
      ? (cards[num].right = { align: 'right', text: 'Right card', percent: 0 })
      : (cards[num].right = null)

    setCards([...cards])
  }

  return (
    <React.Fragment>
      {(item.left !== null && (
        <div className='relative'>
          <div className='stages--dom-card'>
            <p>{item.left.text}</p>
            <p style={{ color: '#81878C' }}>{item.left.percent}% win likelihood</p>
          </div>
          <div className='bg-main-black h-10 absolute' style={{ width: 1, top: '6.25rem', left: '7.5rem' }} />
          <div
            className='bg-main-black absolute'
            style={{ height: 1, width: '15.5rem', top: '8.75rem', left: '7.5rem' }}
          />
        </div>
      )) || <div className='mr-9 ml-9' style={{ width: '10.938rem' }} />}
      {item.middle !== null && (
        <div className='relative'>
          <div className='stages--dom-card'>
            <p>{item.middle.text}</p>
            <p style={{ color: '#81878C' }}>{item.middle.percent}% win likelihood</p>
            <div className='group absolute w-10 h-20 top-0 left-0'>
              <button className='button-card button-card_left' onClick={() => addLeftCard()}>
                {cards[num].left === null ? '+' : '-'}
              </button>
            </div>
            <div className='group absolute h-8 top-0 left-10' style={{ width: '5.938rem' }}>
              <button
                className='button-card button-card_top__add'
                style={num !== 0 ? {} : { left: '2.1rem' }}
                onClick={() => addMiddleUpCard()}
              >
                +
              </button>

              {num !== 0 && (
                <button className='button-card button-card_top__remove' onClick={() => removeUpCards()}>
                  -
                </button>
              )}
            </div>
            <div className='group absolute  h-8 bottom-0 left-10' style={{ width: '5.938rem' }}>
              <button
                className='button-card button-card_middle__add'
                style={num + 1 !== cards.length ? {} : { left: '2.1rem' }}
                onClick={() => addMiddleCard()}
              >
                +
              </button>
              {num + 1 !== cards.length && (
                <button className='button-card button-card_middle__remove' onClick={() => removeDownCards()}>
                  -
                </button>
              )}
            </div>
            <div className='group absolute  w-10 h-20 top-0 right-0'>
              <button className='button-card button-card_right' onClick={() => addRightCard()}>
                {cards[num].right === null ? '+' : '-'}
              </button>
            </div>
          </div>
          {num + 1 !== cards.length && (
            <div
              className='bg-main-black absolute'
              style={{ width: 1, height: '4.25rem', top: '6.25rem', left: '7.5rem' }}
            />
          )}
        </div>
      )}
      {(item.right !== null && (
        <div className='relative'>
          <div className='stages--dom-card'>
            <p>{item.right.text}</p>
            <p style={{ color: '#81878C' }}>{item.right.percent}% win likelihood</p>
          </div>
          <div className='bg-main-black h-10 absolute' style={{ width: 1, top: '6.25rem', left: '7.5rem' }} />
          <div
            className='bg-main-black absolute'
            style={{ height: 1, width: '15.5rem', top: '8.75rem', right: '7.9rem' }}
          />
        </div>
      )) || <div className='mr-9 ml-9' style={{ width: '10.938rem' }} />}
    </React.Fragment>
  )
}

Cards.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for object - left: object, middle: object, right: object
   * @param Object Keys for object(left, middle, right) -  align: string, text: string, percent: number
   * @param Example  [
  {
    left: { align: 'left', text: 'Data Collection', percent: 1 },
    middle: { align: 'middle', text: 'Refferal', percent: 2 },
    right: { align: 'right', text: 'Refferal', percent: 1 }
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Phone call', percent: 5 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Home Visit', percent: 5 },
    right: { align: 'right', text: 'Direct Enquiry', percent: 20 }
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Campus Visit', percent: 15 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Application', percent: 60 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Cadmission Test', percent: 80 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Principal Meeting', percent: 90 },
    right: null
  }
]
   **/
  data: PropTypes.array,
  item: PropTypes.object,
  num: PropTypes.number,
  setCards: PropTypes.function,
  cards: PropTypes.array
}

const data = [
  {
    left: { align: 'left', text: 'Data Collection', percent: 1 },
    middle: { align: 'middle', text: 'Refferal', percent: 2 },
    right: { align: 'right', text: 'Refferal', percent: 1 }
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Phone call', percent: 5 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Home Visit', percent: 5 },
    right: { align: 'right', text: 'Direct Enquiry', percent: 20 }
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Campus Visit', percent: 15 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Application', percent: 60 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Cadmission Test', percent: 80 },
    right: null
  },
  {
    left: null,
    middle: { align: 'middle', text: 'Principal Meeting', percent: 90 },
    right: null
  }
]

const closedCardsData = [
  { title: 'Won', body: 'Only closed ones', type: '#27C59A' },
  { title: 'Unqulified', body: 'Fee or Other issues', type: '#404EED' },
  { title: 'Failed', body: 'School Criteria not met', type: '#F2C94C' },
  { title: 'Lost', body: 'Joined other schools', type: '#EB5757' }
]

const otherCardsData = [
  { title: null, body: null, type: null },
  { title: 'Contact Issue', body: '100% win likelihood', type: '#F2C94C' },
  { title: 'Upcoming Academic year', body: '100% win likelihood', type: '#F2C94C' },
  { title: null, body: null, type: null }
]
