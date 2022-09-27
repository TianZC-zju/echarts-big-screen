import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts';
import Charts1 from '../components/charts1';
import Charts2 from '../components/charts2';
import px from '../shared/px';
import Charts3 from '../components/charts3';
import Charts4 from '../components/charts4';
import Charts5 from '../components/charts5';
import Charts6 from '../components/charts6';
import Charts7 from '../components/charts7';
import Charts8 from '../components/charts8';
import Charts9 from '../components/charts9';
import Charts10 from '../components/charts10';

type MonkeyWindow =  Window & typeof globalThis &{
    pageWidth: number,
    pageHeight: number,
}
const {pageWidth, pageHeight} =  window as MonkeyWindow


export const Home = () => {

    return (
        <div className='container'>
            <div className='page' style={{width: pageWidth, height: pageHeight}}>
                <header className="header" style={{backgroundImage:`url(${headerBg})`}}>
                </header>
                <main>
                    <section className="section1">
                        <div className="bordered bar" style={{marginBottom:px(10)}}>
                            <h1>案发派出所管辖统计</h1>
                            <Charts1/>
                        </div>
                        <div className="bordered bar bar2">
                            <h1>案件破获排名</h1>
                            <Charts2/>
                        </div>
                    </section>
                    <section className="section2">
                      <div className="bordered line" style={{marginBottom:px(10)}}>
                            <h1>发案趋势分析</h1>
                            <Charts3/>
                        </div>
                        <div className="bordered line">
                            <h1>案发时段分析</h1>
                            <Charts4/>
                        </div>
                    </section>
                    <section className="bordered section3">
                        <h1>往年战果数对比</h1>
                        <Charts5/>
                    </section>
                    <section className="bordered section4">
                        <h1>全市犯罪人员籍贯分布地</h1>
                        <Charts6/>
                    </section>
                    <section className="bordered section5">
                        <h1>全市犯罪人员籍贯分布地</h1>
                        <Charts7/>
                    </section>
                    <section className="section6">
                        <div className="bordered line" style={{marginBottom:px(10)}}>
                            <h1>案发类型统计</h1>
                            <Charts8/>
                        </div>
                        <div className="bordered line" style={{marginBottom:px(10)}}>
                            <h1>案发街道统计</h1>
                            <Charts9/>
                        </div>
                        <div className="bordered line">
                            <h1>作案手段分析</h1>
                            <Charts10/>
                        </div>
                    </section>
                </main>
                <footer>
                    tzc
                </footer>
            </div>
        </div>
    );
};
