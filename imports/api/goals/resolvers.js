
import Goals from "./goals";

export default {

  Mutation: {
    createGoal(obj, { name, resolutionId, userId }) {
      const goalId = Goals.insert({
        name,
        resolutionId,
        completed: false
      });
      return Goals.findOne(goalId);
    },
    toggleGoal(obj, { _id }) {
      if(userId){
      const goal = Goals.findOne(_id);
      Goals.update(_id, {
        $set: {
          completed: !goal.completed
        }
      });
      return Goals.findOne(_id);
    }
    throw new Error("Unauthorized");
    }
  }
};
