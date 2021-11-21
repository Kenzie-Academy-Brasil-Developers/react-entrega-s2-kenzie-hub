import {
  Container,
  Welcome,
  Form,
  InputsContainer,
  Input,
  InputDiv,LogInButton
} from "./../../Styles/Login/styles";
import {Link} from 'react-router-dom';
import Icon from '../../Components/Icon/index';
import { FiMail} from 'react-icons/fi';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from './../../Services/api';
import {useHistory,Redirect} from 'react-router-dom';
import {DivError,ErrorsApi,CloseErr} from './../../Styles/SignUp/styles';
const Login = ({togglePasswordVisiblity,
  setPasswordShown,
  passwordShown,auth,setAuth
}) => {
  const [isErrored,setIsErrored] = useState(false);
  
  const history=useHistory();
  const schema = yup.object().shape({

    email: yup.string().required('Email is required').email("Invalid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Minimum of 6 digits"),
    
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleLogIn = (data) => {
    
    
    api.post('/sessions',data)
    .then(response=>{
      const {token,user} = response.data
      localStorage.setItem('@kenzieHub:token',JSON.stringify(token));
      localStorage.setItem('@kenzieHub:user',JSON.stringify(user));
      setAuth(true);
  
      return history.push('/dashboard')
    })
    .catch(err=>{
      return setIsErrored(true);
    });
  };
  if(auth){
    return <Redirect to='/dashboard'/>
  }
  return (
    <>
    {isErrored&&
    <DivError>

      <ErrorsApi>Email or password is incorrect</ErrorsApi>
      <CloseErr onClick={()=>setIsErrored(false)}>x</CloseErr>
    </DivError>
    }
    <Container>
      <Welcome>
        <h2>
          Welcome back<span>!</span>
        </h2>
        <div></div>
      </Welcome>
      <Form onSubmit={handleSubmit(handleLogIn)}>
        <h2>Login</h2>
        <InputsContainer>
          <InputDiv>
            <Icon icon={FiMail}/>
            <Input bgDarkBlue colorBege  placeholder="E-mail" type='text'{...register('email')}/>
          <span>{errors.email?.message}</span>
          </InputDiv>
          <InputDiv>
          <img
                alt=""
                onClick={() =>
                  togglePasswordVisiblity(
                    setPasswordShown,
                    passwordShown
                  )
                }
                src={
                  passwordShown
                    ? "https://img.icons8.com/ios-glyphs/30/000000/visible--v1.png"
                    : "https://img.icons8.com/material-outlined/24/000000/closed-eye.png"
                }
              />
            <Input bgDarkBlue colorBege type={passwordShown ? "text" : "password"} placeholder="Password" {...register('password')}/>
            <span>{errors.password?.message}</span>
          </InputDiv>
          <p>Doesn't have an account? <Link to='/signup'>Click here!</Link></p>
          <LogInButton  type='submit'>Ready</LogInButton>
        </InputsContainer>
      </Form>
    </Container>
    </>
  );
};
export default Login;
