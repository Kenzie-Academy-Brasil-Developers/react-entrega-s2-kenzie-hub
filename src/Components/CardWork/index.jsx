import {Container,DivIcon,Description,Tech,EditDiv} from './styles';
import Icon from '../Icon'
import {FiGithub, FiEdit2 } from 'react-icons/fi'
import {Link} from 'react-router-dom';
const CardWork = ({title, description, deploy_url})=>{
  return (
    <>
    <Container>
      <DivIcon>
        <Icon icon={FiGithub}/>
      </DivIcon>
      
      <Description>
        <Tech>
          {title}
        </Tech>
        <p>{description.length>=65?description.substr(0,65):description}</p>
        <a href={deploy_url} rel='noreferrer noopener'target="_blank" >{title}</a>
      </Description>
      <EditDiv>
        <Icon icon={FiEdit2}/>
      </EditDiv>
    </Container>
      
     
    </>
  )
};
export default CardWork;