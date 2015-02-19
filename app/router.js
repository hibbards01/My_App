import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('entries', function() {
		this.resource('entry', {path: '/:entry_id'});
    this.resource('deleted');
    this.resource('initial-page');
	});
});



export default Router;
