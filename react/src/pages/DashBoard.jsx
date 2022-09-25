import React from 'react';
import TemperatureGaugetest from '../components/TemperatureGaugetest';
import GradientGauge from './../components/GradientGauge'
import Gauge from './../components/Gauge'


const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>

            {/* <GradientGauge value={12} />
            <TemperatureGaugetest url = '/feedback' /> */}
            <Gauge/>

        </div>
    );
};

export default Dashboard;