import React, { useRef, useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import styled from "styled-components";

const SimpleChart = () => {
    var color ='#2c54d8'
    const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      show:false
    },
    yAxis: {
      type: "value",
      show:false
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
        areaStyle: {},
        color:[
            color,
        ],
      },
    ],
    tooltip: {
        trigger: 'axis'
      },
    emphasis: {
        itemStyle: {
          // Color in emphasis state.
          color: 'blue'
        },

      }
  };
  const Wrapper = styled.div`
    max-width: 370px;
    min-width: 340px;
    margin: 5px;
    border-radius: 20px;

  `;
  return (
    <Wrapper>
      <ReactEcharts option={option} />
    </Wrapper>
  );
};

export default SimpleChart;
