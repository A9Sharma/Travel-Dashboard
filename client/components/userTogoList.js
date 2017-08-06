angular.module('travel-dashboard')
.component('userTogoList', {
  bindings: {
    user:'<',
    togos:'<'
  },

  templateUrl: 'templates/userTogoList.html'
});
