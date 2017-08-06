angular.module('travel-dashboard')
.component('userTogoListEntry', {
  bindings: {
    user:'<',
    togo: '<'
  },

  templateUrl: 'templates/userTogoListEntry.html'
});