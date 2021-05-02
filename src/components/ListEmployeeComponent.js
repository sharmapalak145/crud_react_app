import React, { Component } from 'react' 
import EmployeeService from '../services/EmployeeService' 
import { Button, Icon } from "semantic-ui-react";
import Table from 'react-bootstrap/Table'
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
                 <h2 className="text-center ">Employees List</h2> 
                 <div className = "row"> 
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button> 
                 </div> 
                 <br></br> 
                 <div className = "row"> 
                        <Table bordered hover variant="blue" className = " table table-bordered "> 
                            <thead > 
                                <tr className="text-center " > 
                                    <th> Employee Id</th> 
                                    <th> Employee Name</th> 
                                    <th> Employee Designation</th> 
                                    <th> Employee Salary</th> 
                                    <th> Actions</th> 
                                </tr> 
                            </thead> 
                            <tbody className="text-center"> 
                                { 
                                    this.state.employees.map( 
                                        employee =>  
                                        <tr key = {employee.eid}> 
                                              <td> { employee.eid} </td>    
                                             <td> { employee.name} </td>    
                                             <td> {employee.designation}</td> 
                                             <td> {employee.salary}</td> 
                                             <td > 
                                             <Button basic color='green' animated 
                                             onClick={ () => this.viewEmployee(employee.eid)} >
                                            <Button.Content visible>View</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name="eye" />
                                            </Button.Content>
                                            </Button>
                                            <Button basic color='blue' animated style={{marginLeft: "12px"}}
                                             onClick={ () => this.editEmployee(employee.eid)} >
                                            <Button.Content visible>Edit</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name="edit" />
                                            </Button.Content>
                                            </Button>
                                            <Button basic color='red' animated style={{marginLeft: "12px"}}
                                             onClick={ () => this.deleteEmployee(employee.eid)} >
                                            <Button.Content visible>Delete</Button.Content>
                                            <Button.Content hidden><Icon name="delete"/></Button.Content>
                                            </Button>
                                    
                                                 {/* <button style={{marginLeft: "20px"}} onClick={ () => this.editEmployee(employee.eid)} className="btn btn-info">Edit </button> 
                                                 <button style={{marginLeft: "20px"}} onClick={ () => this.deleteEmployee(employee.eid) } className="btn btn-danger ">Delete </button> 
                                                 <button style={{marginLeft: "20px"}} onClick={ () => this.viewEmployee(employee.eid)} className="btn btn-info">View </button> 
                                                     */}
                                             </td> 
                                        </tr> 
                                    ) 
                                } 
                            </tbody> 
                        </Table> 
                 </div> 
            </div> 
        ) 
    } 
} 
 
export default ListEmployeeComponent 