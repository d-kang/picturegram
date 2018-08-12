import { ApolloServer, gql } from 'apollo-server';
import { resolve } from 'url';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const typeDefs = gql`
  type Query {
    hi: String!
    hello(msg: String): String!
  }
`;

const resolvers = {
  Query: {
    hi: () => 'hello',
    hello(_, args, context, info) {
      return args.msg;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 5100;

server.listen(PORT)
  .then(() => console.log(`Server started! http://localhost:${PORT}`));