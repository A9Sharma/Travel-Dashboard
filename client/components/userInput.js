angular.module('travel-dashboard')
.component('userInput', {
  bindings: {
    user:'<',
    togos:'<'
  },
  controller: function() {
    this.handleClick = function() {
      var obj = {};
      obj.location = this.inputLocation;
      obj.country = this.inputCountry;
      this.togos.push(obj);
    };
  },
  templateUrl: 'templates/userInput.html'
});