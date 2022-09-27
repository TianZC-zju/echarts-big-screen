import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts';
import Charts1 from '../components/charts1';

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
                        <div className="bordered bar">
                            <h1>案发派出所管辖统计</h1>
                            <Charts1/>
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
