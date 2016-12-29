// app/authorizers/custom.js

import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';
export default BaseAuthorizer.extend({
  authorize: function(jqXHR, requestOptions){
    let accessToken = this.get('session.content.secure.token');
    if(this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)){
      jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    }
  }
});
