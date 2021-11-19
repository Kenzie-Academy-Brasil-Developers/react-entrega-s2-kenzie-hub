import styled ,{css} from 'styled-components';
import welcomeImage  from './../../Assets/welcome.png';
import Button from './../../Styles/Button/styles'
export const Container = styled.main`
  display:flex;
  justify-content:stretch;
  height:100vh;
  flex-wrap:wrap;
 
`;
export const Welcome = styled.section`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:stretch;
  justify-content:space-evenly;
  padding:16px;
  width:100%;
  h2{
    
    flex-basis:240px;
    line-height:200px;
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

export const Form = styled.form`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:stretch;
  background:var(--lightBege);
  padding:16px;
  h2{
    line-height:200px;
    font-size:60px;
    flex-basis:240px;
    color:var(--darkBlue);
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

  svg{
    width:20px;
    height:20px;
    position:absolute;
    color:var(--lightBege);
    left:10px;
    top:61%;
    transform:translateY(-50%);
  }
`
export const Input = styled.input`
  width:400px;
  height:68px;
  margin-top:20px;
  background:${props=>props.bgDarkBlue?css`var(--darkBlue)`:css`var(--lightBege)`};
  color:${props=>props.colorBege?css`#EAE2B7`:css` #0E1137`};
  border:none;
  font-weight:500;
  padding-left:40px;
  border-radius:8px;
  font-size:20px;
  outline:none;
  :focus{
    border:2px solid var(--purple);
  }
`;
export const LogInButton = styled(Button)`
  width:260px;
  height:60px;
  font-size:24px;
  background-color: var(--darkBlue);
  color:var(--lightBege);
  margin-top:42px;
  :hover{
    color:var(--darkBlue);
  }
`
