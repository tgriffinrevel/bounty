import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    const store = this.get('store');
    return {"player": store.peekRecord('player', params.player_id)};
  },
  store: Ember.inject.service()
});
