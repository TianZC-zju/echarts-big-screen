import React, {useEffect, useRef} from 'react';
import chartTheme from '../shared/echartsTheme.json'
import * as echarts from 'echarts';
import px from '../shared/px';

const Charts4=()=>{

    const option = {
        tooltip: {
            trigger: 'item'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            splitLine:{show:true,lineStyle:{color:'#072852'}},
            axisLine:{show:true,lineStyle:{color:'#072852'}}
        },
        yAxis: {
            type: 'value',
            axisLine:{show:true,lineStyle:{color:'#072852'}},
            splitLine:{show:true,lineStyle:{color:'#072852'}},

        },
        axisLabel:{color: '#79839e'},
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }
        ],
        grid:[{
            top:px(30),
            bottom:px(30),
            left:px(50),
            // containLabel:true,
        }]

    }; ;
    const barRef = useRef(null)
    useEffect(()=>{
        echarts.registerTheme('virtualbox-power', chartTheme)
        let myChart = echarts.init(barRef.current,'virtualbox-power');
        myChart.setOption(option);
    },[])

    return(
        <div ref={barRef} className="chart">

        </div>
    )
}
export default Charts4