import React, { useContext } from 'react'
import UserName from './UserName'
import UserInfo from './UserInfo'
import UserStatics from './UserStatics'
import UserImage from './UserImage'
import GithubContext from '../../../context/GithubContext'
import { WrapperInfo } from '../style/WrapperInfo'
import { Wrapper } from '../style/Wrapper'
import { WrapperStatics } from '../style/WrapperStatics'

function UserDetails() {
  const { userData } = useContext(GithubContext)
  return (
    <Wrapper>
      <UserImage avatar={userData.avatar} name={userData.name} />
      <WrapperInfo>
        <UserName name={userData.name} />
        <UserInfo htmlUrl={userData.htmlUrl} login={userData.login} company={userData.company} location={userData.location} blog={userData.blog} />
        <WrapperStatics>
          <UserStatics title="Followers" count={userData.followers} />
          <UserStatics title="Followings" count={userData.following} />
          <UserStatics title="Gists" count={userData.publicGists} />
          <UserStatics title="Repos" count={userData.publicRepos} />
        </WrapperStatics>
      </WrapperInfo>
    </Wrapper>
  )
}
export default UserDetails;