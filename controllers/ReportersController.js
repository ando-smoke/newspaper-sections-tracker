newspaperSections.controller('ReportersCtrl',
  function ReportersCtrl($scope, $stateParams, SectionsFactory, UtilitiesFactory) {

  $scope.section = UtilitiesFactory.findByID(SectionsFactory.sections,
    $stateParams.sectionID);

  $scope.addReporter = function() {
    $scope.section.reporters.push({
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
