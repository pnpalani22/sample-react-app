import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
} from "@material-ui/core";
import {useNavigate} from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AddNewEmployee =() =>{
  const [username,setUsername]=useState('');
  const [empName,setEmpName]=useState('');
  const [password,setPassword]=useState('');
  const [address,setAddress]=useState('');
  const [dob,setDob]=useState('');
  const [department,setDepartment]=useState('');
  const [status,setStatus]=useState('');
  const [gender,setGender]=useState('');
  const navigate=useNavigate();
  const [successMsg,setSuccessMsg]=useState('');
  const [error,setError]=useState('');
  const [departmentList,setDepartmentList]=useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:8080/api/departments`
      );
      const data = await response.json();
      setDepartmentList(data);
    }
    fetchData();
  }, []);

  useEffect(()=>{
    if(error){
      setError('');
    }
  }, [username,password,address,department,status,gender,dob,empName])



  const handleUsernameChange=(event)=> {
    setUsername(event.target.value);
    setSuccessMsg('');

  }
  const handlePasswordChange=(event)=>{
    setPassword(event.target.value);
    setSuccessMsg('');

  }
  const handleAddressChange=(event)=> {
    setAddress(event.target.value);
    setSuccessMsg('');

  }
  const handleDobChange=(event)=>{
    setDob(event.target.value);
    setSuccessMsg('');

  }
  const handleDepartmentChange=(event)=> {
    setDepartment(event.target.value);
    setSuccessMsg('');

  }
  const handleStatusChange=(event)=>{
    setStatus(event.target.value);
    setSuccessMsg('');

  }
  const handleGenderChange=(event)=> {
    setGender(event.target.value);
    setSuccessMsg('');

  }
  const handleEmpName=(event)=>{
    setEmpName(event.target.value);
    setSuccessMsg('');
  }

  const reset=()=>{
    setUsername('');
    setPassword('');
    setGender('');
    setDepartment('');
    setDob('');
    setAddress('');
    setStatus('');
    setEmpName('');
  }
  const handleSubmit=(e)=> {
    e.preventDefault();
    async function fetchData() {
      const employee={empName:empName,username:username,password,address,dob,active : status==='active' ? true : false,gender,department :{name:department}}
      const response = await fetch(
        `http://localhost:8080/api/employees`,
        { method: "POST",body: JSON.stringify(employee), headers: {
          "Content-type": "application/json; charset=UTF-8"
        }}
      );
      const data = await response.json();
      if(data.id && data.empName && data.username && data.address && data.dob){
        reset();
        setSuccessMsg('true');
      }else{
        setError('check input values');
      }


    }
    if(username && password && address && status && gender && department && dob){
      fetchData();
    }else{
      setError('check input values');
    }



  }
  return (
    <div>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container  justifyContent="center" wrap="wrap">
            <Grid item>
              <Typography variant="h6">ADD New Employee Screen</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="button-block"
              onClick={()=> navigate('/dashboard')}
            >
              DashBoard
            </Button>
          </Grid>

          <Grid item style={{marginLeft:'20px'}}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="button-block"
              onClick={()=> navigate('/')}
            >
              Logout
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0}  justifyContent="center" direction="row" style={{margin:"50px"}}>
        <Grid item style={{width:'600px'}}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
            className="login-form"
          >
            <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
            >
              {successMsg==='true' && <Grid item>
                <Typography component="h1" variant="h5" style={{color:"#00ff00"}}>
                  Record inserted successfully
                </Typography>
              </Grid>}
              {error && <Grid item>
                <Typography component="h1" variant="h5" style={{color:"#ff0000"}}>
                  {error}
                </Typography>
              </Grid>}
              <Grid item>
                <Typography component="h1" variant="h5">
                  New Employee Details
                </Typography>
              </Grid>
              <Grid item>
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="User Name"
                        fullWidth
                        name="username"
                        variant="outlined"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="Employee Name"
                        fullWidth
                        name="employeeName"
                        variant="outlined"
                        value={empName}
                        onChange={handleEmpName}
                        required
                        autoFocus
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        type="password"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="address"
                        fullWidth
                        name="address"
                        variant="outlined"
                        value={address}
                        onChange={handleAddressChange}
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="MM-DD-YYYY"
                        fullWidth
                        name="dob"
                        variant="outlined"
                        value={dob}
                        onChange={handleDobChange}
                        required
                      />
                    </Grid>
                    {/*<Grid item>*/}
                    {/*<TextField*/}
                    {/*type="text"*/}
                    {/*placeholder="Department Name"*/}
                    {/*fullWidth*/}
                    {/*name="department"*/}
                    {/*variant="outlined"*/}
                    {/*value={department}*/}
                    {/*onChange={handleDepartmentChange}*/}
                    {/*required*/}
                    {/*autoFocus*/}
                    {/*/>*/}
                    {/*</Grid>*/}
                    <Grid item>
                      <InputLabel id="department">Department</InputLabel>
                      <Select
                        labelId="department"
                        id="department"
                        value={department}
                        label="gender"
                        onChange={handleDepartmentChange}
                      >
                        {departmentList && departmentList.map(obj =>  <MenuItem value={obj.name}>{obj.name}</MenuItem>)}
                      </Select>
                    </Grid>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="Employee status"
                        fullWidth
                        name="status"
                        variant="outlined"
                        value={status}
                        onChange={handleStatusChange}
                        required
                      />
                    </Grid>
                    <Grid item>
                      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="gender"
                        onChange={handleGenderChange}
                      >
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>FeMale</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

}
export default AddNewEmployee;
