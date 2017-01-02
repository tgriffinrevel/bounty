/**
 * Created by Tanner Griffin on 12/14/2016.
 *           _____       _____
 *    ____  /____ \     / ____\ _
 *   /  _  | ____\ \   / /___  | |
 *   | (_| |  _|  \ \ / /  |_  | |
 *    > _  | |___  \ V /  ___| | |___
 *   /_/ \_|_____|  \_/  |_____|_____|
 *     Because your message matters.
 */
/*global Ember */
export default Ember.Controller.extend({
  actions: {
    change_p1_list: function (player) {
      this.set('p1', player);
    },
    change_p2_list: function (player) {
      this.set('p2', player);
    }

  },
  p1: null,
  p2: null,
  result: null,
  match_desc: null,
  match_result: Ember.observer(
    'p1',
    'p2',
    'result',
    function () {
      let model = this.get('model');

      console.log(model.p1_list);
      let players = model.p1_list.content;
      console.log(players);
      let player_one = '';
      let player_two = '';
      let result = '';
      let selected_player = '';
      function correct_player(element){
        return element.id == selected_player;
      }
      if (this.p1 == null) {
        player_one = ' ________ ';
      } else {
        selected_player = this.p1;
        player_one = players[players.findIndex(correct_player)]._data.name;
      }

      if (this.p2 == null) {
        player_two = ' ________ .';
      } else {
        selected_player = this.p2;
        player_two = players[players.findIndex(correct_player)]._data.name;
      }

      let res = this.result;
      if (res == null) {
        console.log(res);
        result = ' ___________ ';
      } else {
        if (res == 'p1') {
          result = ' defeated ';
        }
        else if (res == 'tie') {
          result = ' tied with ';
        }
        else if (res == 'p2') {
          result = ' was defeated by ';
        }
        else {
          console.log(res);
        }
      }

      let desc = player_one + result + player_two + '. If this is correct, hit submit.';

      this.set('match_desc', desc);
    })

});
