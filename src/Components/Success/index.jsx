import { Section, TechHeader, LogIn } from "./styles";
import {useHistory} from 'react-router-dom';
const Success = () => {
  const history =useHistory();
  return (
    <Section>
      <TechHeader>
        <h2>Congratulations<span>!</span></h2>
        <button>x</button>
      </TechHeader>

        <p> Everything is alright, now you just need to log in!</p>
        
      <LogIn onClick={()=>history.push('/login')}>Log in</LogIn>
    </Section>
  );
};

export default Success;
