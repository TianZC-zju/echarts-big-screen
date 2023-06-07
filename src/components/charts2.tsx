import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import chartTheme from "../shared/echartsTheme.json";

import px from "../shared/px";

const Charts2 = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: px(2),
      // right:px(40),
      orient: "vertical",
      textStyle: { color: "white", fontSize: px(14) },
      height: px(40),
      width: px(50),
    },
    grid: [
      {
        top: px(10),
        bottom: px(50),
        left: px(60),
        // containLabel: true,
      },
    ],
    xAxis: {
      //   show: false,
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.1)",
        },
      },
    },
    yAxis: {
      type: "category",
      data: ["2014", "2015", "2016", "2017", "2018"],
      splitLine: { show: false },
      axisLabel: {
        fontSize: px(12),
        width: px(32),
        overflow: "break",
        interval: 0,
      },
    },
    series: [
      {
        name: "发电",
        type: "bar",
        data: [5, 1, 3, 1.5, 2],
      },
      {
        name: "装机",
        type: "bar",
        data: [6, 2, 1, 2.5, 3],
      },
    ],
  };
  const barRef = useRef(null);
  useEffect(() => {
    echarts.registerTheme("virtualbox-power", chartTheme);
    const myChart = echarts.init(barRef.current, "virtualbox-power");
    myChart.setOption(option);
  }, []);

  return <div ref={barRef} className="chart"></div>;
};
export default Charts2;
