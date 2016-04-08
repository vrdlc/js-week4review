import Ember from 'ember';

export default Ember.Component.extend({
  bookmark: Ember.inject.service(),

  sortBy: ['date:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  averageRating: Ember.computed('sortedAnswers', function() {
  var total = 0;
  for (var i = 0; i < this.get('sortedAnswers.length'); i++) {
    total += this.get('sortedAnswers')[i].get('rating');
  }
  var avg = total / this.get('sortedAnswers.length');
  return avg;
}),

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
