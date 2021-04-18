import axios from 'axios'; 

const EMPLOYEE_API_BASE_URL = "http://localhost:1234/employee"; 

class EmployeeService { 

    getEmployees(){ 
        console.log("EMPLOYEE_API_BASE_URL + '/findAll'-->", EMPLOYEE_API_BASE_URL + '/findAll')
        return axios.get(EMPLOYEE_API_BASE_URL + '/findAll'); 
    } 

    createEmployee(employee){ 
        return axios.post(EMPLOYEE_API_BASE_URL + '/add' , employee); 
    } 

    getEmployeeById(employeeId){ 
        return axios.get(EMPLOYEE_API_BASE_URL + '/find/' + employeeId); 
    } 

    updateEmployee(employee, employeeId){ 
        return axios.put(EMPLOYEE_API_BASE_URL + '/update/' + employeeId, employee); 
    } 

    deleteEmployee(employeeId){ 
        return axios.delete(EMPLOYEE_API_BASE_URL + '/delete/' + employeeId); 
    } 
} 

export default new EmployeeService() 