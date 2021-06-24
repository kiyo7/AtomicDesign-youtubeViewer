import { createGlobalStyle } from "styled-components";

//↓タグ付テンプレートリテラル構文
export default createGlobalStyle`
  html,body,#root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    position: relative;
  }
`;
