import Ember from 'ember';

export default Ember.ArrayController.extend({
    title: '',
    date: '',
    entry: '',
    actions: {
      newEntry: function() {
        this.set('newEntry', true);
      },
      saveEntry: function () {
        // Grab the values.
        var newTitle = this.get('title');
        var newDate = this.get('date');
        var newText = this.get('entry');

        // Clear the text fields
        this.set('title', '');
        this.set('entry', '');
        this.set('date', '');

        if (newTitle !== '' || newDate !== '' || newText !== '') {
          // Now create a new journal entry.
          var new_entry = this.store.createRecord('entry', {
            title: newTitle,
            date: newDate,
            text: newText
          });

          // and save it.
          new_entry.save();
        }

        // Now go back to the standard look.
        this.set('newEntry', false);
      }
    }
});
