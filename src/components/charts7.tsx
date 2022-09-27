import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import px from '../shared/px';

const Charts7 = ()=>{
   const option = {
       tooltip: {
           trigger: 'item'
       },
       legend: {
           bottom: '5%',
           left: 'center',
           textStyle:{ color:'white' },
       },

       grid:[{
           top:px(2),
       }],
       series: [
           {
               center:['50%','35%'],
               type: 'pie',
               radius: ['60%', '70%'],
               avoidLabelOverlap: false,
               label: {
                   show: true,
                   position: 'center',
                   formatter:()=>'性别',
                   fontSize:px(40),
                   color:'#329ff4',

               },
               labelLine: {
                   show: false
               },
               data: [
                   { value: 80, name: '男' },
                   { value: 20, name: '女' },

               ]
           }
       ]
   };

   const option2 = {
       ...option,
       legend:{
           ...(option.legend),
           itemHeight:px(10),
           itemWidth:px(10),
           textStyle:{
               fontSize: px(10),
               color:'white',

           }
       },
       series: [{
           ...(option.series[0]),
           label: {
               ...(option.series[0].label),
               formatter:()=>'年龄段'
           },
           data: [
               { value: 7, name: '10-20' },
               { value: 10, name: '20-30' },
               { value: 23, name: '30-40' },
               { value: 28, name: '40-50' },
               { value: 32, name: '50-60' },

           ]
       }]
   }
     const option3 = {
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
    const barRef2 = useRef(null)
    const barRef3 = useRef(null)
    useEffect(()=>{
        const myChart = echarts.init(barRef.current);
        myChart.setOption(option);
        const myChart2 = echarts.init(barRef2.current);
        myChart2.setOption(option2);
        const myChart3 = echarts.init(barRef3.current);
        myChart3.setOption(option3);
    },[])

    return(
        <div  className="content chart">
            <div ref={barRef} className="pie chart"></div>
            <div ref={barRef2} className="pie chart"></div>
            <div ref={barRef3} className="pie chart"></div>
        </div>
    )
}

export default Charts7