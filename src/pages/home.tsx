import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts';
import Charts1 from '../components/charts1';
import Charts2 from '../components/charts2';
import px from '../shared/px';

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
                    <section className="bordered section2">

                    </section>
                    <section className="bordered section3"></section>
                    <section className="bordered section4"></section>
                    <section className="bordered section5"></section>
                    <section className="bordered section6"></section>
                </main>
                <footer>
                    tzc
                </footer>
            </div>
        </div>
    );
};
