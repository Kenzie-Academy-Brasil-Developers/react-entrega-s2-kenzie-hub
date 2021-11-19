import {
  Container,
  Welcome,
  Form,
  InputsContainer,
  Input,
  InputDiv,LogInButton
} from "./../../Styles/Login/styles";

import Icon from '../../Components/Icon/index';
import { FiMail,FiEyeOff} from 'react-icons/fi'
const Login = () => {
  return (
    <Container>
      <Welcome>
        <h2>
          Welcome back<span>!</span>
        </h2>
        <div></div>
      </Welcome>
      <Form>
        <h2>Login</h2>
        <InputsContainer>
          <InputDiv>
            <Icon icon={FiMail}/>
            <Input bgDarkBlue colorBege type="text" placeholder="E-mail" />
          </InputDiv>
          <InputDiv>
            <Icon icon={FiEyeOff}/>
            <Input bgDarkBlue colorBege type="password" placeholder="Password" />
          </InputDiv>
          <LogInButton type='submit'>Ready</LogInButton>
        </InputsContainer>
      </Form>
    </Container>
  );
};
export default Login;
