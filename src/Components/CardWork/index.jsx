import {Container,DivIcon,Description,Tech,EditDiv} from './styles';
import Icon from '../Icon'
import {FiGithub, FiEdit2 } from 'react-icons/fi'
import {Link} from 'react-router-dom';
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
        <Link>Link</Link>
      </Description>
      <EditDiv>
        <Icon icon={FiEdit2}/>
      </EditDiv>
    </Container>
      
     
    </>
  )
};
export default CardWork;