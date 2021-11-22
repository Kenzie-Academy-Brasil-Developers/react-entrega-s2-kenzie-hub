import {
  Section,
  TechHeader,
  InputsArea,
  Create,
  Button,
  DivModule,
  Form,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import api from "./../../Services/api";
import {DivError,ErrorsApi,CloseErr} from './../../Styles/SignUp/styles';
const NewTech = ({ setShowNewTech ,techAddedCount,setTechAddedCount}) => {
  const [srtStatus, setStrStatus] = useState("");
  const [erroApi,setErroApi] = useState('');
  const [successTech,setSuccessTech] = useState(false);
  const [isErrored,setIsErrored] = useState(false);
  const schema = yup.object().shape({
    title: yup.string().required('Title is a required field'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleModule = (event, strStatus) => {
    event.preventDefault();
    setStrStatus(strStatus);
  };
  
  const handleNewTech = (data) => {
    const token = JSON.parse(localStorage.getItem('@kenzieHub:token'));
    const tech = { ...data, status: srtStatus };
    setTechAddedCount(techAddedCount+1);
    api
      .post("/users/techs",tech,{
        headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        setSuccessTech(true)
        setShowNewTech(false);
      })
      .catch(() => {
        setErroApi('Already on your list. Update it or delete.');
        setIsErrored(true);
      });
  };
  
  
  return (
    <>
    {isErrored&&
    <DivError>

      <ErrorsApi>{erroApi}</ErrorsApi>
      <CloseErr onClick={()=>setIsErrored(false)}>x</CloseErr>
    </DivError>
    }
    <Section>
      <TechHeader>
        <h2>
          Register New <span>Tech</span>
        </h2>
        <button onClick={() => setShowNewTech(false)}>x</button>
      </TechHeader>
      <Form onSubmit={handleSubmit(handleNewTech)}>
        <InputsArea>
          <input
            id="techName"
            type="text"
            placeholder="Technology Name"
            {...register('title')}
          />
          <p>Status:</p>
          <span>{errors.title?.message}</span>
          <DivModule>
            <Button onClick={(event) => handleModule(event, "Iniciante")}>
              Beginner
            </Button>
            <Button onClick={(event) => handleModule(event, "Intermediário")}>
              Intermediary
            </Button>
            <Button onClick={(event) => handleModule(event, "Avançado")}>
              Advanced
            </Button>
          </DivModule>
        </InputsArea>
        <Create type="submit" >Create</Create>
      </Form>
    </Section>
    </>
  );
};

export default NewTech;
