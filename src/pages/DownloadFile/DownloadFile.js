import React from 'react'
import {Link} from 'react-router-dom'

import './DownloadFile.styles.scss'
import Header from '../../components/navigations/header/Header'
import { HeaderBottomSpace } from '../../components/navigations/header/HeaderBottomSpace'
import FileInfo from './FileInfo/FileInfo.DF'
import { Button } from '../../components/utility'
import { ToTheMoonIcon } from '../../components/icons/illustrations'
import { routes } from '../../common/constants'

const DownloadFile = () => {
    return (
        <div className='df-main'>
            <Header />
            <HeaderBottomSpace />

            <div className='g-flex df-data-container' style={{height: 'calc(100% - 71px)'}} >
               <div style={{flexGrow: 1}} >
                    <div className='df-wb g-round-corner g-flex-ac'>
                        <FileInfo />
                    </div>
                </div>

                <div className='df-botm-box g-flex' >
                    <div className='df-botm-r-box g-round-corner g-flex-ac' >
                        <ToTheMoonIcon />
                        <div className='detail-div g-flex' >
                            <>
                                <h3 className='g-roboto' >New to Zeonlabs?</h3>
                                <p className='g-roboto detail-txt'>Sign up now to get <font className='onegb-txt' >1GB</font> free Snadbox <font >Cloud Download</font> Space.</p>
                            </>
                            <Link to={routes.AUTH}><Button name='Sign up' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadFile;