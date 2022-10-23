import * as variable from "./../styles/variables.scss";
import React, { useRef, useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import styled from "styled-components";

const Gauge = (props) => {
  //Data
  const gaugetitle = props.title;
  const measurement = 15;
  // const measurement = props.measurement;
  const measurementType = props.type;
  //Style
  const Wrapper = styled.div`
    border-radius: 20px;
    background: ${(props) => props.theme.background};
    max-width: 370px;
    min-width: 340px;
    margin: 5px;
    &.title {
      font-size: large;
      font-weight: Bold;
      text-align: center;
      border: none;
      color: ${(props) => props.theme.dark};
    }
  `;

  var unit;
  var min;
  var max;
  var splitNumber;
  var color1;
  var color2;
  if (measurementType == "TEMP") {
    unit = "°C";
    min = 0;
    max = 60;
    splitNumber = 12;
    color1 = "#FFAB91";
    color2 = "#FD7347";
  }
  if (measurementType == "HUMA" || measurementType == "HUMS") {
    unit = "%";
    min = 0;
    max = 100;
    splitNumber = 10;
    color1 = "#7FAEF8";
    color2 = "#186BEF";
  }

  const option = {
    series: [
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: min,
        max: max,
        splitNumber: splitNumber,
        itemStyle: {
          color: color1,
        },
        progress: {
          show: true,
          width: 30,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            width: 30,
          },
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 2.5,
            color: "#999",
          },
        },
        axisLabel: {
          distance: -20,
          color: "#999",
          fontSize: 20,
        },
        anchor: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          width: "60%",
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, "-15%"],
          fontSize: 30,
          fontWeight: "bolder",
          formatter: "{value} " + unit,
          color: "inherit",
        },
        data: [
          {
            value: measurement,
          },
        ],
      },
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: min,
        max: max,
        itemStyle: {
          color: color2,
        },
        progress: {
          show: true,
          width: 8,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: measurement,
          },
        ],
      },
    ],
  };

  return (
    <Wrapper>
      <Wrapper className="gauge">
        <ReactEcharts option={option} />
      </Wrapper>
      <Wrapper className="title">{gaugetitle}</Wrapper>
    </Wrapper>
  );
};

export default Gauge;
