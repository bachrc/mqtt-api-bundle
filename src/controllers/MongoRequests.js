/**
 * Created by Yohann Bacha on 02/02/17.
 */
let Errors = require('../response/Error');
let Returns = require('../response/Return');

let config = require('../config');

let Measure = require('../model/Measure');
let mongoose = require('mongoose');

function getMeasures (args, res) {
    let borne_inferieure = Date.parse(args.after.value) || new Date(0);
    let borne_superieure = Date.parse(args.before.value) || new Date(Date.now() + 1000 * 60 * 60);
    let sensor_id = args.sensor_id.value;
    let limit = parseInt(args.limit.value) || 50;

    if(borne_inferieure >= borne_superieure) {
        res.end(Errors.error(2, "Erreur : les dates de filtre sont invalides.", ["before", "after"]));
    }

    if(!sensor_id) {
        res.end(Errors.error(4, "Argument du sensor_id manquant.", "sensor_id"));
    }

    doesSensorsExists(sensor_id, () => {
        res.end(Errors.error(6, "Sensor inexistant.", "sensor_id"));
    });

    Measure.find({
        date: {
            $gt: borne_inferieure,
            $lt: borne_superieure
        },
        sensor_id: sensor_id
    }).
    limit(limit).
    sort("-date").
    select("sensor_id date type value").
    exec((err, results) => {
        if(err) {
            res.end(Errors.error(3, "Erreur lors de la requête vers la base de données : \n" + JSON.stringify(err, null, 4)));
        } else {
            res.end(JSON.stringify(results, null, 4));
        }
    });
}

function doesSensorsExists(sensor_id, callbackNo, callbackYes = () => {}) {
    Sensor.count({
        sensor_id: sensor_id
    }, (err, count) => {
        if(count > 0) {
            callbackYes();
        } else {
            callbackNo();
        }
    })
}

function modifySensor(args, res) {
    let sensor_id = args.sensor_id.value;
    let update = {};

    if(!sensor_id) {
        res.end(Errors.error(4, "Argument du sensor_id manquant.", "sensor_id"));
    }

    doesSensorsExists(sensor_id, () => {
        res.end(Errors.error(6, "Sensor inexistant.", "sensor_id"));
    });

    if(!args.name.value && !args.location.value) {
        res.end(Errors.error(5, "Veuillez renseigner au moins un élément à modifier.", ""));
    } else {
        if(args.name.value)
            update.name = args.name.value;

        if(args.location.value)
            update.location = args.location.value;
    }

    Sensor.update({sensor_id : sensor_id}, update, {multi : false}, (err, numAffected) => {
        if(err) {
            res.end(Errors.error(3, "Erreur lors de la requête vers la base de données : \n" + JSON.stringify(err, null, 4)));
        } else {
            if(numAffected == 0) {
                res.end(Returns.return(false, "La mise à jour n'a pas eu lieu."))
            } else {
                res.end(Returns.return(true, "La mise a jour a été effectuée."))
            }
        }
    })
}

module.exports = {
    getMeasures : getMeasures,
    modifySensor : modifySensor
};