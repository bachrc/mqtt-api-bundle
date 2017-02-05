/**
 * Created by Yohann Bacha on 02/02/17.
 */
let Errors = require('../response/Error');

let config = require('../config');

let Measure = require('../model/Measure');
let mongoose = require('mongoose');

function getMeasures (args, res) {
    let borne_inferieure = Date.parse(args.after.value) || new Date(0);
    let borne_superieure = Date.parse(args.before.value) || Date.now();
    let limit = parseInt(args.limit.value) || 50;

    if(borne_inferieure >= borne_superieure) {
        res.end(Errors.error(2, "Erreur : les dates de filtre sont invalides.", ["before", "after"]))
    }

    Measure.find().
    limit(limit).
    sort("-date").
    select("sensor_id date type value").
    exec((err, results) => {
        res.end("Dates : " + borne_inferieure + " - " + borne_superieure + "\nTest :" + JSON.stringify(results) + "Erreur : " + JSON.stringify(err));
    });
}

module.exports = {
    getMeasures : getMeasures
};