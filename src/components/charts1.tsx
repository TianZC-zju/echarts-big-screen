import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import chartTheme from "../shared/echartsTheme.json";
import px from "../shared/px";

const Charts1 = () => {
  const barRef = useRef(null);
  useEffect(() => {
    echarts.registerTheme("virtualbox-power", chartTheme);
    const myChart = echarts.init(barRef.current, "virtualbox-power");
    // 绘制图表
    myChart.setOption({
      tooltip: {},
      legend: {
        top: px(2),
        // right:px(40),
        orient: "vertical",
        textStyle: { color: "white", fontSize: px(14) },
        height: px(40),
        width: px(50),
      },
      xAxis: {
        data: ["华能", "国电", "大唐", "中电投", "华电"],
        axisLabel: {
          fontSize: px(14),
          //   width: px(16),
          //   overflow: "break",
          interval: 0,
        },
      },
      yAxis: {
        axisLine: { show: true },
        splitLine: { show: false },
      },
      series: [
        {
          name: "风电",
          type: "bar",
          data: [10, 20, 35, 40, 15, 25, 35, 15, 30],
        },
        {
          name: "光电",
          type: "bar",
          data: [12, 25, 15, 20, 15, 25, 35, 15, 33],
        },
      ],
      grid: [
        {
          top: px(30),
          bottom: px(30),
          left: px(40),
        },
      ],
    });
  }, []);

  return <div ref={barRef} className="chart"></div>;
};
export default Charts1;
