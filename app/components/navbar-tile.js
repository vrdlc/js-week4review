import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.store.findRecord('question', params.item_id);
  },
  bookmark: Ember.inject.service(),
  marked: Ember.inject.service(),

  bookmarkTotal: Ember.computed('bookmark.questions.[]', function() {
    var total = 0;
    for (var i = 0; i < this.get('bookmark.questions.length'); i++) {
      total += 1;
    }
    return total;
  }),

});
