import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  // type: attr('string'),
  players: DS.hasMany('player', {async: true})
});
