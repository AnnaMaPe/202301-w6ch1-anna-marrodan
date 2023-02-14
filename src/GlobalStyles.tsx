import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  padding: 20px;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

button{
  background: none;
  border: none;
}


`;

export default GlobalStyles;
