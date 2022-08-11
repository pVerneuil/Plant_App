import axios from 'axios';
import React, { useEffect, useState} from 'react';

const TemperatureGauge = () => {
    const [temp, setTemp ] = useState([]);
    useEffect(() =>  {
        axios
        .get('http://127.0.0.1:8000/data/1/')
        .then((res) => setTemp(res.data));
    },[])

    return (
        <div>
            <p>
                {temp.value} °C
            </p>
        </div>
    );
};

export default TemperatureGauge;