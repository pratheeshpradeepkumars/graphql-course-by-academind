# GraphQL

Alternate to REST API
Stateless
Client independent API for exchanging data with higher query flexibility


{
    query{ -> Operation type (Other types: mutation, subscription)
        user{ -> Operation endpoint
            name -> Requested fields
            age
        }
    }
}

**Operation types

Query - Retrieve data (GET)
Mutation - Manipulate data (POST, PUT, PATCH, DELETE)
Subscription - Set up realtime connections via websockets

Resolvers - Server side logic


npm init
npm i --save express  body-parser
npm i --save-dev nodemon
npm i --save express-graphql  graphql
npm i --save mongoose

create app.js

#5