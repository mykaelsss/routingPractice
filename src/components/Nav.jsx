import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='d-flex gap-3 bg-dark px-5 py-3 my-3'>
        <Link to={"/home"}>Home</Link>
        <Link to={"/hello"}>Hello</Link>
        <Link to={"/4"}>Number</Link>
    </div>
  )
}

export default Nav
