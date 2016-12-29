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
    let p1_list = store.getPlayers();
    return {
      "p1_list": p1_list,
      "match": match,
      "result": null,
    };
  },

  store: Ember.inject.service()
});

