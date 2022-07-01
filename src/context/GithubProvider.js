import React from "react";
import GithubContext from "./GithubContext";

function GithubProvider({ children }) {
  return (
    <GithubContext.Provider>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider;