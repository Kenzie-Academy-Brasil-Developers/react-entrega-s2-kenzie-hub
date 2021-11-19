import {Container,Content,Background,Description} from './../../Styles/LandingPage/styles'
import Button from './../../Styles/Button/styles'
const LandingPage = ()=>{
  return (
    <Container>
      <header><h1>KENZIE <span>Hub</span></h1></header>
      <Content>
        <Background/>
        <Description>
          <p>
          Com a KENZIE <span>Hub</span> você adiciona tecnologias aprendidas ou trabalhos que desenvolveu,e acompanha o crescimento do seu dashboard<span>!</span>
          </p>
          <div>
            <Button borderPink fontColorBlack>
              Login
            </Button>
            <Button black>
              Sign up
            </Button>
          </div>
        </Description>
      </Content>
    </Container>
  )
}
export default LandingPage;