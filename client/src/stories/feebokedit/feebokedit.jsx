import React from 'react'
import PropTypes from 'prop-types'

import { Card } from '../../app/pages/finance-module/feebook-edit'

export default function FeebokEditCard() {
  return (
    <div>
      <Card />
    </div>
  )
}

FeebokEditCard.propTypes = {
  /**  @param Type An Object.
   * @param Object Keys for objects - globalFee: string, admissionFee: string, bookFee: string, types: array, customFee: array
   * @param customFee Keys for object - term: number, value: string, date: string
   * @param Example {
   *  globalFee: "15000",
   *  admissionFee: "10000",
   *  bookFee: "2000",
   *  types: ['Monthly', 'Quaterly', 'Trimester', 'Half Yearly', 'Term Dates', 'Custom'],
   *  customFee: [
   * {term: 1, value: "10000", date: "Feb 20, 2022"},
   * {term: 2, value: "10000", date: "Feb 20, 2022"},
   * {term: 3, value: "10000", date: "Feb 20, 2022"},
   * {term: 4, value: "10000", date: "Feb 20, 2022"}
   * ]
   * }
   **/
  data: PropTypes.object
}
