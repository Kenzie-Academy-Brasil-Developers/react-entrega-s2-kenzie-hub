import CardTech from "./../../Components/CardTeck";
import { CardsContainer } from "./styles";
import api from "./../../Services/api";
import { useState, useEffect } from "react";

const ListTech = ({setIsBlured, techAddedCount, setShowUpdateTech ,setActualIdTech}) => {
  const [listTechs, setListTechs] = useState([]);
  const { id } = JSON.parse(localStorage.getItem("@kenzieHub:user"));

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((response) => {
        setListTechs([...response.data.techs]);
      })
      .catch((err) => console.log(err));
  }, [id,listTechs]);

  return (
    <CardsContainer>
      {listTechs.map((tech, index) => {
        const { title, status, id } = tech;
        return (
          <CardTech
            key={index}
            setShowUpdateTech={setShowUpdateTech}
            setActualIdTech={setActualIdTech}
            setIsBlured={setIsBlured}
            listTechs={listTechs}
            id={id}
            title={title}
            status={status}
          />
        );
      })}
    </CardsContainer>
  );
};
export default ListTech;
