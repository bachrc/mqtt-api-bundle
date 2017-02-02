let mongo = "mongodb://mongodb:27017/InternetOfStuff";

if(typeof process.env.SENSORS_TO_DB_DB !== "undefined"){
    mongo = process.env.SENSORS_TO_DB_DB;
}

module.exports = {
    mongoAddress: mongo
};