import Ember from 'ember';

export default Ember.Component.extend({
  answerForm: false,
  actions: {
    showAnswerForm() {
      this.set('answerForm', true);
    },
    submitAnswer() {
      var params = {
        user: this.get('user'),
        date: this.get('date'),
        answer: this.get('answer')
      };
      this.set('answerForm', false);
      this.sendAction('submitAnswer', params);
    }
  }
});
