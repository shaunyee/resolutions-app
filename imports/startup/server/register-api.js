import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';


import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

const typeDefs = [
testSchema,
ResolutionsSchema
];

const resolvers = {
  Query: {
    hi() {
      return "Hello Shaun";
    },
    resolutions() {
      return [
        {
          _id: "fffffff",
          name: "Lose Some Weight!"
        },
        {
          _id: "sdfsffsfddsfgsdff",
          name: "Get Stuff Done!"
        }
      ]
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema });
