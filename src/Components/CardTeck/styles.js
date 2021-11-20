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
  transition-property:background;
  transition-duration:0.6s;

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
      transition:background 0.6s;
      padding:4px;
      border-bottom:4px solid var(--purple);
      border-radius:8px;
      @media (max-width:400px){
        font-size:12px;
      }
    }
`
export const Tech = styled.h2`
  padding:0;
  @media(max-width:400px){
    font-size:16px;
  }
`;
export const EditDiv = styled.div`
  position:absolute;
  right:10px;
  top:10px;
  svg{
    padding:4px;
    width:20px;
    height:20px;
    border-radius:8px;
    cursor:pointer;
    :hover{
      background:var(--pink);

    }
    transition:background 0.6s;

  }
`
