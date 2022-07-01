import React, {useState}from "react";
import GithubContext from "./GithubContext";
import { response } from '../services'

function GithubProvider({ children }) {

  const [userData, setUserData] = useState({
      id: 0,
      avatar: '',
      login: '',
      name: '',
      htmlUrl: '',
      blog: '',
      location: '',
      followers: 0,
      following: 0,
      publicRepos: 0,
      publicGists: 0,
  })

  const getUser = async (username) => {
    const userData = await response.get(`users/${username}`)
      .then(({data}) => {
        setUserData({
          id: data.id,
          avatar: data.avatar_url,
          login: data.login,
          name: data.name,
          htmlUrl: data.html_url,
          blog: data.blog,
          company: data.company,
          followers: data.followers,
          following: data.following,
          publicRepos: data.public_repos,
          publicGists: data.public_gists,
        });
      })
  return userData;
}

const value = {
  userData,
  getUser,
}

  return (
    <GithubContext.Provider value={value}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider;