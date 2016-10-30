(function() {
  'use strict';

  angular
    .module('blocks.filter')
    .filter('newline', newline);

  function newline() {
    return function(text) {
      text = text || '';
      return text.replace(/\n/g, '<br>');
    }
  }

})();
