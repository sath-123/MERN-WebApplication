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

const Stat = () => {
    const na = useNavigate();
    let string = localStorage.getItem("email");
    let newUser = {
        email: localStorage.getItem("email")
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .post("http://localhost:4000/user/vendororder", newUser)
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

    var placed = 0;
    // let rejected=0;
    var completed = 0;
    var pending = 0;
    var rejected = 0;


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


                    <Button color="inherit" onClick={() => na("/mypro")} >
                        profile
                    </Button>
                    <Button color="inherit" onClick={() => na("/vendororder")}>
                        my orders
                    </Button>
                    <Button color="inherit" onClick={() => na("/login/vendor")}>
                        vendor Home
                    </Button>
                    <Button color="inherit" onClick={() => na("/")}>Logout</Button>
                </Toolbar>
            </AppBar>
            <h1>{string}</h1>

            {users.map((user, ind) => (
                <>
                    {(() => {
                        // alert("jjj")
                        if (user.status === "placed") {
                            placed = placed + 1;
                            console.log(placed);
                            // alert("hhh")

                        }
                        else if (user.status === "completed") {
                            completed = completed + 1;
                            // alert("kkkk")
                            console.log(completed);
                        }
                        else if (user.status === "rejected") {
                            rejected = rejected + 1;
                        }
                        else {
                            pending = 1 + pending;
                        }
                    }
                    )()}
                </>


            ))}
            <h1>Orders placed: {placed}</h1>
            <h1>Orders completed: {completed}</h1>
            <h1>Orders pending: {pending}</h1>
            <h1>Orders rejected: {rejected}</h1>

        </Box>


    );
};
export default Stat;