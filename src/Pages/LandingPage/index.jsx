import {Container,Content,Background,Description} from './../../Styles/LandingPage/styles';
import Button from './../../Styles/Button/styles';
import {useHistory,Redirect} from 'react-router-dom';
const LandingPage = ({auth})=>{
  const history = useHistory();
  if(auth){
    return <Redirect to='/dashboard'/>
  }
  return (
    <Container>
      <header><h1>KENZIE <span>Hub</span></h1></header>
      <Content>
        <Background/>
        <Description>
          <p>
          Com a KENZIE <span>Hub</span> você adiciona tecnologias aprendidas ou trabalhos que desenvolveu, e acompanha o crescimento do seu Dashboard<span>!</span>
          </p>
          <div>
            <Button borderPink fontColorBlack onClick={()=>history.push('/login')}>
              Login
            </Button>
            <Button black onClick={()=>history.push('/signup')}>
              Sign up
            </Button>
          </div>
        </Description>
      </Content>
    </Container>
  )
}
export default LandingPage;