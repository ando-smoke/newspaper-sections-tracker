var newspaperSections = angular.module('newspaperSections', ['ui.router']);

newspaperSections.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('sections', {
    url: "/sections",
    templateUrl: "partials/sections.html",
    controller: 'SectionsCtrl'
  });
});
