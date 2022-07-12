import { Layout, Profile, Repository } from "../components";
import { GlobalStyle } from "../global/GlobalStyle";


function Main() {
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