// app/authenticators/custom.js

import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

export default BaseAuthenticator.extend({
  tokenEndpoint: 'http://icarus.cs.weber.edu/~tg46219/bounty/v1/token',
  restore: function (data) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    })
  },
  session: Ember.inject.service('session'),
  authenticate: function (options) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let session = this.session;
      Ember.$.ajax({
        url: this.tokenEndpoint,
        type: 'POST',
        data: JSON.stringify({
          username: options.identification,
          password: options.password
        }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      }).then(function (response) {
          Ember.run( () => {
            session.isAuthenticated = true;
            resolve({
              token: response
            });
          });
        }, function (xhr, status, error) {
          let response = xhr.responseText;
          Ember.run(function () {
            reject(response);
          });
        }
      )
    })
  },

  invalidate: function () {
    console.log('invalidate...');
    this.session.isAuthenticated = false;
    return Ember.RSVP.resolve();
  }
});
