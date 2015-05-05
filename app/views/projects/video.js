import Ember from 'ember';

var winHeight = Ember.$(window).height();

export default Ember.View.extend({
	tagName: 'iframe',
	attributeBindings: ['src', 'width', 'height', 'frameborder', 'allowfullscreen'],
	width: '100%',
	height: winHeight * 0.7,
	frameborder: 0,
	allowfullscreen: true,
	src: function() {
		var vidId = this.thisVideo;
		if (this.videoType === 'youtube') {
			return 'http://www.youtube.com/embed/'+vidId+'?rel=0&amp;showinfo=0;autoplay=1';
		} else {
			return 'http://player.vimeo.com/video/'+vidId+'?autoplay=1&title=0&byline=0&portrait=0';
		}
		
	}.property()
});
