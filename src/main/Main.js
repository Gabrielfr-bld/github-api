import React, { useContext } from "react";
import { Layout, Profile, Repository, NoSearch, Loading } from "../components";
import { GlobalStyle } from "../global/GlobalStyle";
import GithubContext from "../context/GithubContext";

function Main() {

  const { hasUser, isLoading } = useContext(GithubContext);

  return (
    <>
      <GlobalStyle />
      <Layout>
        {hasUser ? (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <Profile />
                <Repository />
              </>
            )}
          </>
        ) : (<NoSearch />)}
      </Layout>
    </>
  );
}

export default Main;