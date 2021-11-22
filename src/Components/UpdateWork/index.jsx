import {
  Section,
  TechHeader,
  InputsArea,
  Create,
  Input,
  Delete,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import api from "../../Services/api";
import { Form } from "./styles";
const UpdateWork = ({
  setShowUpdateWork,
  actualIdWork,
  setShowNewWork,
  setWorkAddedCount,
  workAddedCount,
  setIsBlured
}) => {
  const [successWork, setSuccessWork] = useState(false);
  const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));
  const [ works,setWorks] = useState([])
  const {id} = user;
  useEffect(()=>{
    api.get(`/users/${id}`).then(res=>{
      setWorks([...res.data.works])
    })

  },[actualIdWork, id]);
  const selectedWork = works.find(el=>el.id===actualIdWork);
 
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    deploy_url: yup.string().required("Link is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleNewWork = (data) => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    setWorkAddedCount(workAddedCount + 1);
    api
      .put(`/users/works/${actualIdWork}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        setSuccessWork(true);
        setShowNewWork(false);
        setIsBlured(false);
        setShowUpdateWork(false);
      })
      .catch((err) => {});
  };
  const handleDelete = (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    api
      .delete(`/users/works/${actualIdWork}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
       
        setShowUpdateWork(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Section>
      <TechHeader>
        <h2>
          Update your <span>Work</span>
        </h2>
        <button onClick={() =>{
          setIsBlured(false);
          setShowUpdateWork(false)}}>x</button>
      </TechHeader>
      <Form onSubmit={handleSubmit(handleNewWork)}>
        <InputsArea>
          <div>
            <Input
              id="techName"
              type="text"
              placeholder={selectedWork?.title}
              {...register("title")}
              
            />
            <span>{errors.title?.message}</span>
          </div>
          <div>
            <Input
              description
              type="text"
              placeholder={selectedWork?.description}
              {...register("description")}
              
            />
            <span>{errors.description?.message}</span>
          </div>
          <div>
            <Input
              type="text"
              placeholder={selectedWork?.deploy_url}
              {...register("deploy_url")}
              
            />
            <span>{errors.deploy_url?.message}</span>
          </div>
        </InputsArea>
        <Create type="submit">Create</Create>
        <Delete onClick={(event) => {
          setIsBlured(false);
          handleDelete(event)}}>Delete</Delete>
      </Form>
    </Section>
  );
};

export default UpdateWork;
