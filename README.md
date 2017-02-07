# MQTT API Bundle

Ce bundle permet, d'une simple commande, de créer une infrastucture composée d'un broker MQTT,
d'un simulateur de capteurs, d'une base de données Mongodb, d'une passerelle entre la base de
données et le broker, une API REST interfaçant la base de données, ainsi que d'une application
afin d'interfacer le tout.

### Téléchargement et exécution

Afin de lancer la structure, vous allez nécessiter Docker, ainsi que docker-compose. Vous pouvez trouver des 
instructions d'installation via [ce lien.](https://www.docker.com/products/docker). 

Une fois votre acquisition faite, ouvrez votre terminal :

```bash
git clone https://github.com/bachrc/mqtt-api-bundle
cd mqtt-api-bundle
docker-compose up
```

Prenez un café le temps que Docker télécharge et construise les images. Votre bundle est maintenant prêt à l'emploi, 
et accessible à l'adresse suivante : (http://localhost:8080)

### L'interface Websocket

Sélectionnez `Websocket` sur la Navbar supérieure, et entrez l'adresse du broker : `http://localhost:8081`. 

L'application vous affiche désormais dynamiquement les capteurs, ainsi que leurs fluctuations de valeur, et ce en temps 
réel.

### L'interface REST

Sélectionnez `Static` sur la Navbar supérieure afin d'accéder à la partie du logiciel traitant avec l'API REST
du bundle.

S'affichent devant vous les capteurs répertoriés dans la base de données. En cliquant dessus, vous obtenez donc les 
informations du capteur, avec la possibilité de modifier de nom et la localisation de ces derniers, en appuyant sur
`Entree` pour soumettre votre changement. Le champ se colorera en fonction du succès de l'opération.

Vous avez également accès à la liste des mesures enregistrées pour ce capteur, en déroulant le panel ci-dessous. Vous
pouvez filtrer les dates d'arrivées des capteurs afin d'obtenir les informations que vous souhaitez.


### API Endpoints
<table><tr><td>Path</td><td>Method</td><td>Summary</td></tr><tr><td>/sensors</td><td>GET</td><td>Liste des capteurs recensés</td></tr><tr><td>/sensors/{sensor_id}</td><td>GET</td><td>Liste des mesures relevées par un capteur</td></tr><tr><td>/sensors/{sensor_id}/modify</td><td>POST</td><td>Modifie les informations d'un capteur</td></tr></table>