'use strict';

var Errors = require('../response/Error');
var Requests = require('./MongoRequests');

exports.sensorsSensor_idGET = function (args, res, next) {
    /**
     * Liste des mesures relevées par un capteur
     * Cette entrée d'API permet d'obtenir la liste des capteurs répondant à des critères de recherche comme spécifié dans la requête
     *
     * sensor_id String L'id du capteur pour lequel effectuer la recherche
     * after Date Les capteurs enregistrés après cette date. (optional)
     * before Date Les capteurs enregistrés avant cette date. (optional)
     * limit Integer La limite de résultats renvoyés (optional)
     * returns List
     **/
    var examples = {};
    examples['application/json'] = [{
        "measures": [{
            "sensor_id": "aeiou",
            "date": "2000-01-23T04:56:07.000+00:00",
            "value": "aeiou"
        }],
        "name": "aeiou",
        "location": "aeiou",
        "id": "aeiou",
        "type": "aeiou"
    }]; /*
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(args || {}, null, 2));
    } else {
        res.end();
    } */

    if(typeof args.sensor_id.value === "undefined") {
        res.end(Errors.error(1, "Champ nécessaire manquant", ["sensor_id"]));
    } else {
        Requests.getMeasures(args, res);
    }
};

exports.sensorsSensor_idModifyPOST = function (args, res, next) {
    /**
     * Modifie les informations d'un capteur
     * Lors de la mise en fonctionnement d'un capteur, on peut vouloir modifier ses informations dans la base de données, comme son emplacement, etc. Ce sont des données propres au capteur, qui ne dépendent pas des relevés.
     *
     * sensor_id String L'identifiant du capteur
     * name String Le nouveau nom du capteur (optional)
     * location String La localisation du capteur (optional)
     * returns List
     **/

    var examples = {};
    examples['application/json'] = [{
        "success": true,
        "message": "aeiou"
    }];
    if(typeof args.sensor_id.value === "undefined") {
        res.end(Errors.error(1, "Champ nécessaire manquant", ["sensor_id"]));
    } else {
        Requests.modifySensor(args, res);
    }
};

