import CardWork from "./../../Components/CardWork";
import { CardsContainer } from "./styles";
import api from "./../../Services/api";
import { useState, useEffect } from "react";
const ListWork = ({setIsBlured, setActualIdWork, setShowUpdateWork }) => {
  const [listWorks, setListWorks] = useState([]);
  const { id } = JSON.parse(localStorage.getItem("@kenzieHub:user"));
  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
  useEffect(() => {
    api
      .get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setListWorks([...response.data.works]);
      })
      .catch((err) => console.log(err));
  }, [id, token, listWorks]);

  return (
    <CardsContainer>
      {listWorks.map((work, index) => {
        const { title, description, deploy_url, id } = work;

        return (
          <CardWork
            key={index}
            listWorks={listWorks}
            id={id}
            setShowUpdateWork={setShowUpdateWork}
            setActualIdWork={setActualIdWork}
            setIsBlured={setIsBlured}
            title={title}
            description={description}
            deploy_url={deploy_url}
          />
        );
      })}
    </CardsContainer>
  );
};
export default ListWork;
