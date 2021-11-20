import {Container,DivIcon,Description,Tech,EditDiv} from './styles';
import Icon from '../Icon'
import {FiCodesandbox, FiEdit2 } from 'react-icons/fi'

const CardTech = ()=>{
  return (
    <>
    <Container>
      <DivIcon>
        <Icon icon={FiCodesandbox}/>
      </DivIcon>
      
      <Description>
        <Tech>
          Javascript
        </Tech>
        <p>Intermediary</p>
      </Description>
      <EditDiv>
        <Icon icon={FiEdit2}/>
      </EditDiv>
    </Container>
      
     
    </>
  )
};
export default CardTech;