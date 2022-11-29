import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import chartTheme from '../shared/echartsTheme.json'

import px from '../shared/px';

const Charts2=()=>{

    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom:px(2),
            // right:px(40),
            orient:'vertical',
            textStyle:{color: 'white',fontSize:px(14)},
            height:px(40),
            width:px(50),
        },
        grid:[{
            top:px(10),
            bottom:px(50),
            left:px(60),
            // containLabel: true,
        }],
        xAxis: {
            show:false,
        },
        yAxis: {
            type: 'category',
            data: ['七里河区公安局', '七里河区公安局','七里河区公安局','七里河区公安局','七里河区公安局','七里河区公安局','七里河区公安局','七里河区公安局','七里河区公安局'],
            splitLine:{show:false},
            axisLabel:{fontSize:px(8),width:px(32),overflow:'break',interval:0},
        },
        series: [
            {
                name: '破案排名1',
                type: 'bar',
                data: [1,1,1,1,1,1,1,1,1],
                itemStyle:{color:'#1440c9'},
            },
            {
                name: '破案排名2',
                type: 'bar',
                data: [2, 2, 2, 2, 2, 2, 2, 2, 2],
                itemStyle:{color:{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#9223ba' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#555ab9' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }},
            }
        ]
    };
    const barRef = useRef(null)
    useEffect(()=>{
        echarts.registerTheme('virtualbox-power', chartTheme)
        const myChart = echarts.init(barRef.current);
        myChart.setOption(option);
    },[])

    return(
        <div ref={barRef} className="chart">

        </div>
    )
}
export default Charts2