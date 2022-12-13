import headerBg from '../../images/header1.png';
import React from 'react';
import './index.scss'

const VPHeader = ()=>{

    return(
        <div className="header" style={{backgroundImage:`url(${headerBg})`}}>
            <div className="headerLeft">
                <span>资源管理</span>
                <span>负荷预测</span>
            </div>
            <div className='headerCenter'>虚拟电厂</div>
            <div className="headerRight">
                <span>运行效果</span>
            </div>
        </div>
    )
}

export default VPHeader;