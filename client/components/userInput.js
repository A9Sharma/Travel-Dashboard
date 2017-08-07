angular.module('travel-dashboard')
.component('userInput', {
  bindings: {
    user:'<',
    send:'<'
  },
  controller: function() {
    this.handleClick = function() {
      this.send({
        location : this.inputLocation,
        country : this.inputCountry
      });
    };
  },
  templateUrl: 'templates/userInput.html'
});