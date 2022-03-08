import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-signin' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
