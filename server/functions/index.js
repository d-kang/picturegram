const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { databaseURL } = require('./secret/firebaseConfig');


admin.initializeApp(functions.config().firebase);
const db = admin.database();
const ref = db.ref('graphql/hello');

admin.database().ref().remove
/* gql */
const typeDefs = `
  type Query {
    hi: String!
    hello(msg: String): String!
  }
`;

db.ref('users/').on('value', data => console.log('user added:', data.val()));
// const findOne = _.ref('users').child('2')


const resolvers = {
  Query: {
    async hi(_, args, context, info) {
      // _.ref('graphql/hello').remove()


      // must somehow dynamically set key
      // await _.ref('/users/2').set({id: 'h2'});

      await _.ref('users/2').update({id: 'h4', somekey: 'foo'});



      return 'helloooo!!!';
    },
    hello(_, args, context, info) {
      console.log({_})
      return args.msg;
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

/* express */
const app = express();
app.use(bodyParser.json())

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: db,
}));

exports.api = functions.https.onRequest(app);


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
