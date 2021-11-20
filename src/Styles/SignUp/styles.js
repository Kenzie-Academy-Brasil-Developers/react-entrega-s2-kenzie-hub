import styled ,{css,keyframes} from 'styled-components';
import newWelcomeImage  from './../../Assets/newWelcome.png';
import Button from '../Button/styles'
export const Container = styled.main`
  display:flex;
  justify-content:stretch;
  height:100vh;
  flex-wrap:wrap;
  position:relative;
`;
export const slideToRight = keyframes`
   from{
    opacity:0;
    transform:translateX(-150px);
  }
  to{
    opacity:1;
    transform:translateX(0px);
  }
`
export const NewWelcome = styled.section`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:stretch;
  justify-content:space-evenly;
  padding:16px;
  width:100%;
  background:var(--lightBege);
  @media (min-width:768px){
    animation: ${slideToRight} 3s ease-in-out;
  }
  
  h2{
    color:var(--darkBlue);
    flex-basis:100px;
    line-height:100px;
    font-size:60px;
    text-align:center;
    display:block;
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
      background: url(${newWelcomeImage}) no-repeat center;
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
  background:var(--darkBlue);
  padding:16px;
  @media(min-width:768px){
    animation: ${slideToLeft} 3s ease-in-out;
  }
  
  h2{
    flex-basis:60px;
    font-size:48px;
    color:var(--lightBege);
    @media (max-width:1100px){
      line-height:100px;
    }
  }
`;

export const InputsContainer = styled.div`
  flex:2;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:start;
 
`;
export const InputDiv = styled.div`
  display:flex;
  position:relative;
  width:100%;
  align-items: center;
  justify-content: center;
  svg{
    width:20px;
    height:20px;
    position:absolute;
    color:var(--darkBlue);
    left:10px;
    top:61%;
    transform:translateY(-50%);
    @media (max-width:450px){
      display:none;
    }
  }
  
`
export const Input = styled.input`
  width:400px;
  height:46px;
  margin-top:14px;
  background:${props=>props.bgDarkBlue?css`var(--darkBlue)`:css`var(--lightBege)`};
  color:${props=>props.colorBege?css`#EAE2B7`:css` #0E1137`};
  border:none;
  font-weight:500;
  padding-left:40px;
  border-radius:8px;
  outline:none;
  font-size:16px;
  @media (max-width:430px){
    width:250px;
  }
  :focus{
    border:3px solid var(--purple);
  }
`;
export const LogOut = styled(Button)`
  width:260px;
  height:48px;
  font-size:24px;
  background-color: var(--lightBege);
  color:var(--darkBlue);
  margin-top:20px;
  :hover{
    color:var(--lightBege);
  }
  transition:background 0.6s;
`
export const Quarter = styled.div`
 width:100%;
 display:flex;
 flex-direction:column;
 
 
 div{
   display:flex;
   justify-content:space-around;
   flex-wrap:wrap;
   margin:8px 0;
   h2{
     flex:1;
      font-size:20px;
      text-align:center;
   }
 }
 p{
   
   text-align:center;
   a{
     color:var(--pink);
     :hover{
       text-decoration:underline;
     }
   }
 }
 button{
   font-weight:bold;
   color:var(--darkBlue);
   
   width:90px;
   height:30px;
   font-size:16px;
   background:var(--lightBege);
   border-radius:12px;
   border:2px solid var(--pink);
   cursor:pointer;
   
   :hover{
     background:transparent;
     color:var(--lightBege);
   }
   transition:background 0.6s;
   
 }
`