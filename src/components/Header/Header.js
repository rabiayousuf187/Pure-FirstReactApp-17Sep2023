import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'

const Header = (props) => {
  return (
    <>
        <Header>
            <Heading title = {props.title}></Heading>
            <Button title = {props.title}/>
            <Button title = {props.title}/>
        </Header>
    </>
  )
}

export default Header