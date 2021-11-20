import {
  Container,
  TechsSection,
  WorksSection,
  BioSection,
  ContainerSection
} from "./../../Styles/Dashboard/styles";
import Bio from './../../Components/Bio';
import NewTech from './../../Components/NewTech';
import NewWork from './../../Components/NewWork';
import GlobalStyle from './../../Styles/Global/styles';
const Dashboard = () => {
  return (
    <>
    <GlobalStyle scroll/>
    <Container>
      <div>
        <h1>
          KENZIE <span>Hub</span>
        </h1>
      </div>
      <ContainerSection>
        <BioSection>
          <Bio/>
        </BioSection>
        <TechsSection>
          <div>
            <h2>My techs</h2>
            <button>+</button>
          </div>
          <div><ul></ul>
              </div>
        </TechsSection>
        <WorksSection>
          <div>
            <h2>My Works</h2>
            <button>+</button>
          </div>
        </WorksSection>
      </ContainerSection> 
    </Container>
         
      {/* <NewTech/> */}
      <NewWork/>
    </>
  );
};
export default Dashboard;
