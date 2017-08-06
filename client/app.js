var togoDataTemplate = [
  {
    location: 'Back waters of Kerela',
    country: 'India'
  },
  {
    location: 'Grand Canypon',
    country: 'U.S.A.'
  },
  {
    location: 'The Alps',
    country: 'Switzerland'
  }
];

angular.module('travel-dashboard', [])
.component('app', {
  controller: function() {
    this.username = 'Anjali';
    this.togoData = togoDataTemplate;
  },
  templateUrl: 'templates/app.html'
});

