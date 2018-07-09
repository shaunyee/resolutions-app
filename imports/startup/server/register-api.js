import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import GoalsSchema from "../../api/goals/Goal.graphql";
import UsersSchema from "../../api/users/User.graphql";
import ResolutionsResolvers from "../../api/resolutions/resolvers";
import GoalsResolvers from "../../api/goals/resolvers";
import UsersResolvers from "../../api/users/resolvers";

//his


const typeDefs = [
  ResolutionsSchema,
  UsersSchema,
  GoalsSchema
];

const resolvers = merge(ResolutionsResolvers, UsersResolvers, GoalsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
