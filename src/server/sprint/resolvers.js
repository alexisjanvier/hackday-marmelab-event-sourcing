const Query = {
    Sprints: () => Sprints
};

const Sprints = [
    {
        id: 1,
        start_date: '2017-09-20',
        end_date: '2017-10-03',
        estimated_velocity: '30'
    },
    {
        id: 2,
        start_date: '2017-10-04',
        end_date: '2017-10-17',
        estimated_velocity: '10'
    },
    {
        id: 3,
        start_date: '2017-10-18',
        end_date: '2017-11-01',
        estimated_velocity: '20'
    }
];

module.exports = {
    Query
};
