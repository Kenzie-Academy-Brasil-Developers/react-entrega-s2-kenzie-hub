import styled from 'styled-components';

export const Container = styled.main`
  position:relative;
  display:flex;
  height:100vh;
  flex-direction:column;
  background:var(--lightBege);
  filter:blur(6px);
  opacity:0.2;
  div{
    
    h1{
      line-height:120px;
      text-align:center;
      font-size:100px;
      color:var(--darkBlue);
      span{
        font-size:80px;
        color:var(--pink);
        
      }
      
  }
}
  section {
    
    
  }
`;
export const ContainerSection = styled.section`
    background:var(--lightBege);
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items: center;
    @media (max-width:1174px){
      flex-direction:column;
      align-items:center;
  }
`

export const TechsSection = styled.section`
  background:var(--darkBlue);
  display:flex;
  flex-direction : column;
  margin:20px;
  min-height:300px;
  min-width:300px;
  border-radius: 50px 8px 50px 50px;
  box-shadow: 6px 6px 2px var(--pink);
  div{
  
    display:flex;
    justify-content:space-between;
    h2{
      padding:20px;
      text-align:center;
      flex:1;
      color:var(--lightBege)
    }
    button{
      width:36px;
      height:36px;
      margin:16px;
      border-radius:8px;
      border:none;
      font-size:24px;
      font-weight:700;
      cursor:pointer;
      background:var(--lightBege);
      :hover{
        border:3px solid var(--pink);   
        background:transparent;
        color:var(--lightBege);
      } 
    }
  }
`;
export const WorksSection = styled(TechsSection)`
  min-height:300px;
`;

export const BioSection = styled.section`
  
  display:flex;
  justify-content:center;
  align-items:center;
`;

