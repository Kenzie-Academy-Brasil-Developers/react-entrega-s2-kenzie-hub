import styled,{keyframes} from "styled-components";

export const slideToDown =keyframes`
  from{
    top:-100px;
    opacity:0;
  }
  to{
    opacity:1;
    top:50%;
    
  }
`
export const Section = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  color: var(--black);
  width: 320px;
  height: 430px;
  border-radius: 40px 8px 40px 40px;
  color: var(--lightBege);
  background-color: var(--black);
  border: 3px solid var(--purple);
  padding: 24px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 4px 4px 2px var(--purple);
  animation: ${slideToDown} 0.7s ease-in-out;
  @media (max-width: 388px) {
    width: 260px;
  }
  button {
    background: var(--lightBege);
    cursor: pointer;
    :hover {
      background: var(--purple);
    }
    transition: background 0.6s;
  }
`;
export const TechHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    color: var(--lightBege);
    span {
      color: var(--pink);
    }
  }
  button {
    width: 36px;
    height: 36px;
    font-size: 22px;
    font-weight: 700;
    border-radius: 10px;
    border: none;
  }
`;
export const InputsArea = styled.div`
  width: 100%;
  div {
    margin: 2px 0;
    width: 100%;
    position: relative;
    
    span {
      font-size:12px;
      position: absolute;
      color: #ff5778;
      left: 0;
      top: -10px;
    }
  }
`;
export const Create = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border: none;
  border-radius: 6px;
  color: var(--black);
  font-size: 20px;
  :hover {
    color: var(--lightBege);
  }
`;
export const Input = styled.input`
  width: 100%;
 
  height: ${(props) => (props.description ? "70px" : "44px")};
  border-radius: 10px;
  border: none;
  margin: 10px 0;
  padding-left: 10px;
  :focus {
    outline: 3px solid var(--purple);
  }
`;
export const Button = styled.button`
  border-radius: 10px;
  margin: 4px;
  font-size: 14px;
  border: 2px solid var(--purple);
  padding: 4px;
  :hover {
    cursor: pointer;
    background: var(--purple);
  }
  transition: background 0.6s;
  :focus{
        background:var(--purple);
      }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
export const Delete = styled.button`
font-size: 20px;
  width:50%;
  height:40px;
  border-radius:6px;
  margin: 4px;
  font-size: 14px;
  border: 2px solid var(--purple);
  padding: 4px;
  border: 2px solid #ff1d49;
`;
