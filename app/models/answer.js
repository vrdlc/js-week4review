import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  answer: DS.attr(),
  date: DS.attr(),
  questions: DS.belongsTo('question', {async: true})
});
