/*
* 要点：
*   遍历数组的语法：todos.forEach()
*
* */

angular.module('myApp', [])
    .controller('MyCtrl', ['$scope', function ($scope) {
        $scope.newTodo = '';
        $scope.todos = [
            {name: '吃饭', isChecked: false},
            {name: '睡觉', isChecked: false},
            {name: '打豆豆', isChecked: false}
        ];

        // 定义添加的方法
        $scope.add = function () {
            if (!$scope.newTodo) {
                alert('输入的内容不能为空！');
                return;
            }

            const obj = {
                name: $scope.newTodo,
                isChecked: false
            };
            $scope.todos.unshift(obj);
            $scope.newTodo = '';
        }

        // 定义删除的方法 （方法1：递归删除被选中的）
        $scope.del_1 = function () {
            $scope.todos.forEach(function (item, index) {
                // 找到当前被选中的todo
                if (item.isChecked) {
                    console.log('Delete ' + item.name + ' with index: ' + index);
                    $scope.todos.splice(index, 1);
                    $scope.del();
                }
            })
        }

        // 定义删除的方法 （方法2：把未被选中的收集起来）
        $scope.del_2 = function () {
            $scope.todos.forEach(function (item, index) {
                var oldTodos = $scope.todos;
                $scope.todos = [];
                oldTodos.forEach(function (item, index) {
                    // 找到未被选中的
                    if (!item.isChecked) {
                        $scope.todos.push(item);
                    }
                })
            })
        }

        // 测试方法2
        $scope.del = $scope.del_2
    }])