import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('contact', {path: '/contact'});

  this.resource('projects', function() {
    this.route('show', { path: ':project_id' });
    this.route('/', { path: 'index' });
  });

  this.route('home', {path: '/'});
  
});
