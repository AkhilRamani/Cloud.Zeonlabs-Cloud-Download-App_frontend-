import React from 'react'

import './button.utility.scss'
import {Spinner} from '../'

export const Button = ({name, color, style, loading, disabled, ...rest}) => <button
    className={'btn-utl'}
    style={{
        backgroundColor: color || '#FDD235',
        ...style
    }}
    {...rest}
    disabled={loading || disabled || null}
>{loading ? <Spinner style={{paddingTop: 3.5}} size={23} /> : name}</button>