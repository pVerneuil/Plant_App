import axios from 'axios';
import React, { useEffect, useState} from 'react';
import ApiGet from '../utilities/ApiGet'

const TemperatureGaugetest = () => {
    const [temp, setTemp ] = useState([]);
    useEffect(() =>  {
        ApiGet()
        .then(setTemp(ApiGet())); 
        console.log('temp= '+temp)     
    },[])

    return (
        <div>   {<p> {temp[0] ? temp[0].value:''}</p>}
                {temp.map((feedback)=> <p> {feedback.value}°C  time: {feedback.time.slice(11,-8)} date: {feedback.time.slice(0,10)}</p>)}
        </div>
    );
};

export default TemperatureGaugetest;