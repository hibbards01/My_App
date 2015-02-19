import DS from 'ember-data';

export default DS.Model.extend({
  	title: DS.attr('string'),
  	date: DS.attr('string'),
  	text: DS.attr('string')
}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: "First Entry",
			date: "2/9/15",
			text: "Some very cool and long text. With very long text. I will keep on adding some more text to see if this will wrap around the border and not keep on going on and on forever."
		},
		{
			id: 2,
			title: "2nd Entry",
			date: "2/10/15",
			text: "Some very cool and long text. I'm BATMAN!"
		},
		{
			id: 3,
			title: "3rd Entry",
			date: "2/11/15",
			text: "Some very cool and long text. This is so cool!"
		}
	]
});