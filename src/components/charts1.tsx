import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import chartTheme from '../shared/echartsTheme.json'
import px from '../shared/px';

const Charts1=()=>{

    const barRef = useRef(null)
    useEffect(()=>{
        echarts.registerTheme('virtualbox-power', chartTheme)
        const myChart = echarts.init(barRef.current,'virtualbox-power' );
// 绘制图表
        myChart.setOption({
            tooltip: {},
            xAxis: {
                data: ['指标1','指标2','指标3','指标4','指标5','指标6','指标7','指标8','指标9'],
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