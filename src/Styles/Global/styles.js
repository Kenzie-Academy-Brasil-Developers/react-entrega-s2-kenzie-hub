import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body,div,p,span,h1,h2,button,input,a,header,section,fieldset,form,ul,li,legend{
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
  html{
    width:100vw;
    height:100vh;
  }
 
  body{
    background:var(--darkBlue);
    font-family: 'Roboto Mono', monospace;
    font-size:1rem;
    color:var(--lightBege);
    overflow-y:${props=>props.scroll?'scroll':'hidden'};
    overflow-x:hidden;
  }
  body::-webkit-scrollbar {
  width: 10px;
  
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 20px var(--darkBlue);
}
 
body::-webkit-scrollbar-thumb {
  background-color: var(--purple);
  width:20px;
}
  button,input{
    font-family: 'Roboto Mono', monospace;
  }
  a{
    text-decoration:none;
  }
`;

export default GlobalStyle;