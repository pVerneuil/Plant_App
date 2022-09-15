import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '@ant-design/plots';

const GradientGauge = () => {
  const outputValue = 25;
  const outputUnit = '°C'
  const outputPhysicalQuantity = 'Température'
  const config = {
    percent: (outputValue + 0.1)/100,
    range: {
      color: 'l(10) 0:#fa9d9d 1:#f74a05',
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -20,
        style: {
          fontSize: '15px',
          color: '#4B535E',
        },
        formatter: () => outputValue.toString()+ ' '+ outputUnit,
      },
      content: {
        style: {
          fontSize: '12px',
          lineHeight: '20px',
          color: '#4B535E',
        },
        formatter: () => outputPhysicalQuantity,
      },
    },
  };
  return <Gauge {...config} />;
};
export default GradientGauge;

