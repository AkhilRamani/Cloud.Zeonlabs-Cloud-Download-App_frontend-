import React from 'react'
import Header from '../../components/navigations/header/Header'

import './DownloadFile.styles.scss'
import { HeaderBottomSpace } from '../../components/navigations/header/HeaderBottomSpace'
import FileInfo from './FileInfo/FileInfo.DF'

const DownloadFile = () => {

    return (
        <div className='df-main' >
            <Header />
            <HeaderBottomSpace />

            <div className='df-wb g-round-corner g-flex-ac ' >
                <FileInfo />
            </div>
        </div>
    )
}

export default DownloadFile