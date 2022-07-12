import GithubProvider from "./context/GithubProvider";
import Main from "./main/Main";


function App() {
  return (
    <GithubProvider>
      <Main />
    </GithubProvider>
  );
}

export default App;
