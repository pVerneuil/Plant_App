import React from 'react';
import DashboardCard from './../components/DashboardCard'


const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <DashboardCard room='greenhouse'/>
        </div>
    );
};

export default Dashboard;