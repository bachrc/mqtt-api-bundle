'use strict';

exports.sensorsModifyPOST = function(args, res, next) {
  /**
   * Modifie les informations d'un capteur
   * Lors de la mise en fonctionnement d'un capteur, on peut vouloir modifier ses informations dans la base de données, comme son emplacement, etc. Ce sont des données propres au capteur, qui ne dépendent pas des relevés. 
   *
   * id String L'identifiant du capteur
   * name String Le nouveau nom du capteur (optional)
   * location String La localisation du capteur (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "success" : true,
  "message" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.sensorsSearchGET = function(args, res, next) {
  /**
   * Liste des capteurs
   * Cette entrée d'API permet d'obtenir la liste des capteurs répondant à des critères de recherche comme spécifié dans la requête 
   *
   * after Date Les capteurs enregistrés après cette date. (optional)
   * before Date Les capteurs enregistrés avant cette date. (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "measures" : [ {
    "sensor_id" : "aeiou",
    "date" : "2000-01-23T04:56:07.000+00:00",
    "value" : "aeiou"
  } ],
  "name" : "aeiou",
  "location" : "aeiou",
  "id" : "aeiou",
  "type" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

