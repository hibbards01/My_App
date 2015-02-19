import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
      editEntry: function() {
        this.set('isEditing', true);
      },
      doneEditing: function() {
        this.set('isEditing', false);
      },
      deleteEntry: function() {
        if (confirm("Are you sure you want to delete this entry?")) {
          // Delete the record from the model!
          var deleteEntry = this.get('model');
          deleteEntry.deleteRecord();
          deleteEntry.save();

          // Now route back to 'entries'
          this.transitionTo('deleted');
        }
      }
    }
});