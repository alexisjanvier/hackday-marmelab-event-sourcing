const fs = require('fs');
const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

const schemaFile = path.join(__dirname, 'schema.graphql');
const typeDefs = fs.readFileSync(schemaFile, 'utf8');

const schema = makeExecutableSchema({ typeDefs });
var app = express();
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
