import TopMenu from "./components/TopMenu";
import Post from "./components/Post";
import Comment from "./components/Comment";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}

p {
  margin: 0;
}

div {
  width: 390px;
}
hr {
  width: 390px;
  height: 0.5px;
  background-color: #DBDBDB;
  margin: 0;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TopMenu />
      <Post />
      <Comment />
    </>
  );
}
export default App;
