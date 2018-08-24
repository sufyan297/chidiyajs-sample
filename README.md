# ChidiyaJS Sample
- Getting started guide for chidiyaJS
- First of all you have to add scoped registry (i.e @ascendtis) to your npmrc.
- npm config set @ascendtis:registry http://npm.sufyan.co.in

## Installation Instructions
- clone this repository on your machine and just do `npm install` or `yarn` inside cloned repo folder/directory.
- create folder/directory `tmp/sessions` inside the cloned repo folder/directory.
- change the database settings from config/database.js
- create new database with any name in our case we have created `news`.
- copy create table ddl statements from `models/user/schema.js` and `models/address/schema.js` and execute it using mysql command line or phpMyAdmin or any other tools which you are using it.
- Now you are ready to start the server with `npm run local` or `yarn local`

## Scaffolding API
- By default ChidiyaJS will create ready made API for CRUD operations.
  * CREATE/INSERT => Route - /:modelName/create
  - So in our case it will generate `/User/create` and `/Address/create`.
  - Example:
    Method: POST
    Route: http://localhost:3000/User/create
    Body: (application/json)
    `{
      "input": {
        "name":"Mohammed Sufyan",
        "age": 24,
        "username": "Sufyan",
        "password": "123456"
      }
    }`


  * UPDATE => Route - /:modelName/update
  - Example:
    Method: POST
    Route: http://localhost:3000/User/update
    Body: (application/json)
    `{
      "input": {
        "name":"Mohammed Sufyan",
        "age": 24,
        "username": "Sufyan297",
        "password": "123456"
      },
      "where":{
        "id": "fe634ee8-02d4-466e-8b39-ca3e81a58a8a"
      }
    }`

    * DELETE => Route - /:modelName/delete
    - Example:
      Method: POST
      Route: http://localhost:3000/User/delete
      Body: (application/json)
      `{
        "where":{
          "id": "fe634ee8-02d4-466e-8b39-ca3e81a58a8a"
        }
      }`

      * QUERY/RETRIEVE => Route - /:modelName/query
      - Example:
        Method: POST
        Route: http://localhost:3000/User/query
        Body: (application/json)
        `{
          "find":{
            "where": {
              "name": "Mohammed Shaikh"
            },
            "select": ["name","username","age"],
            "relations": ["addresses"]
          }
        }`