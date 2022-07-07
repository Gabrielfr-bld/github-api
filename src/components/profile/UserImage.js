import React, { useContext } from 'react'
import GithubContext from '../../context/GithubContext'
import { UserImageS } from './style/UserImageS'

const UserImage = () => {
  const { userData } = useContext(GithubContext)
  return (
    <UserImageS src={userData.avatar} alt={userData.login} />
  )
}
export default UserImage;