function Return (success, message)  {
    return JSON.stringify({
        success : success,
        message: message
    });
}

module.exports = {
    return : Return
};