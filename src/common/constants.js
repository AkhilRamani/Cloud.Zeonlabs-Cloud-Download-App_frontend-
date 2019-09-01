const fileStatus = {
    UPLOADING: 'uploading',
    DONE: 'done'
}

const serverUrl = 'http://localhost:3000';

const LOCAL_STORAGE_LABLES = {
    TOKEN: 'TOKEN'
}

const notifyMsgs = {
    DELETE_MSG: 'File deleted successfully',
    RENAME_MSG: 'File renamed successfully',
    DOWNLOADED_MSG: 'File downloaded successfully',
    COMMON_ERR: 'Something went wrong!'
}

export {
    fileStatus,
    serverUrl,
    LOCAL_STORAGE_LABLES,
    notifyMsgs
}