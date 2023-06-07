
# Infini sujet Dragons list

## CSS Responsive + inclusif 

* Utiliser l'outil d'intégration de votre choix pour réaliser une première maquette. 
Les couleurs et le design sont laissés à votre appréciation.


* Afficher la liste des Dragons sous forme de carte => 2 Dragons par ligne MAXIMUM.


* Utiliser des médias queries pour afficher 1 dragon par ligne sur mobile par exemple. 
* Les Grids CSS sont autorisées.
* Les Flexbox CSS sont autorisées.
* Les frameworks CSS sont INTERDITS.

=> Nom + Type ( Badge de couleur ) + un bouton "afficher les relations" => Qui affiche des minicartes avec le nom des dragons liés.


* Ajouter un systeme de filtre PAR TYPE, PAR NOM.

* Un formulaire d'ajout / Modification de dragon et de relation. ( pas de persistence de données )

=> Un formulaire en HTML avec des inputs et des boutons.


* Ajouter un systeme de pagination ( 2 dragons par page )


## Utilisation d'API

* Créer une API fictive avec JSON SERVER : 

````nodejs
npm install -g json-server
````

* Créer un fichier db.json avec la structure suivante : 

````json
{
  "dragons": [
    {
      "id": 1,
      "name": "Drogon",
      "type": "Feu",
      "relations": [2, 3, 4, 5, 6]
    },
    {
      "id": 2,
      "name": "Rhaegal",
      "type": "Eau",
      "relations": [1, 3, 7, 8, 9]
    },
    {
      "id": 3,
      "name": "Viserion",
      "type": "Terre",
      "relations": [1, 2, 10, 11, 12]
    },
    {
      "id": 4,
      "name": "Alexstrasza",
      "type": "Feu",
      "relations": [1, 5, 13, 14, 15]
    },
    {
      "id": 5,
      "name": "Deathwing",
      "type": "Terre",
      "relations": [4, 6, 16, 17, 18]
    },
    {
      "id": 6,
      "name": "Malygos",
      "type": "Eau",
      "relations": [1, 5, 19, 20, 21]
    },
    {
      "id": 7,
      "name": "Smaug",
      "type": "Feu",
      "relations": [2, 8, 22, 23, 24]
    },
    {
      "id": 8,
      "name": "Glaurung",
      "type": "Eau",
      "relations": [7, 9, 25, 26, 27]
    },
    {
      "id": 9,
      "name": "Ancalagon",
      "type": "Terre",
      "relations": [2, 8, 28, 29, 30]
    },
    {
      "id": 10,
      "name": "Gandarewa",
      "type": "Air",
      "relations": [45, 46, 47, 48, 49]
    }
  ]
}

````

* Lancer le serveur : 

````nodejs
json-server --watch db.json
````


* Utiliser l'API pour récupérer les données et les afficher dans l'application.
* Utiliser l'API pour ajouter des données et les afficher dans l'application.
* Utiliser l'API pour modifier des données et les afficher dans l'application.
* Utiliser l'API pour supprimer des données et les afficher dans l'application.
* Utiliser l'API pour ajouter des relations entre les dragons et les afficher dans l'application.
* Utiliser l'API pour supprimer des relations entre les dragons et les afficher dans l'application.
* Utiliser l'API pour modifier des relations entre les dragons et les afficher dans l'application.
* Utiliser l'API pour filtrer les dragons par type et les afficher dans l'application.


## Utilisation de l'APi Json-server : exemples

* Listes des routes : 
* GET http://localhost:3000/dragons
* GET http://localhost:3000/dragons/1
* POST http://localhost:3000/dragons

BODY : 
````json
{
  "name": "Drogon",
  "type": "Feu",
  "relations": [2, 3, 4, 5, 6]
}
````


* PUT http://localhost:3000/dragons/1

BODY : 
````json
{
  "name": "Drogon",
  "type": "Feu",
  "relations": [2, 3, 4, 5, 6]
}
````

* DELETE http://localhost:3000/dragons/1
* GET http://localhost:3000/dragons?name=drogon
* GET http://localhost:3000/dragons?type=feu
* GET http://localhost:3000/dragons?name=drogon&type=feu
* GET http://localhost:3000/dragons?_page=1&_limit=2
* GET http://localhost:3000/dragons?_page=1&_limit=2&_sort=name&_order=asc
* GET http://localhost:3000/dragons?_page=1&_limit=2&_sort=name&_order=desc
* GET http://localhost:3000/dragons?_page=1&_limit=2&_sort=name&_order=desc&type=feu
* GET http://localhost:3000/dragons?_page=1&_limit=2&_sort=name&_order=desc&type=feu&name=drogon


## Ajout d'utilisateurs

Maintenant que votre application est fonctionnelle, vous devez la rendre compatible avec le RGPD.

Il faut prévoir un formulaire d'inscription avec les champs suivants :

* Nom
* Prénom
* Email
* Mot de passe

Il faut prévoir un formulaire de connexion avec les champs suivants :

* Email
* Mot de passe





