import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    this.get('questions').addObject(question);
  },
  remove(question) {
    this.get('questions').removeObject(question);
  }
});
