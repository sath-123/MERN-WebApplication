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
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Users from "../../../../backend/models/Users";
import Select from '@mui/material/Select';
//mport axios from "axios";

const Buyerp = () => {
    const na = useNavigate();
    // const [name, setmanagerName] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [batch, setBatch] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangename = (event) => {
        setName(event.target.value);
    };
    const onChangeNumber = (event) => {
        setNumber(event.target.value);
    };

    const onChangeAge = (event) => {
        setAge(event.target.value);
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
            .post("http://localhost:4000/user/bprofile", newUser)
            .then((response) => {
                setUsers(response.data);
                setName(response.data.name);
                // setshopName(response.data.shopname);
                setPassword(response.data.password);
                setAge(response.data.age);
                setBatch(response.data.batch);
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
    const onChangeBatch = (event) => {
        setBatch(event.target.value);
    };
    //setshopName(users.shopname);
    let newusers = {
        name: name,
        //shopname:shopname,
        email: email,
        number: number,
        age: age,
        batch: batch,
        password: password
    }

    const onSubmit = (event) => {
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
            .post("http://localhost:4000/user/bedit", newusers)
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

                    <Button color="inherit" onClick={() => na("/login/buyer")}>
                        Buyer Home
                    </Button>


                    <Button color="inherit" onClick={() => na("/myorders")}>
                        my orders
                    </Button>
                    <Button color="inherit" onClick={() => na("/fav")}>
                        favorites
                    </Button>
                    <Button color="inherit" onClick={() => na("/walletadd")}>
                        changewalletamount
                    </Button>
                    <Button color="inherit" onClick={() => na("/")}>
                        logout
                    </Button>
                    {/* <Button color="inherit" onClick={onsubmit}>Logout</Button> */}
                </Toolbar>
            </AppBar>
            <h1>name: {users.name}</h1>
            <h1>email: {users.email}</h1>
            <h1>number: {users.number}</h1>
            <h1>Age: {users.age}</h1>
            <h1>batch: {users.batch}</h1>
            <h1>password: {users.password}</h1>

            <Grid spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="name"
                        variant="outlined"
                        value={name}
                        onChange={onChangename}

                    ></TextField>
                </Grid>
                {/* <Grid item xs={12}>
                    <TextField
                        label="shopname"
                        variant="outlined"
                        value={shopname}
                        onChange={onChangeshopName}
                    ></TextField>
                </Grid> */}
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
                        label="age"
                        variant="outlined"
                        value={age}
                        onChange={onChangeAge}
                    ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <InputLabel id="demo-simple-select-label">Batch name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={batch}
                        label="batch"
                        onChange={onChangeBatch}
                    >
                        <MenuItem value="UG1">UG1</MenuItem>
                        <MenuItem value="UG2">UG2</MenuItem>
                        <MenuItem value="UG3">UG3</MenuItem>
                        <MenuItem value="UG4">UG4</MenuItem>
                        <MenuItem value="UG5">UG5</MenuItem>
                        {/* <MenuItem value="Vendor">Vendor</MenuItem> */}
                    </Select>
                    {/* <TextField
                        label="batch"
                        variant="outlined"
                        value={batch}
                        onChange={onChangeBatch}
                    ></TextField> */}
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
export default Buyerp;