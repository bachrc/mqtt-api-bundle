/**
 * Created by Yohann Bacha on 02/02/17.
 */
let config = require('../config');

let Measure = require('../model/Measure');
let mongoose = require('mongoose');

function getMeasures({after, before}, res) {

    Measure.find( {
        date: {
            $gt: after || new Date(0),
            $lt: before|| Date.now()
        }
    }).
    limit(50).
    sort("-date").
    select("sensor_id date type value").
    exec((err, results) => {

    });
}