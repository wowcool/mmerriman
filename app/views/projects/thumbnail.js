import Ember from 'ember';

export default Ember.View.extend({
	tagName: 'div',
	classNames: ['thumbnail'],
	attributeBindings: ['style'],
	style: function(){
		var thumbSrc = this.thisBgImg;
		return ('background-image:url(img/thumbnails/'+thumbSrc+')').htmlSafe();
	}.property(),
	click: function(e){
		console.log(e);
	}

});
