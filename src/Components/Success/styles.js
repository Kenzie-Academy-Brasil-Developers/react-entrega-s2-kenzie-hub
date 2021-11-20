import styled,{keyframes} from "styled-components";

export const slideToDown =keyframes`
  from{
    top:-50px;
    opacity:0;
  }
  to{
    opacity:1;
    top:50%;
    
  }
`
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
  animation:${slideToDown} 1.2s cubic-bezier( 0.68, -0.55, 0.265, 1.55 ) ;
  flex-direction:column;
  background-color: var(--black);
  border:3px solid var(--purple);
  padding:18px;
  align-items:center;
  justify-content:space-between;
  border-radius: 40px 8px 40px 40px;
  box-shadow:4px 4px 2px var(--purple);
  z-index:2;
  @media (max-width:388px){
    width:260px;
  }
  p{
    font-size:22px;
    text-align:center;
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
    @media(max-width:400px){
      font-size:20px;
    }
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
    margin-left:8px;
    
  }
  
`;

export const LogIn = styled.button`
  width:220px;
  height:48px;
  border:none;
  border-radius:6px;
  color:var(--black);
  font-size:18px;
  :hover{
    color:var(--lightBege);
  }
  transition:background 0.6s;
`;