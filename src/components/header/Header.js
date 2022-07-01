import React from 'react'
import { HeaderS, Input, Button } from './style'


function Header() {
  return (
    <HeaderS>
      <Input type='text' placeholder='search user...'/>
      <Button type='submit'>Search</Button>
    </HeaderS>
  )
}

export default Header;