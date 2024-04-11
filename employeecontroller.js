angular
.module("employeeApp")
.controller("EmployeeController", EmployeeController);
EmployeeController.$inject[
 'EmployeeService'
];
function EmployeeController(EmployeeService){
var vm = this;
vm.employees = EmployeeService.getEmployees();
vm.orderBy = orderBy;
vm.deleteEmployee = deleteEmployee;
vm.showStatus = false;
vm.doShow = doShow;
vm.addEmployee = addEmployee;
vm.editEmployee = editEmployee;
vm.editorEnabled = [];
vm.enableEditor = enableEditor;
vm.disableEditor = disableEditor;
function orderBy(myOrder){
vm.ordering = myOrder;
} 
function deleteEmployee(id){
EmployeeService.deleteEmployee(id);
}
function doShow(){
vm.showStatus = true;
}
function addEmployee(){
var maxId = EmployeeService.maxId();
vm.employee = {
id: maxId + 1,
name: vm.ename,
rollno:vm.erollno,
address: vm.eaddress,
department: vm.edepartment,
mobile: vm.emobile
};
EmployeeService.addEmployee(vm.employee);
}
function editEmployee($index, editId, editName,editRollno, editAddress, editDepartment, 
editMobile){
vm.employee = {
id: editId,
name: editName,
rollno:editRollno,
address: editAddress,
department: editDepartment,
mobile: editMobile
};
EmployeeService.editEmployee(vm.employee);
vm.disableEditor($index);
}
function enableEditor(index){
vm.editorEnabled[index] = true;
}
function disableEditor(index){
vm.editorEnabled[index] = false;
}
}
