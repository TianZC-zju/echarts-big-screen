import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import px from '../shared/px';

const Charts1=()=>{

    const barRef = useRef(null)
    useEffect(()=>{
        const myChart = echarts.init(barRef.current);
// 绘制图表
        myChart.setOption({
            tooltip: {},
            xAxis: {
                data: ['兰州新区','兰州新区','兰州新区','兰州新区','兰州新区','兰州新区','兰州新区','兰州新区','兰州新区'],
                axisLabel:{fontSize:px(8),width:px(16),overflow:'break',interval:0},
            },
            yAxis: {
                axisLine:{show:true},
                splitLine:{show:false}
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [10, 20, 35, 40, 15, 25,35,15,30]
            }],
            grid:[{
                top:px(30),
                bottom:px(30),
                left:px(40),
            }]
        });
    },[])

    return(
        <div ref={barRef} className="chart">

        </div>
    )
}
export default Charts1