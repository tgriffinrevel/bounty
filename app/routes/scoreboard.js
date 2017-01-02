import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    let store = this.get('store');
    return store.find('league', 47);
  },
  store: Ember.inject.service()
});
