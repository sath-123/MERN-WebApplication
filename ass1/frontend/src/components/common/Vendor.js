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

const Vendor = () => {
    const na = useNavigate();
    const [foodname, setfoodName] = useState("");
    const [price, setPrice] = useState("");
    const [Addon, setAddon] = useState("");
    const [varity, setVarity] = useState("");
    const [quantitythere, setQt] = useState("");
    const [dum, setDum] = useState("");
    const [ids,setId]=useState("");
    // const [dum,set]
    // let id=0;
    // const [closing,setClosing]=useState("");
    // const [password,setPassword]=useState("");
    const onChangeFood = (event) => {
        setfoodName(event.target.value);
    };
    const onChangePrice = (event) => {
        setPrice(event.target.value);
    };
    const onChangeAddon = (event) => {
        setAddon(event.target.value);
    };
    const onChangeVarity = (event) => {
        setVarity(event.target.value);
    };
    const onChangeQt = (event) => {
        setQt(event.target.value);
    };
    // const onChangePassword = (event) => {
    //     setPassword(event.target.value);
    // };
    let string = localStorage.getItem("email");
    let newUser = {
        email: localStorage.getItem("email")
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .post("http://localhost:4000/user/getfood", newUser)
            .then((response) => {
                setUsers(response.data);
                //setSortedUsers(response.data);
                //setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const onSubmit = (id) => {
        let newuser = {
            id: id
        };
        //alert("entered")
        //alert("{email}")
        axios
            .post("http://localhost:4000/user/deletefood", newuser)
            .then((response) => {
                if (response.data === 4) {
                    alert("deleting")
                    window.location.reload(false);
                    // setUsers(response.data);
                }

                // alert("deleting")
                // setUsers(response.data);

                // setUsers(response.data);
                // alert("deleted")
                //setSortedUsers(response.data);
                //setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
        // swindow.location.reload(false);
        //alert("say,hi")
    }
    const onss = (id) => {
        setDum(6);
        setfoodName(id.foodname);
        setPrice(id.price);
        setAddon(id.Addon);
        setVarity(id.varity);
        setQt(id.quantitythere);
        setId(id._id);
        // setDum(6);

    }
    const ssss=()=>{
        console.log(ids);
        let newuser = {
            id: ids,
            foodname:foodname,
            price:price,
            Addon:Addon,
            varity:varity,
            quantitythere:quantitythere
        };
        //alert("entered")
        //alert("{email}")
        console.log(newuser.id)
        axios
            .post("http://localhost:4000/user/editss", newuser)
            .then((response) => {
                if (response.data === 0) {
                    alert("edited")
                    window.location.reload(false);
                    // setUsers(response.data);
                }

                // alert("deleting")
                // setUsers(response.data);

                // setUsers(response.data);
                // alert("deleted")
                //setSortedUsers(response.data);
                //setSearchText("");
            })
            .catch((error) => {
                console.log(error);
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
                    <Button color="inherit" onClick={() => na("/mypro")} >
                        profile
                    </Button>
                    <Button color="inherit" onClick={() => na("/vendororder")}>
                        my orders
                    </Button>
                    <Button color="inherit" onClick={() => na("/stat")}>
                        Statiscis
                    </Button>
                    <Button color="inherit" onClick={() => na("/")}>Logout</Button>
                </Toolbar>
            </AppBar>
            <h1>{string}</h1>
            {dum === 6 && <Grid item xs={12}>
                <TextField
                    label="foodname"
                    variant="outlined"
                    value={foodname}
                    onChange={onChangeFood}
                />
            </Grid>}
            {dum === 6 && <Grid item xs={12}>
                <TextField
                    label="price"
                    variant="outlined"
                    value={price}
                    onChange={onChangePrice}
                />
            </Grid>}
            {dum === 6 && <Grid item xs={12}>
                <TextField
                    label="Addon"
                    variant="outlined"
                    value={Addon}
                    onChange={onChangeAddon}
                />
            </Grid>}
            {dum === 6 && <Grid item xs={12}>
                <TextField
                    label="varity"
                    variant="outlined"
                    value={varity}
                    onChange={onChangeVarity}
                />
            </Grid>}
            {dum === 6 && <Grid item xs={12}>
                <TextField
                    label="quantitythere"
                    variant="outlined"
                    value={quantitythere}
                    onChange={onChangeQt}
                />
            </Grid>}
            {dum ===6 &&<Button variant="contained" color="primary"  onClick={() => ssss()}> save</Button>}

            <Button variant="contained" color="primary" onClick={() => na("/addfooditem")}>Add food</Button>
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
                                {/* <TableCell>Email</TableCell> */}
                                <TableCell>Price</TableCell>
                                <TableCell>Addon</TableCell>
                                <TableCell>Varity</TableCell>
                                <TableCell>Quantitythere</TableCell>
                                <TableCell>Delete</TableCell>
                                <TableCell>Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, ind) => (
                                <TableRow key={ind}>
                                    <TableCell>{ind + 1}</TableCell>
                                    <TableCell>
                                        {user.foodname}

                                    </TableCell>
                                    <TableCell>
                                        {user.price}

                                    </TableCell>

                                    <TableCell>
                                        {user.Addon}
                                    </TableCell>
                                    <TableCell>
                                        {user.varity}
                                    </TableCell>
                                    <TableCell>
                                        {user.quantitythere}
                                    </TableCell>

                                    <TableCell >

                                        <Button
                                            variant="contained" color="success" onClick={() => onSubmit(user._id)}
                                        >delete</Button>
                                    </TableCell>
                                    <TableCell >

                                        <Button
                                            variant="contained" color="primary" onClick={() => onss(user)}
                                        >edit</Button>
                                    </TableCell>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Box>


    );
};
export default Vendor;