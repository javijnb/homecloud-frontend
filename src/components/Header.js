import React from 'react'
import Button from './Button'

const Header = (props) => {

  const onClick = () => {
    console.log("Click")
  }

  return (
    <header className='header'>
        <h1>Cabecera {props.title}</h1>
        <Button color='orange' text='Añadir' onClick={onClick}></Button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Parámetro por defecto'
}

export default Header