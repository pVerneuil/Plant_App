import React from 'react';
import Header from '../components/Header';
import TemperatureGauge from '../components/TemperatureGauge';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <h1>Dashboard</h1>
            <TemperatureGauge />
        </div>
    );
};

export default Dashboard;