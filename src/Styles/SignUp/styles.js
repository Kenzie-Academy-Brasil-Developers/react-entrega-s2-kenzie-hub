import styled ,{css,keyframes} from 'styled-components';
import newWelcomeImage  from './../../Assets/newWelcome.png';
import Button from '../Button/styles';

export const Container = styled.main`
  display:flex;
  justify-content:stretch;
  height:100vh;
  flex-wrap:wrap;
  position:relative;
  ${props=>props.success&&css`
    filter:blur(8px);
  `}
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
  padding: 4px 0;
  svg{
    width:20px;
    height:20px;
    position:absolute;
    color:var(--black);
    left:10px;
    top:61%;
    transform:translateY(-50%);
    cursor: ${props=>props.cursor?css`pointer`:css`normal`};
    
  }
  img{
    height:20px;
    position:absolute;
  
    width:20px;
    left:10px;
    top:30px;
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
  ${props=>props.error&&css`
    svg{
      color:#ff5778;
    }
    input{
      border:2px solid #ff5778;

    }
  `}
`
export const Input = styled.input`
  width:400px;
  height:40px;
  margin-top:16px;
  background:${props=>props.bgDarkBlue?css`var(--darkBlue)`:css`var(--lightBege)`};
  color:${props=>props.colorBege?css`#EAE2B7`:css` #0E1137`};
  border:none;
  font-weight:500;
  padding-left:40px;
  border-radius:8px;
  outline:none;
  font-size:16px;
  @media (max-width:430px){
    width:100%;
  }
  :focus{
    border:2px solid var(--purple);
    ${props=>props.error&&css`
    border: 2px solid #ff5778;
  `}
  }
  ${props=>props.error&&css`
    border: 2px solid #ff5778;
  `}
`;
export const SignUpBtn = styled(Button)`
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
   margin:4px 0;
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
 
`
export const ButtonModule = styled.button`

   font-weight:bold;
   color:var(--darkBlue);
   
   width:70px;
   height:25px;
   font-size:16px;
   background:var(--lightBege);
   border-radius:12px;
   border:2px solid var(--pink);
   cursor:pointer;
   
   :hover{
     background:transparent;
     color:var(--lightBege);
   }
   :focus{
     background:var(--pink)
   }
   transition:background 0.6s;
   

`

export const ErrorsApi = styled.span`
  text-align:center;
  color:black;
  left:0;
  top:100px;
  color:#ff5778;
  font-size:30px;
  padding:14px;
`
export const slideToDown = keyframes`
  from{
    top:-100px;
  }
  to{
   top:100px;
  }
`
export const DivError = styled.div`
  min-width:280px;
  padding:16px;
  border-radius:10px;
  z-index:2;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  position:absolute;
  background:var(--black);
  left:50%;
  transform:translateX(-50%);
  top:100px;
  animation : ${slideToDown} 1.1s ease-in-out;
`
export const CloseErr = styled(Button)`
  /* z-index:2; */
  width:40px;
  height:40px;
  font-size:20px;
  color:var(--black);
  :hover{
    background:var(--pink);
  }
`