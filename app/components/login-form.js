import Ember from 'ember';

export default Ember.Component.extend({
  authenticator: 'authenticator:custom',
  session: Ember.inject.service('session'),
  actions:{
    authenticate: function(){
      let credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:custom', credentials).catch((message=>{
        this.set('errorMessage', message);
      }));
    }
  }
});
