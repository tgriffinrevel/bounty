import DS from 'ember-data';
import Match from 'bounty/models/match';
// import Player from 'bounty/models/player';
let players = [
  // Player.create({id: 0, name: 'Test Player A', wins: 8, losses: 2, ties: 0, score: 17, bounty: 0}),
  // Player.create({id: 1, name: 'Test Player B', wins: 2, losses: 8, ties: 0, score: 12, bounty: 1})
  ];

export default DS.Store.extend({
  players: [],
  setPlayers(player_list){
    players = player_list;
  },

  getPlayers(){
    return players;
  },

  getPlayerById(id){
    console.log(id);
    // return peekRecord('player', id)
  },

  newMatch(){
    return Match.create({
      p1: "hi",
      p2: "there",
      result: 1
    });
  },

  saveMatch(match){
    console.log(match);
  }

});
