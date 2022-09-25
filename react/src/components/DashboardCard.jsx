import React from "react";
import Gauge from "./Gauge";
import styled from "styled-components";

function DashboardCard() {
  //Style
  const CardWrapper = styled.div`
    background-color: rgba(25, 66, 46, 0.822);
    border-radius: 15px;
    margin-top: 20px;
    color: white;
  `;
  const Card__sub = styled.div`
    background-color: rgba(25, 66, 46, 0.603);
    border-radius: 15px;
    margin-top: 5px;
    `;
  const Card__sub__gauges = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    `;
  const Card__title = styled.h3`
    font-size: 2rem;
    padding-left: 1rem;
    text-align: center;
    `;
  const Card__title__sub = styled.h4`
  border-radius: 15px;
    font-size: 1.5rem;
    padding-left: 3rem;
    background-color: rgba(25, 66, 46, 0.822);

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
        </Card__sub__gauges>
      </Card__sub>
    </CardWrapper>
  );
}

export default DashboardCard;
