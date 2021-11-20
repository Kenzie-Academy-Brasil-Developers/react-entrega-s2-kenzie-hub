import styled from "styled-components";

export const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--black);
  width: 320px;
  height: 320px;
  border-radius: 10px;
  color:var(--lightBege);
  display:flex;
  flex-direction:column;
  background-color: var(--black);
  border:3px solid var(--purple);
  padding:18px;
  align-items:center;
  justify-content:space-between;
  border-radius: 40px 8px 40px 40px;
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
      color:var(--purple);
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

  input{
    width:100%;
    height:44px;
    border-radius:10px;
    border:none;
    margin:10px 0;
    padding-left:10px;
    :focus{
      outline:3px solid var(--purple);
    }
  }
  ul{
    margin:10px 0;
    list-style:none; 
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    li{
      border-radius:10px;
      margin:4px;
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
  width:220px;
  height:48px;
  border:none;
  border-radius:6px;
  color:var(--black);
  font-size:18px;
  :hover{
    color:var(--lightBege);
  }
`;