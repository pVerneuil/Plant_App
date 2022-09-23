import React from 'react';
import TemperatureGaugetest from '../components/TemperatureGaugetest';
import GradientGauge from './../components/GradientGauge'


const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <GradientGauge/>
            <TemperatureGaugetest/>

        </div>
    );
};

export default Dashboard;