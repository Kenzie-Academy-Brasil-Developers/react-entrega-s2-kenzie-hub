import { Section, TechHeader, InputsArea, Create } from "./styles";
const NewTech = () => {
  return (
    <Section>
      <TechHeader>
        <h2>Register New <span>Tech</span></h2>
        <button>x</button>
      </TechHeader>
      <InputsArea>
        <input id="techName" type="text" placeholder="Technology Name" />
        <p>Status:</p>
        <ul>
          <li>Begginer</li>
          <li>Intermediary</li>
          <li>Advanced</li>
        </ul>
      </InputsArea>
      <Create>Create</Create>
    </Section>
  );
};

export default NewTech;
