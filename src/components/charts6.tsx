import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import chartTheme from '../shared/echartsTheme.json'
import zhejiang from '../shared/zhejiang.json'

const Charts6 = () => {
    const lines = [
        {
            "fromName": "绍兴",
            "toName": "杭州",
            "coords": [[120.57, 30.00], [120.15507, 30.274085]]
        },
        {
            "fromName": "绍兴",
            "toName": "宁波",
            "coords": [[120.57, 30.00], [121.55,  29.88]]
        },
        {
            "fromName": "绍兴",
            "toName": "丽水",
            "coords": [[120.57, 30.00], [119.92, 28.45]]
        },
        {
            "fromName": "绍兴",
            "toName": "台州",
            "coords": [[120.57, 30.00], [121.43, 28.68]]
        },
        {
            "fromName": "绍兴",
            "toName": "衢州",
            "coords": [[120.57, 30.00], [118.87, 28.93]]
        },
        {
            "fromName": "绍兴",
            "toName": "温州",
            "coords": [[120.57, 30.00], [120.70,28.00]]
        },
    ]
    const cities =[
        {
            "name": "杭州",
            "value": [120.15507, 30.274085, 10],
            symbolSize: 30,
        },
        {
            "name": "绍兴",
            "value": [120.57, 30.00, 10],
            symbolSize: 15,
        },
        {
            "name": "宁波",
            "value": [121.55,  29.88],
            symbolSize: 25,
        },
    {
        "name": "丽水",
        "value": [119.92, 28.45],
        symbolSize: 15,
    },
        {
            "name": "台州",
            "value": [121.43, 28.68],
            symbolSize: 15,
        },
        {
            "name": "衢州",
            "value": [118.87, 28.93],
            symbolSize: 10,
        },
        {
            "name": "温州",
            "value": [120.70,28.00],
            symbolSize: 10,
        },
    ]
    const option = {
        backgroundColor: '#001634',
        geo: {
            map: 'zhejiang',
            label: {
                emphasis: {
                    show: false
                }
            },
            layoutCenter: ['50%', '50%'],
            layoutSize: "100%",
            roam: true,
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)',
                    areaColor: '#286AD4',
                    borderColor: '#979797'
                },
                emphasis: {
                    areaColor: '#0089ff'
                }
            },
        },
        series:[
            {
                //  name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: cities,
                symbolSize: 20,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color:'rgba(0,0,0,0)',
                        borderColor: '#FFDB4D',
                        // shadowBlur: 10,
                    }
                },
                zlevel: 2
            },
            {
                name: '线路',
                type: 'lines',
                coordinateSystem: 'geo',
                zlevel: 2,
                large: true,
                effect: {
                    show: true,
                    constantSpeed: 30,
                    symbol: 'circle',
                    symbolSize: 5,
                    color:'#FFF0A3',
                    trailLength: 0.2,
                },
                lineStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //     offset: 0, color: '#58B3CC'
                        // }, {
                        //     offset: 1, color: '#F58158'
                        // }], false),
                        color:'#FFD752',
                        width: 2,
                        opacity: 0.2,
                        curveness: 0.1
                    }
                },
                data: lines
            }
        ]
    }
    const barRef = useRef(null)
    useEffect(() => {
        echarts.registerTheme('virtualbox-power', chartTheme)
        echarts.registerMap('zhejiang', zhejiang);
        const myChart = echarts.init(barRef.current);
        myChart.setOption(option);
    }, [])
    return (
            <div ref={barRef} className="chart">

            </div>
    )
}



export default Charts6