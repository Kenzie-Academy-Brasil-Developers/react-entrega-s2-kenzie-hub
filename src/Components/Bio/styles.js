import styled from "styled-components";
import Button from "./../../Styles/Button/styles";
import {slideToRight} from './../../Styles/SignUp/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 6px solid var(--darkBlue);
  border-radius: 40px 20px 20px 20px;
  max-width: 300px;
  min-height: 300px;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 28px;
  box-shadow: 6px 6px 2px var(--pink);
  animation :${slideToRight} 2s ease-in-out;
  svg {
    width: 60px;
    height: 60px;
    color: var(--darkBlue);
    background-color: var(--purple);
    position: absolute;
    top:-30px;
    z-index: 1;
    border-radius: 100%;
    border: 6px solid var(--darkBlue);
  }
  div {
    width: 100%;
    align-self: start;

    h3 {
      color: var(--purple);
    }

    p {
      margin: 6px 0;
      font-size: 16px;
      color: var(--black);
      padding: 4px;
      border: 2px solid var(--black);
      border-radius: 8px;
      word-break: break-word;
    }
  }
`;

export const Name = styled.h2`
  font-size: 30px;
  color: var(--purple);
  margin: 6px 0;
  word-wrap: break-word;
  width: 100%;
  text-align:center;
  margin-top:20px;
`;
export const LogOut = styled(Button)`
  width: 200px;
  height: 52px;
  margin-top: 10px;
  color: var(--black);
  font-size: 24px;
  :hover {
    background: var(--purple);
  }
`;
export const ContainerProfile = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
