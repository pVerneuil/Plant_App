import React, { useRef, useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import styled from "styled-components";

const SimpleChart = (props) => {
  var color = "#2c54d8";
  var xAxisData = props.xValues;
  var yAxisData = props.yValues;
  var mostRecentValue = props.mostRecentValue;
  var unit = '%'
  const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xAxisData,
      show: false,
    },
    yAxis: {
      type: "value",
      min: function (value) {
        return value.min - 3;
      },
      max: function (value) {
        return value.max + 3;
      },
      show: true,
      splitLine: {
        show: false,
      },
      axisLabel: {
        showMaxLabel: false,
        showMinLabel: false,
        color: "#000000",
        inside: true,
        align: "left",
      },
    },
    grid: {
      left: 0,
      top: 6,
      right: 0,
      bottom: 5,
    },
    series: [
      {
        data: yAxisData,
        type: "line",
        smooth: true,
        symbol: "none",
        areaStyle: {},
        color: [color],
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    emphasis: {
      itemStyle: {
        // Color in emphasis state.
        color: "blue",
      },
    },
  };
  const Wrapper = styled.div`
    min-width: 340px;
    margin: 10px;
  `;
  const Div = styled.div`
    height: 0px;
    position: relative;
    top: 4rem;
    left: 4rem;
    &.title {
      position: relative;
      top: -1rem;
      left: -1.2rem;
    }
    &.value {
      position: relative;
      top: 0;
      left: 0;
      height: 0px;
      color: ${(props) => props.theme.dark};
      font-size: 2.5rem;
    }
  `;

  return (
    <Wrapper>
      <Div>
        <Div className="title">Hygrométrie</Div>
        <Div className="value">{mostRecentValue}{unit}</Div>
      </Div>
      <ReactEcharts option={option} />
    </Wrapper>
  );
};

export default SimpleChart;
