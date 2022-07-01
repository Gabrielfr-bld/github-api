import React, {useState} from "react";
import GithubContext from "./GithubContext";

function GithubProvider({ children }) {
  const [user, setUser] = useState({
    id: 0,
    avatar: '',
    login: '',
    name: '',
    htmlUrl: '',
    blog: '',
    company: '',
    location: '',
    followers: 0,
    following: 0,
    publicRepos: 0,
    publicGists: 0,
  });

  return (
    <GithubContext.Provider>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider;