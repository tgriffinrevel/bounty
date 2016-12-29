import Ember from 'ember';
import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  name: attr(),
  wins: attr(),
  losses: attr(),
  ties: attr(),
  bounty: attr(),
  league: belongsTo('league')
});
