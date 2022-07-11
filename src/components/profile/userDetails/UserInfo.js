import React from 'react'

function UserInfo({ htmlUrl, login, company, location, blog }) {
  return (
    <div>
      <a href={`${htmlUrl}`}>
        {login}
      </a>
      <div>
        <h2>Company: </h2>
        <p>{company}</p>
        <h2>Location: </h2>
        <p>{location}</p>
        <h2>Blog:</h2>
        <a href={`${blog}`}>{blog}</a>
      </div>
    </div>

  )
}
export default UserInfo;