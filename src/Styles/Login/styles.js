import styled ,{css,keyframes} from 'styled-components';
import welcomeImage  from './../../Assets/welcome.png';
import Button from './../../Styles/Button/styles'
export const Container = styled.main`
  display:flex;
  justify-content:stretch;
  height:100vh;
  flex-wrap:wrap;
 
`;
export const slideToDown = keyframes`
  from{
    opacity:0;
    transform:translateY(-150px);
  }
  to{
    opacity:1;
    transform:translateY(0px);
  }
`
export const Welcome = styled.section`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:stretch;
  justify-content:space-evenly;
  padding:16px;
  @media (min-width:768px){
    animation: ${slideToDown} 3s ease-in-out;
  }
  
  width:100%;
  h2{
    
    flex-basis:100px;
    
    font-size:60px;
    text-align:center;
    @media (max-width:1100px){
      line-height:100px;
      text-align:start;
    }
    span{
      color:var(--pink);
    }
  }
  div{
    flex:2;
    @media (min-width:1100px){
      background: url(${welcomeImage}) no-repeat center;
      background-size:contain;
    }
    @media (max-width:1100px){
      display:none;
    }
    
  }
`;
const slideToLeft = keyframes`
  from{
    opacity:0;
    transform:translateX(150px);
  }
  to{
    opacity:1;
    transform:translateX(0px);
  }
`
export const Form = styled.form`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:stretch;
  background:var(--lightBege);
  padding:16px;
  @media (min-width:768px){
    animation: ${slideToLeft} 3s ease-in-out;
  }
  
  h2{
    line-height:100px;
    font-size:60px;
    flex-basis:240px;
    color:var(--darkBlue);
    @media (max-width:740px){
      flex-basis:40px;
    }
  }
`;
export const InputsContainer = styled.div`
  flex:2;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:start;
  p{
    margin-top:6px;
   color:var(--darkBlue);
   a{
     color:var(--pink);
     :hover{
       text-decoration:underline;
     }
   }
 }
`;
export const InputDiv = styled.div`
  display:flex;
  position:relative;
  padding:5px 0;
  svg{
    width:20px;
    height:20px;
    position:absolute;
    color:var(--black);
    left:10px;
    top:61%;
    transform:translateY(-50%);
  }
  img{
    height:20px;
    position:absolute;
  
    width:20px;
    left:10px;
    top:45px;
    content:'';
    cursor:pointer;
    

  }
  span{
    padding:2px 0 ;
    color:#ff5778;
    position:absolute;
    top:-5px;
    font-size:14px;
    left:0;
  }
`
export const Input = styled.input`
  width:400px;
  height:60px;
  margin-top:20px;
  background:${props=>props.bgDarkBlue?css`#dddddf`:css`var(--lightBege)`};
  color:${props=>props.colorBege?css`var(--black)`:css`var(--darkBlue)`};
  border:none;
  font-weight:500;
  padding-left:40px;
  border-radius:8px;
  font-size:20px;
  outline:none;
  @media (max-width:432px){
    width:360px;
  }
  :focus{
    outline:3px solid var(--purple);
  }
  ${props=>props.errors&&css`
    outline-color:var(--pink);
  `}
`;
export const LogInButton = styled(Button)`
  width:260px;
  height:52px;
  font-size:24px;
  background-color: var(--darkBlue);
  color:var(--lightBege);
  margin-top:42px;
  
  :hover{
    color:var(--darkBlue);
  }
  transition:background 0.6s;
`
