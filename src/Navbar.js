import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context';
import Form from 'react-bootstrap/Form';
import logo from './logo.jpg';
import { useEffect } from 'react';
import { useRef } from 'react';


const Navbar = () => {
  const {setRandom,dataLength,setSearchTerm} = useGlobalContext()
  const searchValue = useRef('')

  const randomFunc = () => {
    const arr = new Set()
    const random = () => {return Math.floor(Math.random()*dataLength + 1)}
    while (arr.size < 10) {
        arr.add(random())
    }
    console.log([...arr])
    setRandom([...arr])
  }

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCharacter() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
    return (
        <nav className='navbar'>
        <div className='nav-center'>
          <Link to='/'>
            <img src={logo} alt='breaking bad logo' className='logo' />
          </Link>
          <ul className='nav-links'>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
          </ul>
          <button type='button' className='button-17' onClick={randomFunc}>Set 10 random characters to appear</button>
          <form className='search-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Search a character: </label>
            <input
              type='text'
              name='name'
              id='name'
              ref={searchValue}
              onChange={searchCharacter}
            />
          </div>
        </form>
        </div>

      </nav>
    )
}
export default Navbar;