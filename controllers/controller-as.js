
APP.
    controller('PageCtrlAs', [function() {
        /*
            Note that you don't need to inject $scope
         */

        this.name = 'page';

        this.details = {
            description: 'My description is vague.'
        };


    }])

    .controller('HeaderCtrlAs', [function () {

        this.name = 'header';

        console.log(this.details); // this.details will be undefined -- no inheritance

    }])

    .controller('BodyCtrlAs', ['$scope', function ($scope) {

        this.name = 'body';

        $scope.execute = function () {
            alert("Button was pressed.");
        }

    }])