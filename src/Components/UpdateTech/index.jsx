import {
  Section,
  TechHeader,
  InputsArea,
  Create,
  Button,
  Delete,
  DivModule,
  Form,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import api from "./../../Services/api";

const UpdateTech = ({ setShowUpdateTech ,techAddedCount,setTechAddedCount,actualIdTech}) => {
  const [srtStatus, setStrStatus] = useState("");
 
  const [successTech,setSuccessTech] = useState(false);
 
 
  const handleModule = (event, strStatus) => {
    event.preventDefault();
    setStrStatus(strStatus);
  };
  console.log(actualIdTech)
  
  const handleNewTech = (event) => {
    event.preventDefault()
    const token = JSON.parse(localStorage.getItem('@kenzieHub:token'));
    
    const tech = {  status: srtStatus };
    
    setTechAddedCount(techAddedCount+1);
    api
      .put(`/users/techs/${actualIdTech}`,tech,{
        headers:{ 
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        setSuccessTech(true)
        setShowUpdateTech(false);
      })
      
  };
  const handleDelete=(event)=>{
    const token = JSON.parse(localStorage.getItem('@kenzieHub:token'));
    event.preventDefault();
    api.delete(`/users/techs/${actualIdTech}`,{
      headers:{ 
        Authorization: `Bearer ${token}`
      }
    }).then(()=>{
      setShowUpdateTech(false);
    }).catch(err=>console.log(err))
  }
  
  return (
    
   
    <Section>
      <TechHeader>
        <h2>
          Update <span>status</span>
        </h2>
        <button onClick={() => setShowUpdateTech(false)}>x</button>
      </TechHeader>
      <Form >
        
        
          <DivModule>
            <Delete onClick={(event)=>handleDelete(event) } >Delete</Delete>
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
        
        <Create onClick={(event)=>handleNewTech(event) }>Create</Create>
      </Form>
    </Section>
   
  );
};

export default UpdateTech;
