import PropTypes from 'prop-types'
import Button from './Button'
import React from 'react'

const Header = ({title}) => {
  
  const onClick= () => {
      console.log('Clicked');
  }

  return (
    <header className='header' >
        <h1>{title}</h1>
        <Button onClick={onClick} color='green' text='Add'/>
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