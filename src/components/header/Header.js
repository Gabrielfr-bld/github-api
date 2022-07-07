import React, { useContext, useState } from 'react'
import { HeaderS, Input, Button } from './style'
import GithubContext from '../../context/GithubContext'


function Header() {
  return (
    <HeaderS>
      <Input type='text' placeholder='search user...'/>
      <Button type='submit'>Search</Button>
    </HeaderS>
  )
}

export default Header;