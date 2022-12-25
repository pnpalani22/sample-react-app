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
const Login =() =>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleUsernameChange=(event)=> {
        setUsername(event.target.value);
    }
    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
    }
    const handleSubmit=(e)=> {
        e.preventDefault();
        async function fetchData() {
            const response = await fetch(
                `http://localhost:8080/api/users/${username}`
            );
            const data = await response.json();
            if (data && username == data.username && password == data.password) {
                navigate("/dashboard");
            } else {
                alert('Incorrect Credentials!');
            }

        }
        fetchData();

    }
        return (
            <div>
                <AppBar position="static" alignitems="center" color="primary">
                    <Toolbar>
                        <Grid container  justifyContent="center" wrap="wrap">
                            <Grid item>
                                <Typography variant="h6">HCL</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={0}  justifyContent="center" direction="row" style={{margin:"50px"}}>
                    <Grid item>
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
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="text"
                                                    placeholder="username"
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
                                {/*<Grid item>*/}
                                    {/*<Link href="#" variant="body2">*/}
                                        {/*Forgot Password?*/}
                                    {/*</Link>*/}
                                {/*</Grid>*/}
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );

}
export default Login;