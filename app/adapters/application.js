import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
//   host: 'http://icarus.cs.weber.edu',
//   namespace: '~tg46219/bounty/v1'
// });

export default DS.RESTAdapter.extend({
  host: 'http://icarus.cs.weber.edu',
  namespace: '~tg46219/bounty/v1'
});
