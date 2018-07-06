import Resolutions from './resolutions';

// Resolutions.insert({
//   name: "test Res"
// });

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  },

  Mutation: {
    createResolution() {
      console.log("Got Here!");
      // const resolutionId = Resolutions.insert({
      //   name: "test Res"
      // });
    }
  }
};
