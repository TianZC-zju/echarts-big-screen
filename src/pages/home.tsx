import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts';

type MonkeyWindow =  Window & typeof globalThis &{
    pageWidth: number,
    pageHeight: number,
}
const {pageWidth, pageHeight} =  window as MonkeyWindow
function px(n) {
return n / 1725 * pageWidth;
}


export const Home = () => {

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

    return (
        <div className='container'>
            <div className='page' style={{width: pageWidth, height: pageHeight}}>
                <header className="header" style={{backgroundImage:`url(${headerBg})`}}>
                </header>
                <main>
                    <section className="section1">
                        <div className="bordered bar">
                            <h1>案发派出所管辖统计</h1>
                            <div ref={barRef} className="chart">

                            </div>
                        </div>
                    </section>
                    <section className="bordered section2"></section>
                    <section className="bordered section3"></section>
                    <section className="bordered section4"></section>
                    <section className="bordered section5"></section>
                    <section className="bordered section6"></section>
                </main>
            </div>
        </div>
    );
};
