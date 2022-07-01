import React from 'react'
import { HeaderS, Input } from './style'


function Header() {
  return (
    <HeaderS>
      <Input type='text' placeholder='search user...'/>
      <button type='submit'>Search</button>
    </HeaderS>
  )
}

export default Header;