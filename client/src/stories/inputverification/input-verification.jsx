import React, { useEffect, useMemo, createRef, useState } from 'react'
import PropTypes from 'prop-types'

import './input-verification.scss'

const InputVerification = ({ length, onChange, onCompleted, value: pValue, className }) => {
  const emptyValue = new Array(length).fill('-')

  const [activeIndex, setActiveIndex] = useState(-1)
  const [value, setValue] = useState(pValue ? pValue.split('') : emptyValue)

  const codeInputRef = createRef()
  const itemsRef = useMemo(() => new Array(length).fill(null).map(() => createRef()), [length])
  const focusItem = (index) => itemsRef[index]?.current && itemsRef[index].current.focus()

  const onItemFocus = (index) => () => {
    setActiveIndex(index)
    codeInputRef.current && codeInputRef.current.focus()
  }

  const onInputKeyUp = ({ key, keyCode }) => {
    const newValue = [...value]
    const codeInput = codeInputRef.current

    onItemFocus(activeIndex)

    if (keyCode === 46 || keyCode === 8) {
      newValue[activeIndex] = '-'
      setValue(newValue)

      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1)
        focusItem(activeIndex - 1)
      }

      return null
    }

    if (Number.isNaN(+key)) return null

    if (codeInput) codeInput.value = ''
    newValue[activeIndex] = key
    setValue(newValue)

    if (activeIndex + 1 !== length) {
      setActiveIndex(activeIndex + 1)
      focusItem(activeIndex + 1)

      return null
    }

    setActiveIndex(-1)
  }

  const onInputChange = (e) => {
    const { value: changeValue } = e.target
    new RegExp(`^[0-9]{${length}}$`).test(changeValue) ? setValue(changeValue.split('')) : null
  }

  useEffect(() => {
    const codeInput = codeInputRef.current
    if (!codeInput) return null

    const onPaste = (e) => {
      e.preventDefault()
      const pastedString = e.clipboardData?.getData('text')

      if (!pastedString) return null

      !Number.isNaN(+pastedString) && setValue(pastedString.split('').slice(0, length))
    }

    codeInput.addEventListener('paste', onPaste)
    return () => codeInput.removeEventListener('paste', onPaste)
  }, [])

  useEffect(() => {
    const stringValue = value.join('')

    stringValue.length === length && onCompleted(stringValue)

    onChange(stringValue)
  }, [value, length])

  useEffect(() => {
    if (typeof pValue !== 'string') return null

    if (pValue === '' && value.join('') === emptyValue.join('')) return null

    pValue !== value.join('') && setValue(pValue.split(''))
  }, [pValue])

  const renderItemText = (itemValue) => {
    if (itemValue === '-') return '-'
    return itemValue
  }

  return (
    <div
      className={`container-verifiction ${className}`}
      style={{ width: `calc(3.4rem * ${length} + 1.07rem * (${length} - 1))` }}
    >
      <input
        ref={codeInputRef}
        className='container-verifiction_input'
        type='text'
        onChange={onInputChange}
        onKeyUp={onInputKeyUp}
        onBlur={() => {
          activeIndex === -1 ? null : setActiveIndex(-1)
        }}
        style={{ width: '3.4rem', height: '3.4rem', left: `calc(${activeIndex} * 3.4rem + 1rem * ${activeIndex})` }}
      />

      {itemsRef.map((ref, i) => (
        <div
          key={i}
          ref={ref}
          role='button'
          tabIndex={0}
          style={{ width: '3.4rem', height: '3.4rem', lineHeight: '3.4rem' }}
          className={`container-verifiction_item ${i === activeIndex ? 'is-active' : ''}`}
          onFocus={onItemFocus(i)}
        >
          {renderItemText(value[i])}
        </div>
      ))}
    </div>
  )
}

export default InputVerification

InputVerification.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func,
  onCompleted: PropTypes.func,
  value: PropTypes.string
}

InputVerification.defaultProps = {
  length: 6,
  onChange: () => {},
  onCompleted: () => {}
}
