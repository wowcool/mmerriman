import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
	    var _this = this;
	    var url = '/data/portfolio.json';
	    return Ember.$.getJSON(url).then(function(data){	
	    	data.portfolio.forEach(function(item){	
	    		_this.store.push('item', _this.store.normalize('item', item));
	    	});
	    });
	}
});
