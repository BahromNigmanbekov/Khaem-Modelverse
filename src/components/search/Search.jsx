import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './Search.css'

function Search() {
  return (
    <div>
      <form className='s-form' action="">
        <input className='search-i' type="text" placeholder="Search..." />
        <button className='search-btn'><FaSearch /></button>
      </form>
    </div>
  )
}

export default Search
