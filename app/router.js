import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('scoreboard', function(){
    this.route('score', {path: '/:player_id'});
  });
  this.route('match');
  this.route('login');
});

export default Router;
