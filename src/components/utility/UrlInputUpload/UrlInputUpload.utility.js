import React from 'react'

import './urlInputUpload.utility.scss'
import {Spinner} from '..'

export const UrlInputUpload = ({loading, onChange, onSubmit, value}) => (
    <div style={{paddingBottom: 0}} >
        <div className='g-flex-ac uiu-main-div' >
            <input
                className='uiu-input'
                placeholder='Enter file URL to download in cloud'
                type='text'
                onChange={onChange}
                value={value}
                />
            <button 
                onClick={onSubmit}>
                {loading ? <Spinner size={26} /> : 'Add'}
            </button>
        </div>     
    </div>
)