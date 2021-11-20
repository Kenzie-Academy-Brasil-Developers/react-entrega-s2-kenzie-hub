import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  flex-direction:row;
  position:relative;
  justify-content:start ;
  border-right: 3px solid #9c96f3;
  border-radius:10px;
  :hover{
    
    background:var(--purple);
  }

`
export const DivIcon = styled.div`
  background:var(--purple);
  padding:20px;
  border-radius:10px;
  margin:4px;
  svg{
    width:40px;
    height:40px;
  }
  
 
`
export const Description = styled.div`
  
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    margin-left:4px;
    p{
      :hover{
        background:var(--pink)
      }
      padding:2px;
      border:3px solid var(--purple);
      border-radius:8px;
    }
`
export const Tech = styled.h2`
  padding:0;
`;
export const EditDiv = styled.div`
  position:absolute;
  right:10px;
  top:10px;
  svg{
    cursor:pointer;
   
  }
`
