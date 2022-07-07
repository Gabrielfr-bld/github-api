import React, { useContext, useState } from 'react'
import { HeaderS, Input, Button } from './style'
import GithubContext from '../../context/GithubContext'


function Header() {
  const { getUser } = useContext(GithubContext)
  const [search, setSearch] = useState('')

  const handleSubmit = () => {
    getUser(search)
  }

  const handleChange = ({ target }) => {
    setSearch(target.value)
  }

  return (
    <HeaderS>
      <Input type='text' placeholder='search user...'/>
      <Button type='submit'>Search</Button>
    </HeaderS>
  )
}

export default Header;