import React, { useContext } from 'react'
import GithubContext from '../../../context/GithubContext'


function UserInfo() {
  const { userData } = useContext(GithubContext)
  return (
    <>
      <a href={`${userData.htmlUrl}`}>
        {userData.login}
      </a>
    </>

  )
}
export default UserInfo;