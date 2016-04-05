import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
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
