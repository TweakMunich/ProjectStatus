'use strict';

/* Controllers */
var app = angular.module('app', []);

var defaultData ={
    "blocks" : [
        {
            "name" : "Application Delivery Controller",
            "status" : "success",
            "elements" : [
                {
                    "name" : "DNS",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "LoadBalancing",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Reverse Proxy",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Caching",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "WAF",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Authentication",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Certificates",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "API Gateway",
                    "progress" : 0.5,
                    "status" : "success"
                }
            ]
        },
        {
            "name" : "Run-time Infrastructure",
            "status" : "warning",
            "elements" : [
                {
                    "name" : "PaaS",
                    "progress" : 0.1,
                    "status" : "warning"
                },
                {
                    "name" : "Router",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Container",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Session Store",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Scheduler",
                    "progress" : 0.5,
                    "status" : "success"
                }
            ]
        },
        {
            "name" : "Monitoring",
            "status" : "warning",
            "elements" : [
                {
                    "name" : "Log Management",
                    "progress" : 0.1,
                    "status" : "warning"
                },
                {
                    "name" : "Metrics Agent",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Time Series DB",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Trends and Events",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Alerts Manager",
                    "progress" : 0.5,
                    "status" : "success"
                }
            ]
        },
        {
            "name" : "Development Tool chain",
            "status" : "danger",
            "elements" : [
                {
                    "name" : "Project Tracker",
                    "progress" : 0.1,
                    "status" : "warning"
                },
                {
                    "name" : "Code Repo",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Code Review",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Static Code Analysis",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Continuous Integration",
                    "progress" : 0.5,
                    "status" : "success"
                },
                {
                    "name" : "Automatic Testing",
                    "progress" : 0.5,
                    "status" : "success"
                }
            ]
        },
        {
            "name": "Deployment",
            "status": "success",
            "elements": [
                {
                    "name": "deployment",
                    "progress": 0.1,
                    "status": "success"
                }
            ]
        },
        {
            "name": "Application Run-time",
            "status": "success",
            "elements": [
                {
                    "name": "Java Container",
                    "progress": 0.1,
                    "status": "success"
                },
                {
                    "name": "Persistence",
                    "progress": 0.1,
                    "status": "success"
                },
                {
                    "name": "Web Services",
                    "progress": 0.1,
                    "status": "success"
                },
                {
                    "name": "Messaging",
                    "progress": 0.1,
                    "status": "success"
                },
                {
                    "name": "UI Framework",
                    "progress": 0.1,
                    "status": "success"
                }
            ]
        }
    ]
};

app.controller('dataController', function($scope, $http) {
    $scope.data = defaultData;
});
