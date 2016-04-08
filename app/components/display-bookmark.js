import Ember from 'ember';

export default Ember.Component.extend({
  bookmark: Ember.inject.service(),

  bookmarkTotal: Ember.computed('bookmark.questions.[]', function() {
    var total = 0;
    for (var i = 0; i < this.get('bookmark.questions.length'); i++) {
      total += this.get('shoppingCart.questions')[i].get('cost');
    }
    return total;
  }),

  actions: {
    removeBookmark(question) {
      this.get('bookmark').remove(question);
    }
  }
});
