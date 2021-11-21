import { Section, TechHeader, LogIn } from "./styles";
import {useHistory} from 'react-router-dom';
const Success = ({setSuccess}) => {
  const history =useHistory();
  return (
    <Section>
      <TechHeader>
        <h2>Congratulations<span>!</span></h2>
        <button onClick={()=>setSuccess(false)}>x</button>
      </TechHeader>

        <p> Everything is alright, now you just need to log in!</p>
        
      <LogIn onClick={()=>history.push('/login')}>Log in</LogIn>
    </Section>
  );
};

export default Success;
