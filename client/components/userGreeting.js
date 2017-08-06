angular.module('travel-dashboard')
.component('userGreeting', {
  bindings: {
    user:'<'
  },

  templateUrl: 'templates/userGreeting.html'
});