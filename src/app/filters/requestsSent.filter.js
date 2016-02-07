angular.module('filters')

  .filter('requestsSent', function() {
    return function(contacts) {
      var result = [];
      angular.forEach(contacts, function(contact) {
        if (!contact.accepted && contact.type == 'normal'){ result.push(contact) }
      })
    return result;
    }
  });

  
