import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, 
*:after,
*:before {
  margin: 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  text-decoration: none;
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
