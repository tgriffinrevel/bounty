import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin, {
  isDisabled: true,

  actions: {
    submitMatch(match){
      match.set('p1', 'what');
      alert(match.get('p1'));
      this.get('store').saveMatch(match);
      this.transitionTo('index');
    }
  },
  model(){
    const store = this.get('store');
    let match = store.newMatch();
    store.find('league', 47);
    let players = store.peekAll('player');
    console.log(players);

    return {
      "p1_list": players,
      "match": match,
      "result": null,
    };
  },

  store: Ember.inject.service()
});

