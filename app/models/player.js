import Ember from 'ember';
import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr(),
  score: DS.attr(),
  wins: DS.attr(),
  losses: DS.attr(),
  ties: DS.attr(),
  bounty: DS.attr(),
  league: DS.belongsTo('league', {async: true})
});
