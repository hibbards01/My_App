import DS from 'ember-data';

export default DS.Model.extend({
  	title: DS.attr('string'),
  	date: DS.attr('date'),
  	text: DS.attr('string')
}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: "First Entry",
			date: "2/9/15",
			text: "Some very cool and long text. With very long text. aslkdjfalkejalksefjalksejf;alkesjfa;lsekfja;sklefa;lekfja;slkefj;aselkfja;slkefjas;elkfjs;dklf,vznwieofnakdvnsioefnawenvsdknvao;wien4f/alsn/linzoxtr"
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