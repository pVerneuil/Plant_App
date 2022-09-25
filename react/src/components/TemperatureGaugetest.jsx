import axios from 'axios';
import React, { useEffect, useState} from 'react';
import ApiGet from '../utilities/ApiGet'

const TemperatureGaugetest = (props) => {
    const [temp, setTemp ] = useState([]);
    useEffect(()=>async () => {
        setTemp(await ApiGet(props))   
    },[])

    return (
        <div>   {<p> {temp[0] ? temp[0].value:''}</p>}
                {temp.map((feedback)=> <p> {feedback.value}°C  time: {feedback.time.slice(11,-8)} date: {feedback.time.slice(0,10)}</p>)}
        </div>
    );
};

export default TemperatureGaugetest;