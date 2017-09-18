const { Query: UserQuery } = require('./user/resolvers');
const { Query: SprintQuery } = require('./sprint/resolvers');
const { Query: TaskQuery } = require('./task/resolvers');
const { Query: PlanningPockerQuery, Mutation: PlanningPockerMutation } = require('./planningPocker/resolvers');

module.exports = {
    Query: Object.assign({}, UserQuery, SprintQuery, TaskQuery, PlanningPockerQuery),
    Mutation: Object.assign({}, PlanningPockerMutation)
};
