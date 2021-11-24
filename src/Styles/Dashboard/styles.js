import styled, { keyframes,css } from "styled-components";

export const Container = styled.main`
  position: relative;
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: var(--lightBege);
  ${props=>props.blured&&css`
    filter:blur(10px);
  `}
  transition: filter 0.7s ;
`;
export const Header = styled.div`
  
  h1{
    text-align: center;
    font-size:80px;
    color:var(--darkBlue);
    span{
      font-size:52px;
      color:var(--pink)
    }
  }
`
export const ContainerSection = styled.section`
  background: var(--lightBege);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: Start;
  margin-top: 40px;
  @media (max-width: 1174px) {
    flex-direction: column;
    align-items: center;
  }
`;
const slideToLeft = keyframes`
  from{
    opacity:0;
    transform:translateX(100px);
  }
  to{
    opacity:1;
    transform:translateX(0);
  }
`;

export const TechsSection = styled.section`
  background: var(--darkBlue);
  display: flex;
  flex-direction: column;
  margin: 20px;
  min-height: 390px;
  animation:${slideToLeft} 1s ease-in-out;
  border-radius: 50px 8px 30px 8px;
  box-shadow: 6px 6px 2px var(--pink);
  padding:10px;
  @media (max-width: 440px) {
    min-width: 300px;
  }
  @media (min-width: 440px) {
    width: 360px;
  }
  
`;
export const WorksSection = styled(TechsSection)`
@media (max-width: 440px) {
    width: 300px;
  }
  @media (min-width: 440px) {
    width: 360px;
  }`;

export const BioSection = styled.section`
  min-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:20px;
`;
export const HeaderTech = styled.div`
 
    display: flex;
    justify-content: space-around;
    h2 {
      padding:4px;
      text-align: center;
      flex: 1;
      color: var(--lightBege);
      @media(max-width: 400px){
        font-size:20px;
      }
    }
    button {
      width: 36px;
      height: 36px;
      line-height: 28px;
      margin: 16px;
      border-radius: 8px;
      border: none;
      font-size: 20px;
      text-align: center;
      justify-content: center;
      font-weight: 700;
      cursor: pointer;
      background: var(--lightBege);
      :hover {
        border: 3px solid var(--pink);
        background: transparent;
        color: var(--lightBege);
      }
      transition-property: background,border;
      transition-duration:0.6s;
    }
  
`;
export const HeaderWork = styled(HeaderTech)`
`;
export const ListDiv = styled.div`
   h1 {
      padding: 20px;
      line-height: 120px;
      text-align: center;
      font-size: 100px;
      color: var(--darkBlue);
      @media (max-width: 500px) {
        font-size: 56px;
      }
      span {
        font-size: 80px;
        color: var(--pink);
        @media (max-width: 500px) {
          font-size: 46px;
        }
      }
    }
`