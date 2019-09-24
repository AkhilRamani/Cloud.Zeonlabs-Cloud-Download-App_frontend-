import React from "react";
import {connect} from 'react-redux'

import './DriveInfo.styles.scss'
import {formatBytes, formatPercentage} from '../../Utils/utils'
import {ProgressBar, Label} from '../utility'

const RowSpace = <td style={{height: 8}} />

const DriveInfo = (props) => {
    const {storage} = props.user
    return props.user.storage ?
        (
            <div className='dinfo-container' >
                <div className='dinfo-progress-div' >
                    <div className='g-flex-ac' style={{paddingBottom: 8}} >
                        <Label title={formatPercentage(storage.used, storage.space) + '%'} />
                        <h4 className='g-roboto dinfo-progress-text' >&nbsp;Used</h4>
                    </div>
                    <ProgressBar progress={formatPercentage(storage.used, storage.space)} />
                </div>
                <div className='dinfo-conatiner' >
                    <table>
                        <tbody>
                        <tr>
                            <td className='dinfo-label' >Total space</td>
                            <td className='dinfo-val' >{formatBytes(storage.space)}</td>
                        </tr>
                        <tr>{RowSpace}</tr>
                        <tr>
                            <td className='dinfo-label' >Used space</td>
                            <td className='dinfo-val' >{formatBytes(storage.used)}</td>
                        </tr>
                        <tr>{RowSpace}</tr>
                        <tr>
                            <td className='dinfo-label' >Available space</td>
                            <td className='dinfo-val' >{formatBytes(storage.space - storage.used)}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
        :
        // <h4>Loading...</h4>
        <div className='sclton-sidebar'>
            <div className='g-sklton-line g-skltn-bg-color g-round-corner' style={{height: 20, width: 80}} />
            <div className='g-sklton-line g-skltn-bg-color g-round-corner' style={{height: 20}} />
            <div className='g-sklton-line g-skltn-bg-color g-round-corner' />
            <div className='g-sklton-line g-skltn-bg-color g-round-corner'/>
            <div className='g-sklton-line g-skltn-bg-color g-round-corner'/>
        </div>
}

const mapStateToProps = state => state.user

export default connect(mapStateToProps, null)(DriveInfo)