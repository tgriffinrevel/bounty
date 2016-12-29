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
      this.set('p1', parseInt(player));
    },
    change_p2_list: function (player) {
      this.set('p2', parseInt(player));
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
      let players = model.p1_list;
      let player_one = '';
      let player_two = '';
      let result = '';

      if (this.p1 == null) {
        player_one = ' ________ ';
      } else {
        player_one = players[this.p1].get('name');
      }

      if (this.p2 == null) {
        player_two = ' ________ .';
      } else {
        player_two = players[this.p2].get('name');
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
