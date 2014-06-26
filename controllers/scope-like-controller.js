
APP.
    controller('PageCtrlScope', ['$scope', function($scope) {

        $scope.name = 'page';

        $scope.details = {
            description: 'This is a part of html.'
        }

    }])

    .controller('HeaderCtrlScope', ['$scope', function ($scope) {

        $scope.name = 'header';

        // $scope.details.description is inherited from PageCtrlScope

    }])

    .controller('BodyCtrlScope', ['$scope', function ($scope) {

        $scope.name = 'body';

        // $scope.details.description is inherited from PageCtrlScope

    }])