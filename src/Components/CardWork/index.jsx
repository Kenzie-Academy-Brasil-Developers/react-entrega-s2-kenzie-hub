import {Container,DivIcon,Description,Tech,EditDiv} from './styles';
import Icon from '../Icon'
import {FiGithub, FiEdit2 } from 'react-icons/fi'

const CardWork = ()=>{
  return (
    <>
    <Container>
      <DivIcon>
        <Icon icon={FiGithub}/>
      </DivIcon>
      
      <Description>
        <Tech>
          Javascript
        </Tech>
        <p>Descrição do curso com limite de palavras...</p>
      </Description>
      <EditDiv>
        <Icon icon={FiEdit2}/>
      </EditDiv>
    </Container>
      
     
    </>
  )
};
export default CardWork;