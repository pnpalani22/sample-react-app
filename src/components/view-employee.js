import { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {useNavigate} from 'react-router-dom';
import {
    Button,
    Grid as MatGrid,
    Paper as matPaper,
} from "@material-ui/core";
const columns = [
    { name: 'id', title: 'ID' },
    { name: 'name', title: 'User Name' },
    {name : 'emp_name', title :'Employee Name'},
    { name: 'address', title: 'Address' },
    {name:'dob',title:'Date of Birth'},
    {name:'gender', title:'Gender'},
    {name:'department', title:'Department'},
    {name:'status', title:'status'}];


const ViewEmployee = () => {
    const [rows, setRows] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `http://localhost:8080/api/employees`
            );
            const data = await response.json();
            const rows=data.map((obj,index)=>{
                const row={};
                row.id=obj.id;
                row.emp_name=obj.empName;
                row.name=obj.username;
                row.address=obj.address;
                row.dob=obj.dob;
                row.gender=obj.gender;
                row.department=obj.department ? obj.department.name : '';
                row.status= (obj.active==true) ? 'active' :'inactive';
                return row;
            });
            console.log("employee data==>",rows);
            setRows(rows);
            console.log("employee data==>",data);

        }
        fetchData();
    }, []);

    const handleCreateEmployee=()=>{
        navigate('/addEmployee');
    }

        return (
            <>
            <MatGrid item>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="button-block"
                    onClick={handleCreateEmployee}
                >
                    Add New Employee
                </Button>
            </MatGrid>
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <Table />
                    <TableHeaderRow />
                </Grid>
            </Paper>
            </>
        );

};

export default ViewEmployee;
