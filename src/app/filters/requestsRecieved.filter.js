angular.module('filters')

  .filter('requestsRecieved', function() {
    return function(contacts) {
      var result = [];
      angular.forEach(contacts, function(contact) {
        if (!contact.accepted && contact.type == 'inverse'){ result.push(contact) }
      })
    return result;
    }
  });

  
