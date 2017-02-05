let mongo = "mongodb://localhost:27017/test";

if(typeof process.env.SENSORS_TO_DB_DB !== "undefined"){
    mongo = process.env.SENSORS_TO_DB_DB;
}

module.exports = {
    mongoAddress: mongo
};