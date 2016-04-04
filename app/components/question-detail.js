import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitAnswer(params) {
      this.sendAction('submitAnswer', params);
    },

    // update(question, params) {
    //   this.sendAction('update', question, params); //IF I REMOVE THIS AND MOVE UPDATE-QUESTION TO QUESTION.HBS, IT WORKS. WHY?
    // },
    delete(question) {
      if(confirm('You said you wanted help!')){
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
