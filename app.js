var newspaperSections = angular.module('newspaperSections', ['ui.router']);

newspaperSections.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });
});
