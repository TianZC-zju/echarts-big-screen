import React from 'react';
import VPContainer from '../../components/container';
import './index.scss'
import VPBorderBox from '../../components/borderBox';

const Resource = () => {

    return(
<VPContainer>
    <div className='container-page'>
        <section className="section1">
            <VPBorderBox title='模块1'>aa</VPBorderBox>
        </section>
        <section className="section2">
            <VPBorderBox title='模块2'>aa</VPBorderBox>
        </section>
        <section className="section3">
            <VPBorderBox title='模块3'>aa</VPBorderBox>

        </section>
        <section className="section4">
            <VPBorderBox title='模块4'>aa</VPBorderBox>

        </section>
        <section className="section5">
            <VPBorderBox title='模块5'>aa</VPBorderBox>

        </section>
        <section className="section6">
            <VPBorderBox title='模块6'>aa</VPBorderBox>

        </section>
        <section className="section7">
            <VPBorderBox title='模块7'>aa</VPBorderBox>

        </section>
    </div>
</VPContainer>
)

}

export default Resource;
