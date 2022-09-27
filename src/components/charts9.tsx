import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import px from '../shared/px';

const Charts9 = ()=>{
    const option = {
            tooltip: {},
            xAxis: {
                data: ['东南路','雁北','中山路','武都路','天水路'],
                axisLabel:{fontSize:px(8),width:px(16),overflow:'break',interval:0},
            },
            yAxis: {
                axisLine:{show:true},
                splitLine:{show:false}
            },
            series: [{
                name: '数量',
                type: 'bar',
                data: [10, 20, 35, 40, 15 ],
                itemStyle:{color:{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#1d38fa' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#0b94fb' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }},

            }],
            grid:[{
                top:px(30),
                bottom:px(30),
                left:px(40),
            }]
        };

    const option2 =  {
            legend: {
                left: 'left',
                textStyle:{color:'white'}
            },
            xAxis: {show:false},
            yAxis: {show:false},
            series: [
                {
                    name: 'Chart',
                    type: 'pie',
                    radius: '50%',
                    center: ['50%', '50%'],
                    labelLine:{show:false},
                    label:{show:false},
                    data: [
                        { value: 18, name: '经济' },
                        { value: 20, name: '民事' },
                        { value: 36, name: '刑式' },
                        { value: 24, name: '其他' },
                    ]
                }
            ]
        };




    const barRef = useRef(null)
    const barRef2 = useRef(null)
    useEffect(()=>{
        const myChart = echarts.init(barRef.current);
        myChart.setOption(option);
        const myChart2 = echarts.init(barRef2.current);
        myChart2.setOption(option2);
    },[])

    return(
        <div  className="content chart">
            <div ref={barRef2} className="pie chart"></div>
            <div ref={barRef} className="pie chart"></div>
        </div>
    )
}

export default Charts9