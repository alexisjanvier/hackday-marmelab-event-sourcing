const fs = require('fs');
const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

const KafkaRestClient = require('kafka-rest-client');
const kafkaRestClientOptions = {
    proxyHost: 'localhost',
    proxyPort: 2181
};

const kafkaRestClient = new KafkaRestClient(kafkaRestClientOptions, error => console.log(error));
kafkaRestClient.connect(error => console.log(error));

const schemaFile = path.join(__dirname, 'schema.graphql');
const typeDefs = fs.readFileSync(schemaFile, 'utf8');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers });
var app = express();
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
        context: { kafkaRestClient }
    })
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
