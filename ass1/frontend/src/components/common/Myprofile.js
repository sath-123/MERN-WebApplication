import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Users from "../../../../backend/models/Users";

//mport axios from "axios";

const Myprofile = () => {
    const na = useNavigate();
    const [managername, setmanagerName] = useState("");
    const [shopname, setshopName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [opening,setOpening]=useState("");
    const [closing,setClosing]=useState("");
    const [password,setPassword]=useState("");
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangeManagername = (event) => {
        setmanagerName(event.target.value);
    };
    const onChangeNumber = (event) => {
        setNumber(event.target.value);
    };
    const onChangeOpening = (event) => {
        setOpening(event.target.value);
    };
    const onChangeClosing = (event) => {
        setClosing(event.target.value);
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };


    let string = localStorage.getItem("email");
    let newUser = {
        email: localStorage.getItem("email")
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .post("http://localhost:4000/user/profile", newUser)
            .then((response) => {
                setUsers(response.data);
                setmanagerName(response.data.managername);
                setshopName(response.data.shopname);
                setPassword(response.data.password);
                setOpening(response.data.opening);
                setClosing(response.data.closing);
                setEmail(response.data.email);
                setNumber(response.data.number);
                // if(response.data===1)
                // {
                //     alert("hhh")
                // }
                //setSortedUsers(response.data);
                //setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    //users.email="chikky2";
    const onChangeshopName = (event) => {
        setshopName(event.target.value);
    };
    //setshopName(users.shopname);
    let newusers={
        managername:managername,
        shopname:shopname,
        email:email,
        number:number,
        opening:opening,
        closing:closing,
        password:password
    }

    const onSubmit =(event) =>{
        // useEffect(() => {
        //     axios
        //         .post("http://localhost:4000/user/edit", newUser)
        //         .then((response) => {
        //             setUsers(response.data);
        //             // if(response.data===1)
        //             // {
        //             //     alert("hhh")
        //             // }
        //             //setSortedUsers(response.data);
        //             //setSearchText("");
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // }, []);
        axios
        .post("http://localhost:4000/user/edit", newusers)
        .then((response) => {
            setUsers(response.data)
          
        });

    }


    return (


        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ cursor: "pointer" }}
                        onClick={() => na("/")}
                    >
                        Canteen Portal
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="inherit" onClick={() => na("/login/vendor")} >
                        Vendor Home
                    </Button>
                    <Button color="inherit" onClick={() => na("/vendororder")}>
                        my orders
                    </Button>
                    <Button color="inherit" onClick={() => na("/stat")}>
                        Statiscis
                    </Button>
                    <Button color="inherit" onClick={() => na("/")}>Logout</Button>
                    {/* <Button color="inherit" onClick={onsubmit}>Logout</Button> */}
                </Toolbar>
            </AppBar>
            <h1>managername: {users.managername}</h1>
            <h1>shopname: {users.shopname}</h1>
            <h1>email: {users.email}</h1>
            {/* <h1>shopname: {users.shopname}</h1> */}
            <h1>number: {users.number}</h1>
            <h1>Opening: {users.opening}</h1>
            <h1>Closing: {users.closing}</h1>
            <h1>password:{users.password}</h1>
            <Grid spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="managername"
                        variant="outlined"
                        value={managername}
                        onChange={onChangeManagername}

                    ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="shopname"
                        variant="outlined"
                        value={shopname}
                        onChange={onChangeshopName}
                    ></TextField>
                </Grid>
                 <Grid item xs={12}>
                    <TextField
                        label="email"
                        value={email}
                        variant="outlined"
                        onChange={onChangeEmail}
                    ></TextField>
                </Grid> 
                 <Grid item xs={12}>
                    <TextField
                        label="number"
                        variant="outlined"
                        value={number}
                        onChange={onChangeNumber}
                    ></TextField>
                </Grid> 
                <Grid item xs={12}>
                    <TextField
                        label="opening"
                        variant="outlined"
                        value={opening}
                        onChange={onChangeOpening}
                    ></TextField>
                </Grid> 
                <Grid item xs={12}>
                    <TextField
                        label="closing"
                        variant="outlined"
                        value={closing}
                        onChange={onChangeClosing}
                    ></TextField>
                </Grid> 
                <Grid item xs={12}>
                    <TextField
                        label="password"
                        variant="outlined"
                        value={password}
                        onChange={onChangePassword}
                    ></TextField>
                </Grid> 
                
                
                <Button variant="contained" onClick={onSubmit}>Edit</Button>
            </Grid>
            {/* <button variant="contained" onClick={() => na("/addfooditem")}>Add food</button> */}
            {/* <Grid item xs={12} md={9} lg={9}>
                <Paper>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell> Sr No.</TableCell>
                                {/* <TableCell>
                                    {" "}
                                    <Button onClick={sortChange}>
                                        {sortName ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                    </Button>
                                    Date
                                </TableCell> */}
            {/* <TableCell>Name</TableCell> */}
            {/* <TableCell>Foodname</TableCell> */}
            {/* <TableCell>Email</TableCell> */}
            {/* <TableCell>Delete</TableCell> */}
            {/* </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, ind) => (
                                <TableRow key={ind}>
                                    <TableCell>{ind}</TableCell>
                                    {/* <TableCell>{user.foodname}</TableCell> */}


            {/* <TableCell>{user.email}</TableCell>
                                    

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid> */}
        </Box>


    );


};
export default Myprofile;