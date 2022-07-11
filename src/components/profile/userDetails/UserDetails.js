import React, { useContext } from 'react'
import UserName from './UserName'
import UserInfo from './UserInfo'
import UserStatics from './UserStatics'
import GithubContext from '../../../context/GithubContext'

function UserDetails() {
  const { userData } = useContext(GithubContext)
  return (
    <>
      <UserName />
      <UserInfo />
      <UserStatics title="Followers" count={userData.followers} />
      <UserStatics title="Followings" count={userData.following} />
      <UserStatics title="Gists" count={userData.publicGists} />
      <UserStatics title="Repos" count={userData.publicRepos} />
    </>
  )
}
export default UserDetails;