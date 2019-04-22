var Heros = require('./heros.contoller');

module.exports = function(router) {
    router.post('/', Heros.createHero); // To create a Hero
    router.get('/', Heros.getHeros); // To get a Hero
    router.get('/:id', Heros.getHero); // To get a Hero
    router.put('/:id', Heros.updateHero); // To update a Hero details
    router.delete('/:id', Heros.removeHero); // To remove a Hero
}