const fileStatus = {
    UPLOADING: 'uploading',
    DONE: 'done',
    FAILED: 'failed'
}

// const serverUrl = 'http://localhost:3001';
const serverUrl = 'https://zeon-cloud.herokuapp.com'

const LOCAL_STORAGE_LABLES = {
    TOKEN: 'TOKEN'
}

const notifyMsgs = {
    LOGIN_MSG: 'Welcome back user',
    DELETE_MSG: 'File deleted successfully',
    RENAME_MSG: 'File renamed successfully',
    DOWNLOADED_MSG: 'File downloaded successfully',
    DOWNLD_FAILED: 'File downloading failed',
    EDIT_PROFILE_SUCCESS: 'Profile updated',
    PASS_RESET_SUCCESS: 'Password changed successfully',
    PASS_LENGTH_ERR: 'Password must be 8 characters long',
    FORGOT_PASS_REQ_SENT: 'Password reset email sent',
    
    COMMON_ERR: 'Something went wrong!',
    INVALID_ACTI_URL: 'Invalid activation URL',
    ACTIVATED_MSG: 'Your account is now activated',
    WRONG_PASS: 'Incorrect Password',
    NO_USER_FOUND: 'No such user found!',
    UNVERIFIED_EMAIL: 'Your account is not verified yet',
    EMAIL_NOT_FOUND: 'Email address not found',
    INVALID_PASS_RESET_URL: 'Invalid password reset url',
    PASS_NOT_MATCH: 'Password does not match',

    FILE_SIZE_GREATER_200MB: 'Could not process, file size is more then 200MB',
    INVALID_FILE_URL: 'Invalid url to proceed',
    FILE_NO_FOUND: 'File not found or unprocessable',
    NO_STORG_SPACE: 'insufficient storage space to download'
}

const routes = {
    APP: '/',
    EDIT_PROFILE: '/edit/profile',
    AUTH: '/auth',
    DOWNLD_FILE: '/file=share/:id',
    T_AND_C: '/tandc',
    ACTIVATE_ACCOUNT: '/activate/:uuid',
    RESET_PASS: '/reset/pass/:uuid',
    FORGOT_PASS: '/req=reset-pass'
}

export {
    fileStatus,
    serverUrl,
    LOCAL_STORAGE_LABLES,
    notifyMsgs,
    routes
}