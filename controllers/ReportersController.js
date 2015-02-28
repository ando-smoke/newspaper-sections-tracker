newspaperSections.controller('ReportersCtrl',
  function ReportersCtrl($scope, $stateParams, SectionsFactory, UtilitiesFactory) {

  $scope.section =
    UtilitiesFactory.findByID(SectionsFactory.sections,
      $stateParams.sectionID);
  $scope.reporter =
    UtilitiesFactory.findByID($scope.section.reporters,
      $stateParams.reporterID);

  $scope.addReporter = function() {
    $scope.section.reporters.push({
      id: $scope.section.reporters.length + 1,
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      displayName: $scope.firstName + " " + $scope.lastName,
      birthDate: $scope.birthDate,
      employmentYears: $scope.employmentYears
    });

    $scope.firstName = null;
    $scope.lastName = null;
    $scope.birthDate = null;
    $scope.employmentYears = null;
  };

});
