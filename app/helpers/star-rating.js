import Ember from 'ember';

export function starRating(params/*, hash*/) {
  var numberOfStars = params[0].get('rating');

  if (numberOfStars === 5) {
    return Ember.String.htmlSafe('<span>&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;</span>');
  } else if (numberOfStars === 4) {
    return Ember.String.htmlSafe('<span>&bigstar;&bigstar;&bigstar;&bigstar;&star;</span>');
  } else if (numberOfStars === 3) {
    return Ember.String.htmlSafe('<span>&bigstar;&bigstar;&bigstar;&star;&star;</span>');
  } else if (numberOfStars === 2) {
    return Ember.String.htmlSafe('<span>&bigstar;&bigstar;&star;&star;&star;</span>');
  } else if (numberOfStars === 1) {
    return Ember.String.htmlSafe('<span>&bigstar;&star;&star;&star;&star;</span>');
  }

}

export default Ember.Helper.helper(starRating);
