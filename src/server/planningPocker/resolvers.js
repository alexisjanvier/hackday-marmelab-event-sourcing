const Query = {
    PlanningPocker: id => PlanningPocker
};

const Mutation = {
    createPlanningPocker: id => PlanningPocker
};

const PlanningPocker = {
    id: 1,
    sprint_id: 1,
    owner: { id: 1, username: 'Yann', email: 'yann@marmelab.com' },
    attendees: [{ id: 2, username: 'Gildas', email: 'gildas@marmelab.com' }, { id: 3, username: 'Alexis', email: 'alexis@marmelab.com' }]
};

module.exports = {
    Query,
    Mutation
};
