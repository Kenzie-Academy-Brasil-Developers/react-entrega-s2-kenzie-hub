import styled from 'styled-components';
import Button from './../../Styles/Button/styles';
export const Container = styled.div`
  display:flex;
  flex-direction:column;
  border:6px solid var(--darkBlue);
  border-radius: 40px 20px 20px 20px;
  max-width:300px;
  min-height:300px;
  align-items:center;
  justify-content:space-between;
  padding:28px;
  box-shadow: 6px 6px 2px var(--pink);
  div{
    width:100%;
    align-self: start;
   h3{
     color:var(--purple);
   }
    p{  margin:6px 0;
        font-size:16px;
        color:var(--black);
        padding:4px;
        border:2px solid var(--black);
        border-radius:8px;
        word-break: break-word;
      }
  }
`

export const Name = styled.h2`
  font-size:30px;
  color:var(--purple);
  margin:6px 0;
`;
export const LogOut = styled(Button)`
  width:200px;
  height:52px;
  margin-top:10px;
  color:var(--black);
  font-size:24px;
  :hover{
    background:var(--purple);
  }
`
