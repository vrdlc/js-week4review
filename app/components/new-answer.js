import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  answerForm: false,
  actions: {
    showAnswerForm() {
      this.set('answerForm', true);
    },
    save() {
      var params = {
        user: this.get('user'),
        date: this.get('date') ? this.get('date') : moment().format('MMMM Do YYYY, h:mm a'),
        answer: this.get('answer'),
        rating: parseInt(this.get('rating')),
        question: this.get('question')
      };
      this.set('answerForm', false);
      this.sendAction('submitAnswer', params);
    }
  }
});
