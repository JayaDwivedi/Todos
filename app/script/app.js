/**
 * Created by jayad on 1/22/2015.
 */

angular.module("todoApp",[])
    .controller("MainCtrl", function($scope){

        $scope.todos = [];
        $scope.add = function(){
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        }

        $scope.delete = function(item) {
            var index = $scope.todos.indexOf(item);
            $scope.todos.splice(index, 1);
        }

        $scope.clearCompleted = function(){
            console.log("clearCompleted");
            for(var i = $scope.todos.length-1 ; i>=0; i--){
                console.log($scope.todos[i].completed);
                if($scope.todos[i].completed){
                    $scope.todos.splice(i,1);
                }
            }
        }
    });
