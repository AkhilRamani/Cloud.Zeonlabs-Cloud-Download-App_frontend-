import React from 'react'
import Header from '../../components/navigations/header/Header'

import './DownloadFile.styles.scss'
import { HeaderBottomSpace } from '../../components/navigations/header/HeaderBottomSpace'
import FileInfo from './FileInfo/FileInfo.DF'
import { Label } from '../../components/utility'

const DownloadFile = () => {

    return (
        <div className='df-main'>
            <Header />
            <HeaderBottomSpace />

            <div className='g-flex df-data-container' style={{height: 'calc(100% - 71px)'}} >
                <div style={{flexGrow: 1}} >
                    <div className='df-wb g-round-corner g-flex-ac '>
                        <FileInfo />
                    </div>
                </div>

                <div className='df-botm-box' >
                    <h3 className='g-roboto' >New to zeonlabs?</h3>
                    <Label title='1 GB Sandbox' />
                </div>
            </div>
        </div>
    )
}

export default DownloadFile