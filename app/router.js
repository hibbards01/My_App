import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('journal', {path: '/'}, function() {
		this.resource('entries', {path: '/'}, function() {
			this.resource('entry', {path: ':entry_id'});
		});
	});
});

export default Router;
