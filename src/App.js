/* eslint-disable react/prop-types */
import React from 'react'

export const Button = (props) => {
  const { label, ...otherProps } = props

  return (
    <button
      {...otherProps}
    >
      {label}
    </button>
  )
}

export const App = () => {
  return (
    <div>
      CodeRoad APP
      <Button
        label={'Click me!'}
        className={'button'}
        onClick={() => console.log('CLICK')}
      />
    </div>
  )
}

export default App
