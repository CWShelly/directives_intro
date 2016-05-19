const angular = require('angular');
const myApp = angular.module('myApp', []);

require('./directives')(myApp);

myApp.controller('TasksController', function(){
    this.tasks = [
        {desc: 'buy carrots'},
        {desc: 'buy potatoes'},
        {desc: 'buy vodka'}
    ];
    this.description = 'Description from controller'
});
