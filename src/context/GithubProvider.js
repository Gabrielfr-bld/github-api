import React, { useCallback, useState } from "react";
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

  const [hasUser, setHasUser] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getUser = async (username) => {
    setIsLoading(true)
    const userData = await response.get(`users/${username}`)
      .then(({ data }) => {
        setHasUser(true)
        setUserData({
          id: data.id,
          avatar: data.avatar_url,
          login: data.login,
          name: data.name,
          htmlUrl: data.html_url,
          location: data.location,
          blog: data.blog,
          company: data.company,
          followers: data.followers,
          following: data.following,
          publicRepos: data.public_repos,
          publicGists: data.public_gists,
        });
      }).finally(() => {
        setIsLoading(false)
      })
    return userData;
  }

  const value = {
    userData,
    hasUser,
    isLoading,
    getUser: useCallback((username) => getUser(username), []),
  }

  return (
    <GithubContext.Provider value={value}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider;