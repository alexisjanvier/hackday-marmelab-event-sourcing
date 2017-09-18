const Query = {
    Tasks: () => Tasks
};

const Tasks = [
    {
        id: 1,
        title:
            "Cas 8 - En tant que Cécile, je veux accéder à un écran d'accueil personnalisé pour le SCD, afin de pouvoir choisir une action à réaliser.",
        estimated_cost: 2,
        sprint_id: 1
    },
    {
        id: 2,
        title:
            'Cas 8 - En tant que Cécile, je veux accéder "Formulaire de dépôt de reprise du passif" afin de pouvoir déposer un mémoire au format PDF.',
        estimated_cost: null,
        sprint_id: 1
    },
    {
        id: 2,
        title: "Cas 9 - En tant que Gérard, je veux atteindre un lien PDF, afin consulter un mémoire d'ingénieur",
        estimated_cost: null,
        sprint_id: 2
    }
];

module.exports = {
    Query
};
