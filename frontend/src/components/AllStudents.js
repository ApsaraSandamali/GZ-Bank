import React, { Component } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import AccountTableRow from './AccountTableRow';

export default class AllStudents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8070/account/')
            .then(res => {
                this.setState({
                    students: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.students.map((res, i) => {
            return <AccountTableRow obj={res} key={i} />
        });
    }
    /*
        const [students, setStudents] = useState([]);
    
        useEffect(()=>{
            function getStudents(){
                axios.get("http://localhost:8070/student/").then((res)=>{
                    setStudents(res.data);
                }).catch((err)=>{
                    alert(err.message);
                })
            }
            console.log(students);
            getStudents();
        } , [])
    
    */
    render() {
        return (
            <div class="table-wrapper">
                <Table striped border hover>
                    <thead>
                        <tr>
                            <th>Account Number</th>
                            <th>Name</th>
                            <th>NIC Number</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>

            </div>
        );
    }
}