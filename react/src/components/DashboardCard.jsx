import React from "react";
import Gauge from "./Gauge";
import styled from "styled-components";

function DashboardCard() {
  //Style
  const CardWrapper = styled.div`
    border: solid 2px;
    border-radius: 15px;
    margin-top: 20px;
    color: ${(props) => props.theme.dark};
  `;
  const Card__sub = styled.div`
    border-color: ${(props) => props.theme.primary};
    border: solid 2px;
    border-radius: 15px;
    margin: 5px;
  `;
  const Card__sub__gauges = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `;
  const Card__title = styled.h3`
    font-size: 2rem;
    text-align: center;
    `;
  const Card__title__sub = styled.h4`
    max-width: 10rem;
    margin: 5px;
    border-radius: 15px;
    font-size: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.dark};
  `;

  return (
    <CardWrapper>
      <Card__title>Titre</Card__title>
      <Card__sub>
        <Card__title__sub>Room</Card__title__sub>
        <Card__sub__gauges>
          <Gauge />
          <Gauge />
        </Card__sub__gauges>
      </Card__sub>
      <Card__sub>
        <Card__title__sub>Plants</Card__title__sub>
        <Card__sub__gauges>
          <Gauge />
          <Gauge />
          <Gauge />
          <Gauge />
          <Gauge />
        </Card__sub__gauges>
      </Card__sub>
    </CardWrapper>
  );
}

export default DashboardCard;
