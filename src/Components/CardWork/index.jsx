import { Container, DivIcon, Description, Tech, EditDiv } from "./styles";
import Icon from "../Icon";
import { FiGithub, FiEdit2 } from "react-icons/fi";
import { useEffect } from "react";

const CardWork = ({
  listWorks,
  title,
  id,
  description,
  deploy_url,
  setActualIdWork,
  setShowUpdateWork,
  setIsBlured,
  setValues
}) => {
  const handleUpdate = (event) => {
    event.preventDefault();
    setValues(id);
    const tech = listWorks.find((element) => element.id === id);
    setActualIdWork(tech.id);
    setShowUpdateWork(true);
    setIsBlured(true);
  };
  
  return (
    <>
      <Container>
        <DivIcon>
          <Icon icon={FiGithub} />
        </DivIcon>

        <Description>
          <Tech>{title.length >= 15 ? title.substr(0, 15) : title}</Tech>
          <p>
            {description.length >= 65 ? description.substr(0, 65) : description}
          </p>
          <a href={deploy_url} rel="noreferrer noopener" target="_blank">
            {title}
          </a>
        </Description>
        <EditDiv onClick={(event) => {
        
          handleUpdate(event)}}>
          <Icon icon={FiEdit2} />
        </EditDiv>
      </Container>
    </>
  );
};
export default CardWork;
