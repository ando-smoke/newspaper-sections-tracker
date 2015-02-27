newspaperSections.factory('UtilitiesFactory', function() {
  var factory = {};
  
  factory.findByID = function(collection, id) {
    for (var i = 0; i < collection.length; ++i) {
      if (collection[i] == id) {
        return collection[i];
      }
    }

    return null;
  };

  return factory;
});
