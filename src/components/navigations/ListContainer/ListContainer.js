import React from 'react'

import './ListContainer.modules.scss'
import FileList from '../../FileList/FileList'
import AddFileBox from '../../AddFileBox/AddFileBox'

const ListContainer = () => {
    return (
        <div style={{marginTop: 70}} >
            <div style={{padding:20}} >
                <AddFileBox />
            </div>
            <div style={{marginBottom: -8}} >
                <p style={{paddingLeft: 20, fontWeight: '600', color: '#0000003d'}} >All files</p>
            </div>
            <div className='main-list-container g-flex-ac' >
                <FileList />
            </div>
        </div>
    )
}

export default ListContainer