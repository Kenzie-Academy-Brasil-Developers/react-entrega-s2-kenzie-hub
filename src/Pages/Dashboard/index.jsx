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
import NewTech from "../../Components/NewWork/NewTech";
import NewWork from "./../../Components/NewWork";
import ListTech from "./../../Components/ListTech/index";
import ListWork from "./../../Components/ListWork/index";
import GlobalStyle from "./../../Styles/Global/styles";
const Dashboard = () => {
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
            <Bio />
          </BioSection>
          <TechsSection>
            <HeaderTech>
              <h2>My techs</h2>
              <button>+</button>
            </HeaderTech>
              <ListDiv>
                <ListTech />

              </ListDiv>
          </TechsSection>
          <WorksSection>
            <HeaderWork>
              <h2>My Works</h2>
              <button>+</button>
            </HeaderWork>
            <div>
            <ListWork />

            </div>
          </WorksSection>
        </ContainerSection>
      </Container>

      {/* <NewTech/> */}
      {/* <NewWork/> */}
    </>
  );
};
export default Dashboard;
