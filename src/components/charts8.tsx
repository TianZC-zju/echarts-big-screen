import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import chartTheme from '../shared/echartsTheme.json'
import px from '../shared/px';

const Charts8 = ()=>{
    const option = {
            tooltip: {},
            xAxis: {
                data: ['分类1','分类2','分类3',],
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
                // itemStyle:{color:{
                //         type: 'linear',
                //         x: 0,
                //         y: 0,
                //         x2: 0,
                //         y2: 1,
                //         colorStops: [{
                //             offset: 0, color: '#1d38fa' // 0% 处的颜色
                //         }, {
                //             offset: 1, color: '#0b94fb' // 100% 处的颜色
                //         }],
                //         global: false // 缺省为 false
                //     }},

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
                        { value: 18, name: '分类1' },
                        { value: 20, name: '分类2' },
                        { value: 36, name: '分类3' },
                        { value: 24, name: '分类4' },
                    ]
                }
            ]
        };




    const barRef = useRef(null)
    const barRef2 = useRef(null)

    useEffect(()=>{
        echarts.registerTheme('virtualbox-power', chartTheme)
        const myChart = echarts.init(barRef.current,'virtualbox-power' );
        myChart.setOption(option);
        const myChart2 = echarts.init(barRef2.current,'virtualbox-power');
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