import React from 'react'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

import { gradesData, gradesDataProgCard } from '@entities/data'
import { dataLinks } from '@entities/routes'
import { NavLinks } from '@components/header'
import { GradesCard } from '@components/campus-module'
import { searchgray, bifilterleft } from '@image'
import { ProdCard } from '@stories'
import './grades-programs.scss'

export default function GradesPrograms({ burger }) {
  const styles = {
    namepage: { top: '3.125rem' }
  }

  return (
    <div className={clsx('grades-programs', burger ? 'ml-80' : 'ml-40')}>
      <Fade clear duration={300}>
        <NavLinks urls={dataLinks.gradesLinks} />
        <h1 className='namepage' style={styles.namepage}>
          Grades and Programs
        </h1>
        <div className='flex'>
          <div className='grades-programs-search'>
            <div className='grades-programs-search-input'>
              <img className='grades-programs-search-input_img' src={searchgray} alt='search' />
              <input className='grades-programs-search-input_input' placeholder='Search' />
              <img className='grades-programs-search-input_sort' src={bifilterleft} alt='filter' />
            </div>
            {gradesData.map((item, key) => (
              <React.Fragment key={key}>
                {key === 0 && <hr className='hr-top' />}
                <div className='grades-programs-search-card'>
                  <h6>{item}</h6>
                </div>
                {key !== gradesData.length - 1 && <hr className='hr-bottom ' />}
              </React.Fragment>
            ))}
          </div>
          <div className='grades-programs-row'>
            <div className='grades-programs-row_card'>
              {gradesDataProgCard.map((item, key) => (
                <ProdCard
                  key={key}
                  access={true}
                  firstHeader={item.firstHeader}
                  firstName={item.firstName}
                  modal={item.modal}
                  opinio={item.opinio}
                  secondHeader={item.secondHeader}
                  secondName={item.secondName}
                />
              ))}
            </div>
            <GradesCard />
          </div>
        </div>
      </Fade>
    </div>
  )
}

GradesPrograms.propTypes = {
  burger: PropTypes.bool
}
