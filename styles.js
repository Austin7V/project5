import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding-bottom: 80px;
    background-color: #1a1a1a;
    color: #f0f0f0;
  }

h1, h2, h3 {
color: #f0f0f0;
margin: 0 0 12px 0;
}
p {
color: #f0f0f0;
margin: 8px 0;
}
button {
font-family: inherit;
cursor: pointer;
background-color: #2d2d2d;
color: #f0f0f0;
border: 1px solid #4a4a4a;
border-radius: 12px;
padding: 6px 12px;
transition: background-color 0.2s;
}
button:hover {
background-color: #4a4a4a;
}
ul {
list-style: none;
padding: 0;
}

article {
border-radius: 12px;
}
img {
border-radius: 8px;
max-width: 100%;
height: auto;}
`;
