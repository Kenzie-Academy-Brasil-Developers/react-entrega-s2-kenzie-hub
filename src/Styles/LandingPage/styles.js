import styled from 'styled-components';
import dashboardImage from './../../Assets/dashboard.png';
export const Container = styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:stretch;
  height:100vh;
  header{
    flex-basis:140px;
    text-align:start;
    width:100%;
    align-items:center;
    h1{
      font-size:100px;
      padding:10px 0 10px 32px;
      @media (max-width:1100px){
        font-size:56px;
        text-align:center;
        padding:0;
      }
      span{
        font-size:80px;
        color:var(--pink);
        @media (max-width:1100px){
          font-size:38px;
        }
      }
    }
  }
`;
export const Content = styled.section`
  display:flex;
  align-items:stretch;
  flex:1;
  padding-left:32px;
  @media (max-width:1100px){
    padding:0;
  }
`;
export const Background = styled.div`
  
  @media screen and (min-width:1100px){
    flex:1;
    background: url(${dashboardImage}) no-repeat center;
    background-size:contain;
    margin-bottom:32px;
  }
`;

export const Description = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  p{
    padding-right:32px;
    font-size:34px;
    text-align:center;
    font-weight:700;
    margin-bottom:20px;
    @media (max-width:1100px){
      padding:0 10px;
      font-size:26px;
    }
    span{
      color:var(--pink);
    }
  }
  div{
    flex:2;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
  }
`;