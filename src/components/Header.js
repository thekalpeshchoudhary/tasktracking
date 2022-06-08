import PropTypes from 'prop-types'
import Button from './Button'
import React from 'react'

const Header = ({ title, onAddClk, formState}) => {
  return (
    <header className='header' >
        <h1>{title}</h1>
        <Button onClick={onAddClk} color={formState ? 'red' : '#02b83e'} text={formState ? 'Close' : 'Add'}/>
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