newspaperSections.controller('SectionsCtrl',
  function SectionsCtrl($scope, SectionsFactory) {

  $scope.sections = SectionsFactory.sections;
  $scope.SectionsFactory = SectionsFactory;
  
  $scope.addSection = function() {
    $scope.sections.push({
      id: $scope.sections.length + 1,
      name: $scope.sectionName,
      reporters: []
    });

    $scope.sectionName = null;
  };
});
