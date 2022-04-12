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

const Vendororder = () => {
    var placed = 0;
    // let rejected=0;
    var cooking = 0;
    var accepted = 0;
    var rejected = 0;
    var total = 0;

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
                //setSortedUsers(response.data);
                //setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const onSubmit = (user) => {
        console.log(accepted);
        // if (accepted < 2) {
        // alert("in");
        let newuser = {
            // buyeremail: user.buyeremail,
            // vendoremail: user.vendoremail,
            // foodname: user.foodname,
            // Addon: user.Addon,
            id: user,
            status: user.status
        };
        // if (accepted < 10) {
        // console.log("in submit");

        if (user.status === "placed") {
            if (accepted < 8) {
                // console.log(newuser.status);
                newuser.status = "Accepted"
                axios
                    .post("http://localhost:4000/user/changestatus", newuser)
                    .then((response) => {
                        // setUsers(response.data);
                        //setSortedUsers(response.data);
                        //setSearchText("");
                        // console.log(response.data.status);
                        alert(response.data.status);
                        window.location.reload(false);


                    })
                    .catch((error) => {
                        console.log(error);
                    });

            }
            else
            {
                alert("can't move");
            }
            // newuser.status = "Accepted"
        }
        else if (user.status === "Accepted") {
            newuser.status = "cooking"
            axios
                .post("http://localhost:4000/user/changestatus", newuser)
                .then((response) => {
                    // setUsers(response.data);
                    //setSortedUsers(response.data);
                    //setSearchText("");
                    // console.log(response.data.status);
                    alert(response.data.status);
                    window.location.reload(false);


                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else if (user.status === "cooking") {
            newuser.status = "Readyforpickup"
            axios
                .post("http://localhost:4000/user/changestatus", newuser)
                .then((response) => {
                    // setUsers(response.data);
                    //setSortedUsers(response.data);
                    //setSearchText("");
                    // console.log(response.data.status);
                    alert(response.data.status);
                    window.location.reload(false);


                })
                .catch((error) => {
                    console.log(error);
                });
        }

        // }







    }
    const onss = (user) => {
        // console.log(accepted)
        // if (accepted < 3) {
        // console.log("in submit");
        let newuser = {
            // buyeremail: user.buyeremail,
            // vendoremail: user.vendoremail,
            // foodname: user.foodname,
            // Addon: user.Addon,
            id: user,
            status: user.status
        };
        newuser.status = "rejected"

        console.log(newuser.status);
        axios
            .post("http://localhost:4000/user/changestatus", newuser)
            .then((response) => {
                // setUsers(response.data);
                //setSortedUsers(response.data);
                //setSearchText("");
                // console.log(response.data.status);
                alert(response.data.status);
                window.location.reload(false);


            })
            .catch((error) => {
                console.log(error);
            });
        const newUser = {
            //managername: managername,
            //shopname: shopname,
            email: user.buyeremail,
            wallet: user.cost,
            // password: password,

        };
        console.log("in submit");
        //   function sath() {
        //     setDum(0);

        axios
            .post("http://localhost:4000/user/walletadd", newUser)
            .then((res) => {
                //alert("Created\t" + response.data.name);
                //console.log(response.data);
                alert("added");
                //setDum(3)
                // s = 1;

                //   alert("not registered")
                // }
            });

        // }
        // else
        // {
        //     alert("no")
        // }




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
                    <Button color="inherit" onClick={() => na("/mypro")} >
                        profile
                    </Button>
                    <Button color="inherit" onClick={() => na("/login/vendor")}>
                        Vendor Home
                    </Button>
                    <Button color="inherit" onClick={() => na("/stat")}>
                        Statiscis
                    </Button>
                    <Button color="inherit" onClick={() => na("/")}>Logout</Button>

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
                                <TableCell>buyerEmail</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Addon</TableCell>
                                <TableCell>status</TableCell>
                                <TableCell>Move to next stage</TableCell>
                                <TableCell>Reject</TableCell>
                                {/* <TableCell>Delete</TableCell>
                                <TableCell>Edit</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, ind) => (




                                <TableRow key={ind}>

                                    {(() => {
                                        // alert("jjj")
                                        if (user.status === "Accepted" || user.status === "cooking") {
                                            accepted = accepted + 1;
                                            // console.log("accep")
                                            // console.log(accepted);
                                            // alert("hhh")

                                        }
                                        // else if (user.status === "cooking") {
                                        //     cooking = cooking + 1;
                                        //     console.log("cooking");
                                        //     console.log(cooking);
                                        //     // alert("kkkk")
                                        //     // console.log(completed);
                                        // }
                                        // else if (user.status === "Readyforpickup") {
                                        //     accepted = accepted - 1;
                                        //     // console.log(accepted);
                                        // }

                                    }
                                    )()}
                                    <TableCell>{ind + 1}</TableCell>
                                    <TableCell>{user.foodname}</TableCell>
                                    <TableCell>{user.buyeremail}</TableCell>

                                    <TableCell>{user.quantity}</TableCell>
                                    <TableCell>{user.Addon}</TableCell>
                                    <TableCell>{user.status}</TableCell>

                                    <TableCell >
                                        <Button variant="contained" color="primary" onClick={() => onSubmit(user)}>movetonextstage</Button>
                                        {/* <Button variant="contained">{user.status}</Button> */}

                                    </TableCell>
                                    <TableCell >
                                        {/* <Button color="success">{user.status}</Button> */}
                                        {/* <Button variant="contained">{user.status}</Button> */}
                                        {user.status === "placed" &&
                                            <Button variant="contained" color="primary" onClick={() => onss(user._id)}>
                                                Reject
                                            </Button>}

                                    </TableCell>
                                    {/* <TableCell >

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
        </Box >


    );
};
export default Vendororder;