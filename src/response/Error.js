function Error (errorCode, message, fields)  {
    return JSON.stringify({
        errorCode : errorCode,
        message: message,
        fields: fields
    });
}

module.exports = {
    error : Error
};