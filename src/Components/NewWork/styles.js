import styled from "styled-components";

export const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--black);
  width: 320px;
  height: 340px;
  border-radius: 40px 8px 40px 40px;
  color:var(--lightBege);
  background-color: var(--black);
  border:3px solid var(--purple);
  padding:24px;
  align-items:center;
  justify-content:space-between;
  box-shadow:4px 4px 2px var(--purple);
  @media (max-width:388px){
    width:260px;
  }
  button{
    background:var(--lightBege);
    cursor:pointer;
    :hover{
      
      background:var(--purple);
    }
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

  
  ul{
    margin:10px 0;
    list-style:none; 
    display:flex;
    justify-content:space-between;
    li{
      border-radius:10px;
      font-size:14px;
      border:2px solid var(--purple);
      padding:4px;
      :hover{
        cursor:pointer;
        background:var(--purple);
        
      }
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