import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  video_id: DS.attr('string'),
  brand: DS.attr('string'),
  img: DS.attr('string'),
  director: DS.attr('string'),
  dp: DS.attr('string'),
  type: DS.attr('string'),
  video_type: DS.attr('string')
});
