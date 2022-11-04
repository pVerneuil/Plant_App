import InstructionForm from "../components/InstructionForm";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ApiGet from "../utilities/ApiGet";

const InstructionsPage = () => {
  const [ROOMLIST, setROOM] = useState([]);
  const [GREENHLIST, setGREEN] = useState([]);
  const [greenhouseActuator, setgreenhouseAct] = useState([]);
  useEffect(
    () => async () => {
      const roomList = await ApiGet("/emplacement/?type=room");
      const greenHouseList = await ApiGet("/emplacement/?type=greenhouse");
      let greenHouseActuator = {};
      for (const greenhouse of greenHouseList.results) {
        greenHouseActuator[greenhouse["name"]] = await ApiGet(
          "/actuator/?emplacement=" + greenhouse["id"]
        );
      }
      setgreenhouseAct(greenHouseActuator);
      setGREEN(greenHouseList.results);
      setROOM(roomList.results);
    },
    []
  );
  // style
  const Wrapper = styled.div`
    padding: 5px;
  `;
  const Listing__wrapper = styled.div`
    padding: 5px;
  `;
  const Listing__actuator__wrapper = styled.div`
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
  `;
  const CategoryTitle = styled.h2`
    max-width: 10rem;
    margin: 5px;
    border-radius: 15px;
    font-size: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.dark};
  `;
  const Emplacement = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    `;
    const Div = styled.div`
        border-color: ${(props) => props.theme.primary};
    border: solid 2px;
    border-radius: 10px;
    margin: 5px;

    `
  return (
    <Wrapper>
      <h1>Commandes</h1>
      <Listing__wrapper>
        {GREENHLIST.length != 0 && <CategoryTitle>Serres</CategoryTitle>}
        {GREENHLIST.map((greenhouse) => (
          <Div>
            <Emplacement>{greenhouse["name"]}</Emplacement>
            <Listing__actuator__wrapper>
              {greenhouseActuator[greenhouse["name"]].results.map((data) => (
                <InstructionForm actuator={data} />
              ))}
            </Listing__actuator__wrapper>
          </Div>
        ))}

        {ROOMLIST.length != 0 && <CategoryTitle>Pièces</CategoryTitle>}
        {ROOMLIST.map((room) => (
          <h3>{room["name"]}</h3>
        ))}
      </Listing__wrapper>
    </Wrapper>
  );
};

export default InstructionsPage;
