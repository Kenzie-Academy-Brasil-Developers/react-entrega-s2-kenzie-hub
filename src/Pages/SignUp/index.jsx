import {
  Container,
  NewWelcome,
  Form,
  InputsContainer,
  Input,
  InputDiv,LogInButton,Quarter
} from "./../../Styles/SignUp/styles";

import Icon from '../../Components/Icon/index';
import { FiUser,FiEye,FiTag,FiMail,FiEyeOff} from 'react-icons/fi'

const SignUp = ()=>{
  return (
    <Container>
      <NewWelcome>
        <h2>
          Welcome, sign up<span>!</span>
        </h2>
        <div></div>
      </NewWelcome>
      <Form>
        <h2>Sign up</h2>
        <InputsContainer>
          <InputDiv>
            <Icon icon={FiUser}/>
            <Input  type="text" placeholder="Name" />
          </InputDiv>
          <InputDiv>
            <Icon icon={FiMail}/>
            <Input  type="text" placeholder="E-mail" />
          </InputDiv>
          <InputDiv>
            <Icon icon={FiTag}/>
            <Input  type="text" placeholder="Bio" />
          </InputDiv>
          <InputDiv>
            <Icon icon={FiEyeOff}/>
            <Input  type="text" placeholder="Password" />
          </InputDiv>
          <InputDiv>
            <Icon icon={FiEyeOff}/>
            <Input  type="text" placeholder="Confirm password"/>
          </InputDiv>
          <InputDiv>
          
            <Quarter>
              <div>
                <h2>Select the Module</h2>
              </div>
              <div>
                <button>Quarter 1</button>
                <button>Quarter 2</button>
                <button>Quarter 3</button>
                <button>Quarter 4</button>
              </div>
              </Quarter>
          </InputDiv>
            
          <LogInButton type='submit'>Ready</LogInButton>
        </InputsContainer>
      </Form>
    </Container>
  );
}
export default SignUp;