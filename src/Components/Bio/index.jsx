import React from 'react';
import {Name,Container,LogOut,ContainerProfile} from './styles';
import {useHistory} from 'react-router-dom';
import {FiUser} from 'react-icons/fi';
import Icon from './../../Components/Icon';
const Bio = ()=>{
  const history = useHistory();
  return (
    <Container>
      <Icon icon={FiUser}/>
        
        <Name>Micaa</Name>
      
      <div>
        <h3>Bio:</h3>
        <p>Sou dev front end</p>
      </div>
      <div>
        <h3>Contact:</h3>
        <p>linked in</p>
      </div>
      <LogOut onClick={()=>history.push('/login')}>Log out</LogOut>
    </Container>
  )
};
export default Bio;