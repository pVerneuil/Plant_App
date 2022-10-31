
import Gauge from "./Gauge";
import styled from "styled-components";
import React, { useEffect, useState} from 'react';
import ApiGet from '../utilities/ApiGet'

function DashboardCard(props) {
  //starting from a emplacement de type != plant. let's call it 'room'
  
  const [HUMA, setHUMA] = useState([]);
  const [TEMP, setTEMP] = useState([]);
  const [PLANTS, setPLANTS] = useState([]);
  
  useEffect(()=> async () => {
    //getting room id
    const emplacementResponse = await(ApiGet('/emplacement/?name='+props.room))
    let roomId = emplacementResponse.results[0]['id']
    
    // ###### getting air temperature/humidity ######
    //getting air temperature/humidity sensor id
    const airTemperatureSensorRes = await(ApiGet('/sensor/?name=&type=TEMP&emplacement='+roomId))
    let airTemperatureSensorId = airTemperatureSensorRes.results[0]['id']
    const airHumiditySensorRes = await(ApiGet('/sensor/?name=&type=HUMA&emplacement='+roomId))
    let airHymiditySensorId = airHumiditySensorRes.results[0]['id']
    //getting feeback from air temp/humidity sensor
    const airTemperaturefeedbacks = await(ApiGet('/feedback/?comming_from='+airTemperatureSensorId+'&hours=24'))
    let lastAirTemperaturefeedback = airTemperaturefeedbacks.results[0]
    setTEMP(lastAirTemperaturefeedback)
    const airHumidityfeedbacks = await(ApiGet('/feedback/?comming_from='+airHymiditySensorId+'&hours=24'))
    let lastAirHumidityfeedback = airHumidityfeedbacks.results[0]
    setHUMA(lastAirHumidityfeedback)
    
    // ###### geting soil moisture of plants ######
    const devicePlantSensorArePlugedInto = await(ApiGet('/device/?emplacement='+roomId))
    let devicePlantSensorArePlugedIntoId = devicePlantSensorArePlugedInto.results[0]['id']
    const soilMoistureSensorsList = await(ApiGet('/sensor/?type=HUMS&plug_in_device='+devicePlantSensorArePlugedIntoId))
    let plantDataList =[]
    for (const sensor of soilMoistureSensorsList.results){
      const lastFeedbacksFromSensor = await(ApiGet('/feedback/?comming_from='+sensor['id']+'&hours=24'))
      const plantSensorArePlugedInto = await(ApiGet('/emplacement/'+sensor['emplacement']))
      plantDataList.push({
        'name': plantSensorArePlugedInto['name'],
        'type': lastFeedbacksFromSensor.results[0]['type'],
        'value' : lastFeedbacksFromSensor.results[0]['value']
      })
    }
    setPLANTS(plantDataList)
    
  },[])

  //Style
  const CardWrapper = styled.div`
    border: solid 2px;
    /* border-radius: 15px; */
    margin-top: 20px;
    color: ${(props) => props.theme.dark};
  `;
  const Card__sub = styled.div`
    border-color: ${(props) => props.theme.primary};
    border: solid 2px;
    /* border-radius: 15px; */
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
      <Card__title>{props.room}</Card__title>
      <Card__sub>
        <Card__title__sub>Air</Card__title__sub>
        <Card__sub__gauges>
          
          <Gauge type = {TEMP['type']} title = "Température" measurement = {TEMP['value']}/>
          <Gauge type = {HUMA['type']} title  = "Hygrométrie " measurement = {HUMA['value']}/>
        </Card__sub__gauges>
      </Card__sub>
      <Card__sub>
        <Card__title__sub>Plants</Card__title__sub>
        <Card__sub__gauges>
          {PLANTS.map((data)=><Gauge type ={data['type']} title = {data['name']} measurement = {data['value']} />) }
        </Card__sub__gauges>
      </Card__sub>
    </CardWrapper>
  );
}

export default DashboardCard;
