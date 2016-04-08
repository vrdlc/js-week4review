import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
  submitAnswer(params) {
    var newAnswer = this.store.createRecord('answer', params);
    var question = params.question;
    question.get('answers').addObject(newAnswer);
    newAnswer.save().then(function() {
      return question.save();
    });
    this.transitionTo('question', params.question.id);
  },
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined && params[key] !=="") {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question/:question_id');
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
  }
});
