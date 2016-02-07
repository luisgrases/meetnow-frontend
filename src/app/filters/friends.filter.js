angular.module('filters')

  .filter('friends', function() {
    return function(contacts) {
      var result = [];
      angular.forEach(contacts, function(contact) {
        if (contact.accepted){ result.push(contact) }
      })
    return result;
    }
  });

  
