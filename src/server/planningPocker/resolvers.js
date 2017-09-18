const Query = {
    PlanningPocker: id => PlanningPocker
};

const Mutation = {
    createPlanningPocker: (root, { sprintId, ownerId, attendees }, { kafkaRestClient }) => {
        console.log('SPRINT ID: ', sprintId);
        console.log('OWNER ID: ', ownerId);
        console.log('attendees: ', attendees.split(','));

        kafkaRestClient.produce(
            'hackday',
            JSON.stringify({
                event: 'planningPockerCreated',
                data: {
                    sprintId,
                    ownerId,
                    attendees: attendees.split(',')
                }
            }),
            error => console.log(error)
        );

        return PlanningPocker;
    }
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
