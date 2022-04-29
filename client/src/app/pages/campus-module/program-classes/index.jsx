import React from 'react'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

import { dataProgCard } from '@entities/data'
import { dataLinks } from '@entities/routes'
import { NavLinks } from '@components/header'
import Footer from '@components/footer/footer.jsx'
import { ProdCard } from '@stories'
import { ProgramCard } from '@components/campus-module'

import './program-classes.scss'

export default function ProgramClasses({ burger }) {
  const styles = {
    namepage: { top: '3.125rem' }
  }

  return (
    <div className={clsx('program-classes', burger ? 'ml-80' : 'ml-40')}>
      <Fade clear duration={300}>
        <div className='fixed'>
          <NavLinks urls={dataLinks.classesLinks} />
          <h1 className='namepage' style={styles.namepage}>
            Program and Classes
          </h1>
        </div>
        <table className='table'>
          <thead>
            <tr>
              {dataProgCard.map((item, key) => (
                <th key={key}>
                  <ProdCard
                    firstHeader={item.firstHeader}
                    firstName={item.firstName}
                    modal={item.modal}
                    access={key === 0 ? true : false}
                    opinio={item.opinio}
                    secondHeader={item.secondHeader}
                    secondName={item.secondName}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <ProgramCard preName='Pre Kindergarten 1' clsName='Playgroup' />
            <ProgramCard preName='Pre Kindergarten 2' clsName='Nursery' />
          </tbody>
        </table>
      </Fade>
      <Footer burger={burger} />
    </div>
  )
}

ProgramClasses.propTypes = {
  burger: PropTypes.bool
}
