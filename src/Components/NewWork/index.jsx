import { Section, TechHeader, InputsArea, Create, Input } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import api from "./../../Services/api";
import { Form } from "./styles";
const NewWork = ({setIsBlured, setShowNewWork, setWorkAddedCount, workAddedCount }) => {
  const [successWork, setSuccessWork] = useState(false);
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
      .post("/users/works", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        setSuccessWork(true);
        setShowNewWork(false);
        setIsBlured(false);
      })
      .catch((err) => {});
  };
 
  return (
    <Section>
      <TechHeader>
        <h2>
          Register New <span>Work</span>
        </h2>
        <button onClick={() =>{ 
          setIsBlured(false)
          setShowNewWork(false)}}>x</button>
      </TechHeader>
      <Form onSubmit={handleSubmit(handleNewWork)}>
        <InputsArea>
          <div>
            <Input
             
              type="text"
              placeholder="Work Name"
              {...register("title")}
            />
            <span>{errors.title?.message}</span>
          </div>
          <div>

          <Input
            description
            type="text"
            placeholder="Description"
            {...register("description")}
          />
           <span>{errors.description?.message}</span>
          </div>
          <div>

          <Input
            type="text"
            placeholder="Deploy url"
            {...register("deploy_url")}
          />
          <span>{errors.deploy_url?.message}</span>
          </div>
        </InputsArea>
        <Create type="submit" >
          Create
        </Create>
      </Form>
    </Section>
  );
};

export default NewWork;
