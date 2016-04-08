import Ember from 'ember';

export default Ember.Component.extend({
  bookmark: Ember.inject.service(),

  sortBy: ['date:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    addToBookmarks(question) {
      this.get('bookmark').add(question);
    },
    submitAnswer(params) {
      this.sendAction('submitAnswer', params);
    },

    delete(question) {
      if(confirm('You said you wanted help!')){
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
