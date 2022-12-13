import React from 'react';
import './home.scss';
import Charts1 from '../components/charts1';
import Charts2 from '../components/charts2';
import px from '../shared/px';
import Charts3 from '../components/charts3_mock';
import Charts4 from '../components/charts4';
import Charts5 from '../components/charts5';
import Charts6 from '../components/charts6';
import Charts7 from '../components/charts7';
import Charts8 from '../components/charts8';
import Charts9 from '../components/charts9';
import Charts10 from '../components/charts10';
import VPContainer from '../components/container';
import VPBorderBox from '../components/borderBox';

export const Home = () => {

    return (
        <VPContainer>
            <main className='home'>
                <section className="section1">
                    <VPBorderBox title='容量指标' className='bar'>
                        <Charts1/>
                    </VPBorderBox>
                    <VPBorderBox title='发电单元类型分布' className='bar bar2'>
                        <Charts2/>
                    </VPBorderBox>
                </section>
                <section className="section2">
                    <VPBorderBox title='负荷曲线' className='line'>
                        <Charts3/>
                    </VPBorderBox>
                    <VPBorderBox title='考核指标' className='line'>
                        <Charts4/>
                    </VPBorderBox>
                </section>
                <section className="bordered section3">
                    <h1>容量指标</h1>
                    <Charts5/>
                </section>
                <section className="bordered section4">
                    <h1>浙江省能源地图</h1>
                    <Charts6/>
                </section>
                <section className="bordered section5">
                    <h1>容量指标</h1>
                    <Charts7/>
                </section>
                <section className="section6">
                    <div className="bordered line" style={{marginBottom:px(10)}}>
                        <h1>容量指标</h1>
                        <Charts8/>
                    </div>
                    <div className="bordered line" style={{marginBottom:px(10)}}>
                        <h1>运行模式</h1>
                        <Charts9/>
                    </div>
                    <div className="bordered line">
                        <h1>当日累计调控</h1>
                        <Charts10/>
                    </div>
                </section>
            </main>

        </VPContainer>
    );
};
