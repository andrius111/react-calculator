import React, { useState, useEffect } from 'react'
import './Calculator.css'

import Button from '../components/button/Button'
import Display from '../components/display/Display'

export default () => {
  const [displayValue, setDisplayValue] = useState(0)
  const [clearValue, setClearValue] = useState(false)
  const [operationValue, setOperationValue] = useState(null)
  const [values, setValues] = useState([0, 0])
  const [current, setCurrent] = useState(0)
  
  const clearMemory = () => {
    setDisplayValue(0)
    setClearValue(false)
    setOperationValue(null)
    setValues([0, 0])
    setCurrent(0)
  }

  useEffect(() => {
    // addDigit(current, displayValue)
  }, [current, displayValue])

  const setOperation = operation => {
    console.log(operation)
  }

  const addDigit = (number, displayValue) => {
    if (number === '.' && displayValue.includes('.')) {
      return
    }

    const clearDisplay = displayValue === '0' || clearValue
    const currentValue = clearDisplay ? '' : displayValue

    setDisplayValue(currentValue + number)
  }

  return (
    <div className='calculator'>
        <Display value={ displayValue } />

        <Button label='AC' click={ clearMemory } triple />
        <Button label='/' click={ setOperation } operation />
        <Button label='7' click={ setCurrent } />
        <Button label='8' click={ addDigit } />
        <Button label='9' click={ addDigit } />
        <Button label='*' click={ setOperation } operation />
        <Button label='4' click={ addDigit } />
        <Button label='5' click={ addDigit } />
        <Button label='6' click={ addDigit } />
        <Button label='-' click={ setOperation } operation />
        <Button label='1' click={ addDigit } />
        <Button label='2' click={ addDigit } />
        <Button label='3' click={ addDigit } />
        <Button label='+' click={ setOperation } operation />
        <Button label='0' click={ addDigit } double />
        <Button label='.' click={ addDigit } />
        <Button label='=' click={ setOperation } operation/>
    </div>
  )
}