import React from 'react';
import {Name,Container,LogOut} from './styles';
import {useHistory} from 'react-router-dom';
import {FiUser} from 'react-icons/fi';
import Icon from './../../Components/Icon';
const Bio = ({setAuth})=>{
  const history = useHistory();
  const handleLogOut = ()=>{
    localStorage.clear();
    setAuth(false);
    return history.push('/');
  }
  const user = JSON.parse(localStorage.getItem('@kenzieHub:user'));
  const {name,bio,contact} = user
  
 
  return (
    <Container>
      <Icon icon={FiUser}/>
        
        <Name>{name}</Name>
      
      <div>
        <h3>Bio:</h3>
        <p>{bio}</p>
      </div>
      <div>
        <h3>Contact:</h3>
        <a href={contact} rel="noreferrer noopener" target="_blank">{contact.length >= 20 ? `${contact.substr(0, 20)}...` : contact}</a>
      </div>
      <LogOut onClick={()=>handleLogOut()}>Log out</LogOut>
    </Container>
  )
};
export default Bio;