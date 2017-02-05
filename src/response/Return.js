function Return (success, message)  {
    return JSON.stringify({
        sucess : success,
        message: message
    });
}

module.exports = {
    return : Return
};