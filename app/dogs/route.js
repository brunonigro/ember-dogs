import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            race: 'Beagle',
            color: 'default'
        }, {
            race: 'Chiuaua',
            color: 'black'
        }, {
            race: 'Dobermann',
            color: 'gold'
        }];
    }
});
