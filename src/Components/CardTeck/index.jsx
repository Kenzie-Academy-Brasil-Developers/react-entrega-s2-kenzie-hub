import {Container,DivIcon,Description,Tech,EditDiv} from './styles';
import Icon from '../Icon'
import {FiCodesandbox, FiEdit2 } from 'react-icons/fi'

const CardTech = ({setIsBlured,title,status,id,listTechs,setShowUpdateTech,setActualIdTech})=>{
  
  const handleUpdate = (event)=>{
    event.preventDefault()
    const tech = listTechs.find(element=>element.id===id);
    setActualIdTech(tech.id);
    setShowUpdateTech(true);
    setIsBlured(true);
  }
  return (
    <>
    <Container>
      <DivIcon>
        <Icon icon={FiCodesandbox}/>
      </DivIcon>
      
      <Description>
        <Tech>
          {title}
        </Tech>
        <p>{status}</p>
      </Description>
      <EditDiv onClick={(event)=>handleUpdate(event)}>
        <Icon icon={FiEdit2} />
      </EditDiv>
    </Container>
      
     
    </>
  )
};
export default CardTech;