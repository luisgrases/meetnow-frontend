angular.module('filters', [])

  .filter('assistLimit', function() {
    return function(input) {
      return (input == 0) ?  '∞' : input;
    };
  });

  
