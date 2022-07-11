import React, { useContext } from 'react'
import GithubContext from '../../../context/GithubContext'


function UserInfo() {
  const { userData } = useContext(GithubContext)
  return (
    <div>
      <a href={`${userData.htmlUrl}`}>
        {userData.login}
      </a>
      <div>
        <h2>Company: {userData.company}</h2>
        <h2>Location: {userData.location}</h2>
        <h2>Blog:</h2>
        <a href={`${userData.blog}`}>{userData.blog}</a>
      </div>
    </div>

  )
}
export default UserInfo;