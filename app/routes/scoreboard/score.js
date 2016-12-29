import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    const store = this.get('store');
    return {"player": store.getPlayerById(params.player_id)};
  },
  store: Ember.inject.service()

});
