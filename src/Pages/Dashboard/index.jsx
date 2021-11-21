import {
  Container,
  TechsSection,
  WorksSection,
  BioSection,
  ContainerSection,
  HeaderTech,
  ListDiv,HeaderWork,Header
} from "./../../Styles/Dashboard/styles";
import Bio from "./../../Components/Bio";
import NewTech from "../../Components/NewTech";
import NewWork from "./../../Components/NewWork";
import ListTech from "./../../Components/ListTech/index";
import ListWork from "./../../Components/ListWork/index";
import GlobalStyle from "./../../Styles/Global/styles";
import {Redirect} from 'react-router-dom';
import {useState} from 'react'
const Dashboard = ({auth,setAuth}) => {
  const [showNewTech,setShowNewTech] = useState(false);
  const [showNewWork,setShowNewWork] = useState(false);
  if(!auth){
    return <Redirect to='/login'/>
  }
  return (
    <>
      <GlobalStyle scroll />
      <Container>
        <Header>
          <h1>
            KENZIE <span>Hub</span>
          </h1>
        </Header>
        <ContainerSection>
          <BioSection>
            <Bio setAuth={setAuth}/>
          </BioSection>
          <TechsSection>
            <HeaderTech>
              <h2>My techs</h2>
              <button onClick={()=>setShowNewTech(true)}>+</button>
            </HeaderTech>
              <ListDiv>
                <ListTech />

              </ListDiv>
          </TechsSection>
          <WorksSection>
            <HeaderWork>
              <h2>My Works</h2>
              <button onClick={()=>setShowNewWork(true)}>+</button>
            </HeaderWork>
            <div>
            <ListWork />

            </div>
          </WorksSection>
        </ContainerSection>
      </Container>

      {showNewTech&&<NewTech setShowNewTech={setShowNewTech}/>}
      {showNewWork&&<NewWork setShowNewWork={setShowNewWork}/>}
    </>
  );
};
export default Dashboard;
