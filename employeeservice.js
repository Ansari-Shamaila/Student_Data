angular
.module("employeeApp")
.factory("EmployeeService", EmployeeService)
function EmployeeService(){
var oEmployee = {};
oEmployee.getEmployees = getEmployees;
oEmployee.addEmployee = addEmployee;
oEmployee.editEmployee = editEmployee;
oEmployee.deleteEmployee = deleteEmployee;
oEmployee.maxId = maxId;
var employees = [{
    
    },
    {
       
        }];
        function getEmployees(){
        return employees;
        }
        function addEmployee(employee){
        employees.push(employee);
        }
        function editEmployee(employee){
        debugger;
        for(var i = 0; i< employees.length; i++){
        if(employees[i].id == employee.id){
        employees[i].name = employee.name;
        employees[i].rollno = employee.rollno;
        employees[i].address = employee.address;
        employees[i].designation = employee.designation;
        employees[i].mobile = employee.mobile;
        break;
        }
        }
        }
        function deleteEmployee(eid){
        for(var i = 0; i< employees.length; i++){
        if(employees[i].id == eid){
        var deleteUser = employees[i].name;
        var isconfirm = confirm("Are you sure to delete " + 
        deleteUser);
        if(isconfirm){
        employees.splice(i, 1);
        alert(deleteUser +" has been deleted successfully");
        }
        break;
        }
        }
        }
        function maxId(){
            // var max = Math.max(...employees.id);
            var max = 0;
            for(var i = 0; i< employees.length; i++){
            if(employees[i].id > max){
            max = employees[i].id;
            }
            }
            return max;
            }
            return oEmployee;
            }            