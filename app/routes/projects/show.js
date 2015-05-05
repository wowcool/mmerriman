import Ember from 'ember';
// import DS from 'ember-data';

export default Ember.Route.extend({
	model: function(params) {
	    return this.store.find('item', params.project_id);
	}
});
