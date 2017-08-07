angular.module('travel-dashboard', [])
.controller('AppCtrl', function(serverData) {
  this.togoData = [];
  serverData.fetch((data) =>{
    this.togoData = data;
  });
  this.sendData = (inputData) => {
    serverData.send(inputData, (data) =>{
      this.togoData = data;
    });
  };
  this.username = 'Anjali';
})

.component('app', {
  controller:'AppCtrl',
  templateUrl: 'templates/app.html'
});

