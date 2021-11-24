import {
  Section,
  TechHeader,
  Create,
  Button,
  Delete,
  DivModule,
  Form,
} from "./styles";

import { useState } from "react";
import api from "./../../Services/api";

const UpdateTech = ({ setIsBlured,setShowUpdateTech ,techAddedCount,setTechAddedCount,actualIdTech}) => {
  const [srtStatus, setStrStatus] = useState("");
  const [erroApi,setErroApi] = useState('')
  const [successTech,setSuccessTech] = useState(false);
  const [isErrored,setIsErrored] = useState(false)
 
  const handleModule = (event, strStatus) => {
    event.preventDefault();
    setStrStatus(strStatus);
  };
  
  
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
        setSuccessTech(true);
        setShowUpdateTech(false);
        setIsBlured(false);
      }).catch(()=>{
        setErroApi('Status is required');
        setIsErrored(true);
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
    }).catch(()=>{

    })
  }
  
  return (
    
   
    <Section>
      <TechHeader>
        <h2>
          Update <span>status</span>
        </h2>
        <button onClick={() => {
          setIsBlured(false);
          setShowUpdateTech(false)}}>x</button>
      </TechHeader>
      <Form >
        
        {isErrored&&<span>{erroApi}</span>}
          <DivModule>

            <Delete onClick={(event)=>{
              setIsBlured(false);
              handleDelete(event)} } >Delete</Delete>
            <Button  onClick={(event) => {
              setIsErrored(false);
              handleModule(event, "Iniciante")}}>
              Beginner
            </Button>
            <Button  onClick={(event) => {
              setIsErrored(false);
              handleModule(event, "Intermediário")}}>
              Intermediary
            </Button>
            <Button   onClick={(event) => {
              setIsErrored(false);
              handleModule(event, "Avançado")}}>
              Advanced
            </Button>
          </DivModule>
        
        <Create onClick={(event)=>handleNewTech(event) }>Update</Create>
      </Form>
    </Section>
   
  );
};

export default UpdateTech;
