import { Section, TechHeader, InputsArea, Create , Input } from "./styles";
const NewWork = ({setShowNewWork}) => {
  return (
    <Section>
      <TechHeader>
        <h2>Register New <span>Work</span></h2>
        <button onClick={()=>setShowNewWork(false)}>x</button>
      </TechHeader>
      <InputsArea >
        <Input id="techName" type="text" placeholder="Technology Name" />
        <Input  description type="text" placeholder='Description' />
        <Input type = 'text' placeholder = 'Deploy url'/>
      </InputsArea>
      <Create>Create</Create>
    </Section>
  );
};

export default NewWork;
