import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';

export const Home = () => {

    const {clientWidth, clientHeight} = document.documentElement
    const pageWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * 16 / 9 : clientWidth
    const pageHeight = pageWidth * 9 / 16

    let html = document.querySelector('html')
    html.style.fontSize=pageWidth/100 + 'px'

    return (
        <div className='container'>
            <div className='page' style={{width: pageWidth, height: pageHeight}}>
                <header className="header" style={{backgroundImage:`url(${headerBg})`}}>
                </header>
            </div>
        </div>
    );
};
