import React, { useContext } from 'react'
import GithubContext from '../../../context/GithubContext'


function UserName() {
  const { userData } = useContext(GithubContext)
  return (
    <h1>{userData.name}</h1>
  )
}
export default UserName;