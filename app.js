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

  $stateProvider.state('sections-detail', {
    url: "/sections/:sectionID",
    templateUrl: "partials/reporters.html",
    controller: 'ReportersCtrl'
  });

  $stateProvider.state('reporter-detail', {
    url: "/sections/:sectionID/reporters/:reporterID",
    templateUrl: "partials/reporter-detail.html",
    controller: 'ReportersCtrl'
  });
});
