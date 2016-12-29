import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    const store = this.get('store');
    // console.log(Ember.$.getJSON("/league/47"));
    store.queryRecord('league', 47).then(function(league){
      console.log(league);
      store.push(league.data);
    });

    // const store = this.get('store');
    // let model = this;
    // let players = store.findRecord('league', 47).then(function (league) {
    //   console.log(league);
    //   store.setPlayers(league);
    //   if (players == {}){
    //     model.refresh();
    //   }
    // }, function (error) {
    //   console.log("Error: ");
    //   console.log(error);
    // });
    //
    // return {"players": players};
  },
  store: Ember.inject.service()
});
