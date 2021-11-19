import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body,div,p,span,h1,h2,button,input,a,header{
    margin:0;
    padding:0;
    box-sizing:border-box; 
  }
  :root{
    --darkBlue:#0E1137;
    --lightBege:#EAE2B7;
    --black:#020113;
    --pink:#FF6584;
    --purple:#6C63FF;
  }
  body{
    background:var(--darkBlue);
    font-family: 'Roboto Mono', monospace;
    font-size:1rem;
    color:var(--lightBege)
  }
  h2{
    font-family: 'Rokkitt', serif;
    font-weight:700;
  }
  a{
    text-decoration:none;
  }
`;

export default GlobalStyle;