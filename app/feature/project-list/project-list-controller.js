(function() {

    var ProjectlistController =  function() {

        var vm = this;

        vm.angular = "AngularJS";

        vm.bootstrap = "Twitter Bootstrap";

        vm.html = "HTML5";

        vm.javaEE = "JavaEE";


    };

    angular.module('webApp').controller('projectlistController', [ProjectlistController]);
}());