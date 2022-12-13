import VPHeader from '../header';
import VPFooter from '../footer';
import React  from 'react';
import './index.scss'

type MonkeyWindow =  Window & typeof globalThis &{
    pageWidth: number,
    pageHeight: number,
}
const {pageWidth, pageHeight} =  window as MonkeyWindow

const VPContainer: React.FC = ({children})=>{

    return(
        <div className='container'>
            <div className='page' style={{width: pageWidth, height: pageHeight}}>
                <VPHeader/>
                {children}
                <VPFooter/>
            </div>
        </div>

    )
}
export default VPContainer;