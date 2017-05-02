(function() {
  'use strict';

  angular
    .module('app', []);
})();
(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = [];

  /* @ngInject */
  function MainController() {
    var vm = this;
    vm.loanBalance = 0;
      vm.interestRate = 0;
      vm.loanTerm = 0;
      vm.period = 0;
      vm.downPayment = 0;
      vm.calculateMortgage = function() {

        // monthly interest rate
         var monthlyInterestRate = ((vm.interestRate/100)/vm.period);

        // number of payments
        var numberOfPayments = (vm.loanTerm * vm.period);

        // compounded interest rate
        var compoundedInterestRate = Math.pow((1 + monthlyInterestRate),numberOfPayments);

        // interest quotient
        var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

        // final calculation
        var monthlyPayment = Math.round((vm.loanBalance - vm.downPayment) * interestQuotient).toFixed(2);

        vm.output = monthlyPayment + " a month"
        preventDefault()


      }
  }
})();
