import React from 'react'

function UserInfo({ htmlUrl, login, company, location, blog }) {
  return (
    <div>
      <a href={`${htmlUrl}`}>
        {login}
      </a>
      <div>
        <h2>Company: {company}</h2>
        <h2>Location: {location}</h2>
        <h2>Blog:</h2>
        <a href={`${blog}`}>{blog}</a>
      </div>
    </div>

  )
}
export default UserInfo;