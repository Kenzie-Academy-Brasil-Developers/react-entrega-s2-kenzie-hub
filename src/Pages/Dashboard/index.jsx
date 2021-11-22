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
import UpdateTech from './../../Components/UpdateTech'
import UpdateWork from './../../Components/UpdateWork/index'
import ListTech from "./../../Components/ListTech/index";
import ListWork from "./../../Components/ListWork/index";
import GlobalStyle from "./../../Styles/Global/styles";
import {Redirect} from 'react-router-dom';
import {useState} from 'react'
const Dashboard = ({auth,setAuth}) => {
  const [showNewTech,setShowNewTech] = useState(false);
  const [showUpdateTech,setShowUpdateTech] = useState(false);
  const [showNewWork,setShowNewWork] = useState(false);
  const [showUpdateWork,setShowUpdateWork] = useState(false);
  const [workAddedCount,setWorkAddedCount] =useState(0);
  const [techAddedCount,setTechAddedCount] = useState(0);
  const [actualIdTech,setActualIdTech] = useState('');
  const [actualIdWork,setActualIdWork] = useState('');
  const [isBlured,setIsBlured] = useState(false)
  
  if(!auth){
    return <Redirect to='/login'/>
  }
  return (
    <>
      <GlobalStyle scroll />
      <Container blured={isBlured}>
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
              <button onClick={()=>{
                setIsBlured(true)
                setShowNewTech(true)}}>+</button>
            </HeaderTech>
              <ListDiv>
                <ListTech setIsBlured={setIsBlured}techAddedCount={techAddedCount}  setShowUpdateTech={setShowUpdateTech} setActualIdTech={setActualIdTech}/>

              </ListDiv>
          </TechsSection>
          <WorksSection>
            <HeaderWork>
              <h2>My Works</h2>
              <button onClick={()=>{
                setIsBlured(true)
                setShowNewWork(true)}}>+</button>
            </HeaderWork>
            <div>
            <ListWork setIsBlured={setIsBlured} setActualIdWork={setActualIdWork} setShowUpdateWork={setShowUpdateWork} />

            </div>
          </WorksSection>
        </ContainerSection>
      </Container>

      {showNewTech&&<NewTech setIsBlured={setIsBlured}setShowNewTech={setShowNewTech}  setTechAddedCount={setTechAddedCount} techAddedCount={techAddedCount}/> }
      {showNewWork&&<NewWork setIsBlured={setIsBlured} setShowNewWork={setShowNewWork} setWorkAddedCount={setWorkAddedCount} workAddedCount={workAddedCount}/>}
      { showUpdateTech&& <UpdateTech setIsBlured={setIsBlured}setShowUpdateTech={setShowUpdateTech} techAddedCount={techAddedCount} setTechAddedCount={setTechAddedCount} actualIdTech={actualIdTech}/>}
      {showUpdateWork&&<UpdateWork setIsBlured={setIsBlured}setWorkAddedCount={setWorkAddedCount}setShowUpdateWork={setShowUpdateWork} actualIdWork={actualIdWork} setShowNewWork={setShowNewWork} setActualIdWork={setActualIdWork}/>}
    </>
  );
};
export default Dashboard;
