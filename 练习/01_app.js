angular.module('myApp', [])
    .controller('MyCtrl', ['$scope', function ($scope) {
        // 初始化message
        $scope.message = '';

        // 定义计算剩余字数的方法
        $scope.getCount = function () {
            // 判断用户输入的内容长度
            if ($scope.message.length > 100) {
                $scope.message = $scope.message.slice(0, 100);
            }
            return 100 - $scope.message.length;
        }

        // 定义保存数据的方法
        $scope.save = function () {
            localStorage.setItem('note_key', JSON.stringify($scope.message));
        }

        // 定义读取数据的方法
        $scope.read = function () {
            $scope.message = JSON.parse(localStorage.getItem('note_key') || '[]'); // 处理null的情况
        }

        // 定义删除数据的方法
        $scope.remove = function () {
            localStorage.removeItem('note_key');
            $scope.message = '';
        }
    }])