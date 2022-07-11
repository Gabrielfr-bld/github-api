import React, { useContext } from 'react'
import UserName from './UserName'
import UserInfo from './UserInfo'
import UserStatics from './UserStatics'
import UserImage from './UserImage'
import GithubContext from '../../../context/GithubContext'

function UserDetails() {
  const { userData } = useContext(GithubContext)
  return (
    <>
      <UserImage avatar={userData.avatar} name={userData.name} />
      <UserName name={userData.name} />
      <UserInfo htmlUrl={userData.htmlUrl} login={userData.login} company={userData.company} location={userData.location} blog={userData.blog} />
      <UserStatics title="Followers" count={userData.followers} />
      <UserStatics title="Followings" count={userData.following} />
      <UserStatics title="Gists" count={userData.publicGists} />
      <UserStatics title="Repos" count={userData.publicRepos} />
    </>
  )
}
export default UserDetails;