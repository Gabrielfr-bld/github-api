import { Layout, Profile } from "../components";
import { GlobalStyle } from "../global/GlobalStyle";


function Main() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Profile />
      </Layout>
    </>
  );
}

export default Main;