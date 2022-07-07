import React, { useContext } from 'react'
import GithubContext from '../../context/GithubContext'

const UserImage = () => {
  const { userData } = useContext(GithubContext)
  return (
    <img src={userData.avatar} alt={userData.login} />
  )
}
export default UserImage;