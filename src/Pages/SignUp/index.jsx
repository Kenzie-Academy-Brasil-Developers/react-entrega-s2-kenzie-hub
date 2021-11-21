import {
  Container,
  NewWelcome,
  Form,
  InputsContainer,
  Input,
  InputDiv,
  SignUpBtn,
  Quarter,
  ButtonModule,
  ErrorsApi,
  DivError,
  CloseErr
} from "./../../Styles/SignUp/styles";

import { Link , Redirect} from "react-router-dom";
import Icon from "../../Components/Icon/index";
import closedEye from './../../Assets/closed-eye.png';
import openedEye from './../../Assets/opened-eye.png';
import {
  FiUser,
  FiEye,
  FiLinkedin,
  FiTag,
  FiMail,
  FiEyeOff,
 
} from "react-icons/fi";
import Success from "./../../Components/Success/index";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from './../../Services/api';

const SignUp = ({togglePasswordVisiblity,setPasswordShown, passwordShown,setConfPasswordShown,confPasswordShown, auth }) => {
  const [dataResponse,setDataResponse] = useState({});
  const [errorsApi,setErrorsApi] = useState('');
  
  const [success,setSuccess] = useState(false);
  const [isErrored,setIsErrored] = useState(false);
  const [strModule, setStrModule] = useState("");

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required().email("Invalid email"),
    bio: yup
      .string()
      .required("Bio is required")
      .max(50, "Maximum of 50 caracteres"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Minimum of 6 digits"),
    confPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password"),null ],'Passwords doesn"t match'),
    contact: yup.string().required("Contact is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleModule = (event,courseModule) => {
    event.preventDefault();
    setStrModule(courseModule);
    setErrorsApi({});
  };

  const handleSignUp = ({name,email,password,bio,contact}) => {
    
    const user = {name,email,password,bio,contact,course_module:strModule}
    api.post('/users',user)
    .then(response=>{
     setSuccess(true);
     setDataResponse({...response.data})
     return setDataResponse({...response})
    
    })
    .catch(err=>{
      console.log(err.response.data.message)
      if(err.response.data.message[0]==='course_module is required'){
        
        setErrorsApi(['Module required'])
        
      }else{

        setErrorsApi(err.response.data.message)
      }
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

      <ErrorsApi>{errorsApi}</ErrorsApi>
      <CloseErr onClick={()=>setIsErrored(false)}>x</CloseErr>
    </DivError>
    }
      <Container success={success}>
        <NewWelcome>
          <h2>
            Welcome<span>!</span>
          </h2>
          <div></div>
        </NewWelcome>
        <Form onSubmit={handleSubmit(handleSignUp)}>
          <h2>Sign up</h2>
          <InputsContainer>
            <InputDiv error={errors.name?.message}>
              <Icon icon={FiUser} />
              <Input
                autocomplete="on"
                type="text"
                placeholder="Name"
                {...register("name")}
                error={errors.name?.message}
              />
              <span>{errors.name?.message}</span>
            </InputDiv>
            <InputDiv  error={errors.email?.message}>
              <Icon icon={FiMail} />
              <Input
                autocomplete="on"
                type="text"
                placeholder="E-mail"
                {...register("email")}
                error={errors.email?.message}
              />
              <span>{errors.email?.message}</span>
            </InputDiv>
            <InputDiv  error={errors.bio?.message}>
              <Icon icon={FiTag} />
              <Input
                autocomplete="on"
                type="text"
                placeholder="Bio"
                {...register("bio")
              }
              error={errors.bio?.message}
              />
              <span>{errors.bio?.message}</span>
            </InputDiv>
            <InputDiv cursor="true" error={errors.password?.message}>
              <img
                alt=""
                onClick={() =>
                  togglePasswordVisiblity(setPasswordShown, passwordShown)
                }
                src={
                  passwordShown
                    ? openedEye
                    : closedEye
                }
              />
              <Input
                type={passwordShown ? "text" : "password"}
                autocomplete="on"
                placeholder="Password"
                {...register("password")}
                error={errors.password?.message}
              />
              <span>{errors.password?.message}</span>
            </InputDiv>
            <InputDiv cursor="false" error={errors.confPassword?.message} errors>
              <img
                alt=""
                onClick={() =>
                  togglePasswordVisiblity(
                    setConfPasswordShown,
                    confPasswordShown
                  )
                }
                src={
                  passwordShown
                    ? openedEye
                    : closedEye
                }
              />
              <Input
                type={confPasswordShown ? "text" : "password"}
                autocomplete="on"
                placeholder="Confirm password"
                {...register("confPassword") }error={errors.confPassword?.message}
              />
              <span>{errors.confPassword?.message}</span>
            </InputDiv>
            <InputDiv error={errors.contact?.message}>
              <Icon icon={FiLinkedin} />
              <Input
                autocomplete="on"
                type="text"
                placeholder="Linked in or Phone"
                {...register("contact")}
                error={errors.contact?.message}
              />
              <span>{errors.contact?.message}</span>
            </InputDiv>

            <InputDiv>
              <Quarter>
                <div>
                  <h2>Select the Module</h2>
                </div>
                <div>
                  <ButtonModule
                    onClick={(event) =>
                      handleModule(event,"Primeiro módulo (Introdução ao Frontend)")
                    }
                  >
                    Q1
                  </ButtonModule>
                  <ButtonModule
                    onClick={(event) =>
                      handleModule(event,"Segundo módulo (Frontend Avançado)")
                    }
                  >
                    Q2
                  </ButtonModule>
                  <ButtonModule
                    onClick={(event) =>
                      handleModule(event,"Terceiro módulo (Introdução ao Backend)")
                    }
                  >
                    Q3
                  </ButtonModule>
                  <ButtonModule
                    onClick={(event) =>
                      handleModule(event,"Quarto módulo (Backend Avançado)")
                    }
                  >
                    Q4
                  </ButtonModule>
                </div>
                <p>
                  Already have an account?<Link to="/login"> Login here!</Link>
                </p>
              </Quarter>
            </InputDiv>

            <SignUpBtn type="submit">Ready</SignUpBtn>
          </InputsContainer>
        </Form>
      </Container>

      {success&&<Success setSuccess={setSuccess}/>}
    </>
  );
};
export default SignUp;
