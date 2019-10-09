import React from 'react'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'
import { HeaderBottomSpace } from './header/HeaderBottomSpace'


export const HeaderSidebarWrapper = ({children}) => (
    <>
        <Header authenticated />
        <HeaderBottomSpace />

        <div className='g-main-container' >
            <Sidebar />
            {/* <> */}
                {children}
            {/* </> */}
        </div>
    </>
)