const fileStatus = {
    UPLOADING: 'uploading',
    DONE: 'done'
}

const serverUrl = 'http://localhost:3000';

const LOCAL_STORAGE_LABLES = {
    TOKEN: 'TOKEN'
}

const notifyMsgs = {
    LOGIN_MSG: 'Welcome back user',
    DELETE_MSG: 'File deleted successfully',
    RENAME_MSG: 'File renamed successfully',
    DOWNLOADED_MSG: 'File downloaded successfully',
    COMMON_ERR: 'Something went wrong!',
    INVALID_ACTI_URL: 'Invalid activation URL',
    ACTIVATED_MSG: 'Your account is now activated'
}

export {
    fileStatus,
    serverUrl,
    LOCAL_STORAGE_LABLES,
    notifyMsgs
}