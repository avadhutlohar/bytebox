import React from 'react'
import Button from './Button'



const ButtonList = () => {
  return (
    <div className='flex'>
    <Button name="All"/>
    <Button name="Live"/>
    <Button name="Cricket"/>
    <Button name="Music"/>
    <Button name="Mix"/>
    <Button name="Movies"/>
    <Button name="Reviews"/>
    </div>
  )
}

export default ButtonList