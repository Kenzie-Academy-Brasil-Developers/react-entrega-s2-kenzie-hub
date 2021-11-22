import styled from "styled-components";
import {slideToDown} from '../NewTech/styles';

export const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index:1;
  transform: translate(-50%, -50%);
  color: var(--black);
  width: 320px;
  height: 400px;
  border-radius: 40px 8px 40px 40px;
  color:var(--lightBege);
  background-color: var(--black);
  border:3px solid var(--purple);
  padding:24px;
  align-items:center;
  justify-content:space-between;
  box-shadow:4px 4px 2px var(--purple);
  animation : ${slideToDown} 1.2s cubic-bezier( 0.68, -0.55, 0.265, 1.55 );
  @media (max-width:388px){
    width:260px;
  }
  button{
    background:var(--lightBege);
    cursor:pointer;
    :hover{
      
      background:var(--purple);
    }
    transition:background 0.6s;
  }
`;
export const TechHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    color: var(--lightBege);
    span{
      color:var(--pink);
    }
  }
  button{
    width:36px;
    height:36px;
    font-size:22px;
    font-weight:700;
    border-radius:10px;
    border:none;
  }
  
`;
export const InputsArea = styled.div`
  div{
    margin:2px 0;
    width:100%;
    position:relative;
    span{
      position:absolute;
      color:#ff5778;
      left:0; 
      top:-8px;
    }
  }
  
  
`;
export const Create = styled.button`
  width:100%;
  height:40px;
  margin-top:20px;
  border:none;
  border-radius:6px;
  color:var(--black);
  font-size:20px;
  :hover{
    color:var(--lightBege);
  }
  
`;
export const Input = styled.input`
  
    width:100%;
    height:${props=>props.description?'70px':'44px'};
    border-radius:10px;
    border:none;
    margin:10px 0;
    padding-left:10px;
    :focus{
      outline:3px solid var(--purple);
   }
   
`
export const Button = styled.button`

      border-radius:10px;
      margin:4px;
      font-size:14px;
      border:2px solid var(--purple);
      padding:4px;
      :hover{
        cursor:pointer;
        background:var(--purple);
        
      }
      transition:background 0.6s;
    
`
export const Form = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  
`
export const Delete = styled.button`
  border-radius:10px;
      margin:4px;
      font-size:14px;
      border:2px solid var(--purple);
      padding:4px;
      border:2px solid #ff5778;
`