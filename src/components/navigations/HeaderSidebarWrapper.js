import React from 'react'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'


export const HeaderSidebarWrapper = ({children}) => (
    <>
        <Header />
        <div className='g-main-container' >
            <Sidebar />
            <div style={{marginTop: 71}} >
                {children}
            </div>
        </div>
    </>
)