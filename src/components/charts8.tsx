import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import px from '../shared/px';

const Charts8 = ()=>{
    const option = {
            tooltip: {},
            xAxis: {
                data: ['入室抢劫','当街盗窃','团伙诈骗','形式案件','民事案件'],
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
                top: 'bottom',
                textStyle:{
                    fontSize: px(10),
                    color:'white',
                },
                itemHeight:px(10),
                itemWidth:px(10),

            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [px(10), px(60)],
                    center: ['50%', '35%'],
                    roseType: 'area',
                    // itemStyle: {
                    //     borderRadius: px(3)
                    // },
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
            <div ref={barRef} className="pie chart"></div>
            <div ref={barRef2} className="pie chart"></div>
        </div>
    )
}

export default Charts8