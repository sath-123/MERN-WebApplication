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

//mport axios from "axios";

const Fav = () => {
    const na = useNavigate();
    let string = localStorage.getItem("email");
    let newUser = {
        email: localStorage.getItem("email")
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .post("http://localhost:4000/user/findfav", newUser)
            .then((response) => {
                setUsers(response.data);
                console.log(response.data);
                //setSortedUsers(response.data);
                //setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    

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
                   
                    <Button color="inherit" onClick={() =>na("/login/buyer")} >
                        buyer home
                    </Button>
                   
                    <Button color="inherit" onClick={() => na("/buyerprofile")} >
                        profile
                    </Button>
                    <Button color="inherit" onClick={() => na("/myorders")}>
                        my orders
                    </Button>
                    
                    <Button color="inherit" onClick={() => na("/walletadd")}>
                        changewalletamount
                    </Button>
                    <Button color="inherit" onClick={() => na("/")}>
                        logout
                    </Button>
                </Toolbar>
            </AppBar>
            <h1>{string}</h1>
            {/* <button variant="contained" onClick={() => na("/addfooditem")}>Add food</button> */}
            <Grid item xs={12} md={9} lg={9}>
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
                                <TableCell>Foodname</TableCell>
                                <TableCell>vendorEmail</TableCell>
                                {/* <TableCell>Quantity</TableCell> */}
                                <TableCell>Addon</TableCell>
                                {/* <TableCell>Delete</TableCell>
                                <TableCell>Edit</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, ind) => (
                                <TableRow key={ind}>
                                    <TableCell>{ind+1}</TableCell>
                                    <TableCell>{user.foodname}</TableCell>
                                    {/* <TableCell>{user.quantity}</TableCell> */}

                                    <TableCell>{user.vendoremail}</TableCell> 
                                    <TableCell>{user.Addon}</TableCell>
                                    {/* <TableCell >

                                        <button
                                            variant="contained" onClick={()=>onSubmit(user._id)}
                                        >delete</button>
                                    </TableCell>
                                    <TableCell >

                                        <button
                                            variant="contained" 
                                        >edit</button>
                                    </TableCell> */}


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Box>


    );
};
export default Fav;