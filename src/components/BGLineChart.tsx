import {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import React from 'react';

const BGLineChart = () => {
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    };
    const barRef = useRef(null);
    useEffect(()=>{
        const myChart = echarts.init(barRef.current);
        myChart.setOption(option);
    },[]);

    return(
        <div ref={barRef} className="chart" />
);


};

export default BGLineChart;
