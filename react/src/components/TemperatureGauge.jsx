import axios from 'axios';
import React, { useEffect, useState} from 'react';

const TemperatureGauge = () => {
    const [temp, setTemp ] = useState([]);
    useEffect(() =>  {
        axios
        .get('http://127.0.0.1:8000/feedback/')
        .then((res) => setTemp(res.data));
        
    },[])

    return (
        <div>
                {temp.map((feedback)=> <p> {feedback.value}°C  time: {feedback.time.slice(11,-8)} date: {feedback.time.slice(0,10)}</p>)}
        </div>
    );
};

export default TemperatureGauge;