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
      sortName: $scope.lastName + ", " + $scope.firstName,
      birthDate: $scope.birthDate,
      employmentYears: $scope.employmentYears,
      birthday: function() {
        return (this.birthDate.getMonth() + 1) +
          "/" + this.birthDate.getDate()
      }
    });

    $scope.firstName = null;
    $scope.lastName = null;
    $scope.birthDate = null;
    $scope.employmentYears = null;
  };

});
