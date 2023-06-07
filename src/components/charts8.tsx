import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import chartTheme from "../shared/echartsTheme.json";
import px from "../shared/px";

const Charts8 = () => {
  const option = {
    tooltip: {},
    xAxis: {
      type: "category",
      axisLabel: {
        fontSize: px(15),
        interval: 0, // 设置为0,label不换行
      },
      data: ["00:00", "04:00", "08:00", "12:00", "16:00"],
    },
    yAxis: {
      axisLabel: {
        fontSize: px(20),
      },
      axisLine: { show: false },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed", // 设置为虚线
          color: "#eeeeee", // 颜色设置为淡色
        },
      },
    },
    series: [
      {
        name: "数量",
        type: "line",
        data: [8, 12, 16, 4, 19],
        // smooth: true,
      },
    ],
    grid: [
      {
        top: px(30),
        bottom: px(30),
        // left: px(40),
      },
    ],
  };

  const barRef = useRef(null);

  useEffect(() => {
    echarts.registerTheme("virtualbox-power", chartTheme);
    const myChart = echarts.init(barRef.current, "virtualbox-power");
    myChart.setOption(option);
  }, []);

  return (
    <div className="content chart">
      <div ref={barRef} className="pie chart"></div>
      {/* <div ref={barRef2} className="pie chart"></div> */}
    </div>
  );
};

export default Charts8;
