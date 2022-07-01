import React from 'react'
import { HeaderS } from './style'


function Header() {
  return (
    <HeaderS>
      <input type='text' placeholder='search user...'/>
      <button type='submit'>Search</button>
    </HeaderS>
  )
}

export default Header;