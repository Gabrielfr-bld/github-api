import React, { useContext } from 'react'
import GithubContext from '../../context/GithubContext'
import { UserImageS } from './style/UserImageS'

function UserImage() {
  const { userData } = useContext(GithubContext)
  return (
    <UserImageS src={userData.avatar} alt={userData.login} />
  )
}
export default UserImage;