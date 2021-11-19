import {
  Container,
  NewWelcome,
  Form,
  InputsContainer,
  Input,
  InputDiv,LogInButton,Quarter
} from "./../../Styles/SignUp/styles";
import {Link} from 'react-router-dom';
import Icon from '../../Components/Icon/index';
import { FiUser,FiEye,FiLinkedin,FiTag,FiMail,FiEyeOff} from 'react-icons/fi'

const SignUp = ()=>{
  return (
    <Container>
      <NewWelcome>
        <h2>
          Welcome<span>!</span>
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
            <Icon icon={FiLinkedin}/>
            <Input  type="text" placeholder="Linked in"/>
          </InputDiv>
          <InputDiv>
          
            <Quarter>
              <div>
                <h2>Select the Module</h2>
              </div>
              <div>
                <button>Q1</button>
                <button>Q2</button>
                <button>Q3</button>
                <button>Q4</button>
              </div>
              <p>Already have an account?<Link to='/login'> Login here!</Link></p>
              </Quarter>
          </InputDiv>
            
          <LogInButton type='submit'>Ready</LogInButton>
        </InputsContainer>
      </Form>
    </Container>
  );
}
export default SignUp;