import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  newQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('newQuestion', true);
    },
    save() {
      var params = {
        user: this.get('user'),
        date: this.get('date') ? this.get('date') : moment().format('MMMM Do YYYY, h:mm'),
        title: this.get('title'),
        body: this.get('body'),
      };
      this.set('newQuestion', false);
      this.sendAction('save', params);
    }
  }
});
