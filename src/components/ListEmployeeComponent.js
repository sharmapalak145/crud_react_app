import React, { Component } from 'react' 
import EmployeeService from '../services/EmployeeService' 
import style from '../styles/style.css'

class ListEmployeeComponent extends Component { 
    constructor(props) { 
        super(props) 
        this.state = { 
                employees: [] 
        } 
        this.addEmployee = this.addEmployee.bind(this); 
        this.editEmployee = this.editEmployee.bind(this); 
        this.deleteEmployee = this.deleteEmployee.bind(this); 
    } 
    deleteEmployee(id){ 
        EmployeeService.deleteEmployee(id).then( res => { 
            this.setState({employees: this.state.employees.filter(employee => employee.eid !== id)}); 
        }); 
    } 
    viewEmployee(id){ 
        this.props.history.push('/viewemployee/'+id);    
    } 
    editEmployee(id){ 
        this.props.history.push('/addemployee/'+id); 
    } 
    componentDidMount(){ 
        EmployeeService.getEmployees().then((res) => { 
            console.log(res.data); 
            this.setState({ employees: res.data}); 
        }); 
    } 
 
    addEmployee(){ 
        this.props.history.push('/addemployee/_add'); 
    } 
    render() { 
        return ( 
            <div> 
                 <h2 className="text-center">Employees List</h2> 
                 <div className = "row"> 
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button> 
                 </div> 
                 <br></br> 
                 <div className = "row"> 
                        <table className = "table table-striped table-bordered"> 
                            <thead> 
                                <tr  > 
                                    <th> Employee Id</th> 
                                    <th> Employee Name</th> 
                                    <th> Employee Designation</th> 
                                    <th> Employee Salary</th> 
                                    <th> Actions</th> 
                                </tr> 
                            </thead> 
                            <tbody> 
                                { 
                                    this.state.employees.map( 
                                        employee =>  
                                        <tr key = {employee.eid}> 
                                              <td> { employee.eid} </td>    
                                             <td> { employee.name} </td>    
                                             <td> {employee.designation}</td> 
                                             <td> {employee.salary}</td> 
                                             <td > 
                                             
                                                 <button onClick={ () => this.editEmployee(employee.eid)} className="btn btn-info">Update </button> 
                                                 <button style={{marginLeft: "20px"}} onClick={ () => this.deleteEmployee(employee.eid) } className="btn btn-danger ">Delete </button> 
                                                 <button style={{marginLeft: "20px"}} onClick={ () => this.viewEmployee(employee.eid)} className="btn btn-info">View </button> 
                                                    
                                             </td> 
                                        </tr> 
                                    ) 
                                } 
                            </tbody> 
                        </table> 
                 </div> 
            </div> 
        ) 
    } 
} 
 
export default ListEmployeeComponent 