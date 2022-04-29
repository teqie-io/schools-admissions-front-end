import React from 'react'

import BloomHeader from '@components/bloomingdale/header/header'

import StudentCard from '@components/bloomingdale/student-card/studentCard'

import './cabinet.scss'

const studentsList = [
  { name: 'Maria Marko', code: 'MY2', year: 2019, pending: true },
  { name: 'Rio Ozawa', code: 'MY1', year: 2021 }
]

const BloomCabinet = () => {
  return (
    <>
      <BloomHeader />
      <div className='bloom-cabinet mt-20'>
        <div className='bloom-cabinet-admissions'>
          <h4 className='bloom-cabinet-admissions_title bloom-cabinet_title '>Admissions</h4>
          <div className='bloom-cabinet-admissions_list'>
            {studentsList.map((student, idx) => {
              return (
                <StudentCard
                  key={student.name + '_' + idx}
                  avatar={student.avatar}
                  name={student.name}
                  code={student.code}
                  year={student.year}
                  pending={student.pending}
                />
              )
            })}
            <button className='bloom-cabinet-admissions_btn none-after'>
              <span>+</span>
              Add new applicant
            </button>
          </div>
        </div>
        <div className='bloom-cabinet-payment'>
          <h4 className='bloom-cabinet-payment_title bloom-cabinet_title'>Free Payment</h4>
        </div>
      </div>
    </>
  )
}

export default BloomCabinet
