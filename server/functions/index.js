const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');


const app = express();

admin.initializeApp(functions.config().firebase);
const db = admin.database();
const ref = db.ref('poll');

const typeDefs = `
  type Query {
    hi: String!
    hello(msg: String): String!
  }
`;

const resolvers = {
  Query: {
    hi: () => 'hello!',
    hello(_, args, context, info) {
      console.log({ _, args, context, info })
      return args.msg;
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,

});

app.use(bodyParser.json())



app.use('/', graphqlHTTP({ schema, graphiql: true }));

exports.api = functions.https.onRequest(app);


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
