const fileStatus = {
    UPLOADING: 'uploading',
    DONE: 'done'
}

const serverUrl = 'http://localhost:3001';

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
    ACTIVATED_MSG: 'Your account is now activated',
    WRONG_PASS: 'Incorrect Password',
    NO_USER_FOUND: 'No such user found!',
    UNVERIFIED_EMAIL: 'Your account is not verified yet',
    FORGOT_PASS_REQ_SENT: 'Password reset email sent',
    EMAIL_NOT_FOUND: 'Email address not found',
    INVALID_PASS_RESET_URL: 'Invalid password reset url',
    PASS_RESET_SUCCESS: 'Password changed successfully'
}

const routes = {
    APP: '/',
    EDIT_PROFILE: '/edit/profile',
    AUTH: '/auth'
}

export {
    fileStatus,
    serverUrl,
    LOCAL_STORAGE_LABLES,
    notifyMsgs,
    routes
}