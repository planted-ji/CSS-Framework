import TopMenu from "./components/TopMenu";
import Post from "./components/Post";
import Comment from "./components/CommentLayout";
import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

:root {
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 14px;
color: #000000;
}

.a11y-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

.line {
  height: 0.5px;
  background-color: #dbdbdb;
}

.user{
  display: block;
  margin-left: 12px;
}

button {
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

p {
  margin: 0;
}

div {
  width: 390px;
}

strong {
  display: block;
  font-size: 14px;
};

span{
  font-size: 12px;
  color: #767676;
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
