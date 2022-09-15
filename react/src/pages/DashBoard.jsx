import React from 'react';
import TemperatureGauge from '../components/TemperatureGauge';
import GradientGauge from './../components/GradientGauge'


const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <GradientGauge/>
            {/* <TemperatureGauge/> */}

        </div>
    );
};

export default Dashboard;