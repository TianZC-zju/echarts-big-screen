import React from 'react';
import './home.scss';

export const Home = () => {

    const {clientWidth, clientHeight} = document.documentElement
    const pageWidth = clientWidth/clientHeight > 16/9? clientHeight*16/9:clientWidth
    const pageHeight = pageWidth *9 / 16
  return (
      <div className='container'>
          <div className='page' style={{width:pageWidth,height:pageHeight}}>
              你好
          </div>
      </div>
  );
};
