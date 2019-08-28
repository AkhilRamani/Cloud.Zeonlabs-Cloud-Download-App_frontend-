import React from "react";
import {connect} from 'react-redux'

import './DriveInfo.styles.scss'
import {formatBytes, formatPercentage} from '../../Utils/utils'
import {ProgressBar} from '../utility'

const RowSpace = <td style={{height: 8}} />

const DriveInfo = (props) => {
    const {storage} = props.user
    return props.user.storage ?
        (
            <div>
                <div className='dinfo-progress-div' >
                    <h4 className='g-roboto dinfo-progress-text' >{formatPercentage(storage.used, storage.space)}% used</h4>
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
        <h4>Loading...</h4>
}

const mapStateToProps = state => state.user

export default connect(mapStateToProps, null)(DriveInfo)