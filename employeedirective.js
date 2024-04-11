var app = angular.module("employeeApp");
app.directive("employeeSearch", employeeSearch);
app.directive("employeeDisplay", employeeDisplay);
app.directive("addEmployee", addEmployee);
function employeeSearch(){
return {
templateUrl: "employeesearch.html"
};
}
function employeeDisplay(){
return {
templateUrl: "employeedisplay.html"
};
}
function addEmployee(){
return {
templateUrl: "addEmployee.html"
};
}
