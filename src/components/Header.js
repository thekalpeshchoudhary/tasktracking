import PropTypes from 'prop-types'
import Button from './Button'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAddClk, formState}) => {
  const location = useLocation()
  
  return (
    <header className='header' >
        <h1>{title}</h1>
        {location.pathname === '/' && <Button onClick={onAddClk} color={formState ? 'red' : '#02b83e'} text={formState ? 'Close' : 'Add'}/>}
    </header>
  )
}

Header.defaultProps = {
    title: 'Default',
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}

export default Header