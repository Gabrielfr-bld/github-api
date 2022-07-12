import React from 'react'
import { UserImageS } from '../style/UserImageS'

function UserImage({ avatar, name }) {
  return (
    <UserImageS src={avatar} alt={name} />
  )
}
export default UserImage;