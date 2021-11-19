import styled, {css} from 'styled-components';

const Button = styled.button`
  width:324px;
  height:76px;
  border-radius:10px;
  font-family: 'Roboto Mono', monospace;
  font-weight:700;
  font-size:32px;
  cursor:pointer;
  color:${props=>props.fontColorBlack? css`var(--black)`:css`var(--lightBege)`};
  border:2px solid ${props=>props.borderPink?css`var(--pink)`:css`var(--black)`};
  background:${props=>props.black?css`var(--black)`:css`var(--lightBege)`};
  @media (max-width:1100px){
    width:240px;
  }
  :hover{
    background:transparent;
    color:var(--lightBege);
  }
`;
export default Button;