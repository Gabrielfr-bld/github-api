import React, { useContext } from "react";
import { Layout, Profile, Repository } from "../components";
import { GlobalStyle } from "../global/GlobalStyle";
import GithubContext from "../context/GithubContext";

function Main() {

  const { hasUser } = useContext(GithubContext);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Profile />
        <Repository />
      </Layout>
    </>
  );
}

export default Main;