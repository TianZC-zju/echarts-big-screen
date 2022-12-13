import React from 'react';
import classnames from 'classnames'
import px from '../../shared/px';
import './index.scss'


const VPBorderBox: React.FC<{title: string, className?: string }> = ({title, children,className})=>{

    return(
        <div className={classnames('bordered', className)} style={{marginBottom:px(10)}}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}


export default VPBorderBox;