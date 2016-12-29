/**
 * Created by Tanner Griffin on 12/18/2016.
 *           _____       _____
 *    ____  /____ \     / ____\ _
 *   /  _  | ____\ \   / /___  | |
 *   | (_| |  _|  \ \ / /  |_  | |
 *    > _  | |___  \ V /  ___| | |___
 *   /_/ \_|_____|  \_/  |_____|_____|
 *     Because your message matters.
 */
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin, {
  actions:{
    invalidateSession: function(){
      this.get('session').invalidate();
    }
  },
  session: Ember.inject.service('session')
});

