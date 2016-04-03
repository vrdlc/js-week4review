import Ember from 'ember';

export default Ember.Component.extend({
  answerIsShowing: false,
  actions: {
    answerShow: function() {
      this.set('answerIsShowing', true);
    },
    answerHide: function() {
      this.set('answerIsShowing', false);
    },
    delete(question) {
      if(confirm('You said you wanted help!')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
