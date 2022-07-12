import React, { useContext } from "react";
import { Layout, Profile, Repository, NoSearch } from "../components";
import { GlobalStyle } from "../global/GlobalStyle";
import GithubContext from "../context/GithubContext";

function Main() {

  const { hasUser } = useContext(GithubContext);

  return (
    <>
      <GlobalStyle />
      <Layout>
        {hasUser ? (
          <>
            <Profile />
            <Repository />
          </>
        ) : (<NoSearch />)}
      </Layout>
    </>
  );
}

export default Main;