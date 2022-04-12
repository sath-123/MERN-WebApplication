import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import { useState, useEffect } from "react";
//import axios from "axios";
import Paper from "@mui/material/Paper";
//import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
//import Button from "@mui/material/Button";
//import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

//import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
//import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const Addfooditem = () => {
    const na=useNavigate();
    //const [name, setName] = useState("");
    //const [shopname, setsName] = useState("");
    const [email, setEmail] = useState("");
    const [foodname, setFoodname] = useState("");
    const [price, setPrice] = useState("");
    const [Addon, setAddon] = useState("");
    const [varity, setVarity] = useState("");
    const [quantitythere, setQt] = useState("");
    //   const [dummy, setDummy] = useState("0");


    //const [role, setRole] = useState("");
    //const navi = useNavigate();

      const onChangeVarity = (event) => {
        setVarity(event.target.value);
      };
      const onChangeQt = (event) => {
        setQt(event.target.value);
      };




    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangeFoodname = (event) => {
        setFoodname(event.target.value);
    };

      const onChangePrice = (event) => {
        setPrice(event.target.value);
      };
      const onChangeAddon = (event) => {
        setAddon(event.target.value);
      };
    
    // const resetInputs = () => {
    //   setName("");
    //   setshopName("");
    //   setEmail("");
    //   setDate("");
    //   setAge("");
    const resetInputs = () => {
        //setName("");
        //setshopName("");
        setEmail("");
        setFoodname("");
        setPrice("");
        setAddon("");
        setVarity("");
        setQt("");

    };
    // const newUser = {
    //     //name: name,
    //     email: email,
    //     foodname: foodname,
    //     //age: age,

    // };

    const onSub = (event) => {
        const newFood = {
            //name: name,
            email: localStorage.getItem("email"),
            foodname: foodname,
            price: price,
            Addon:Addon,
            varity:varity,
            quantitythere:quantitythere

        };


        axios
            .post("http://localhost:4000/user/vendoradd", newFood)
            .then(response => {
                if (response.data === 0) {
                    alert("enter all fields");
                }
                else if (response.data === 2) {
                    alert("duplicate")
                }
                else {
                    alert("succuess");
                }
            });
        resetInputs();

    }
    return (
        // <div>
        //     <h1>hello</h1>
        // </div>
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
                    <Button color="inherit" onClick={()=>na("/login/vendor")}>
                        view products
                    </Button>
                    <Button color="inherit">
                        my orders
                    </Button>
                    <Button color="inherit">
                        My Profiles
                    </Button>
                </Toolbar>
            </AppBar>
            <Grid container align={"center"} spacing={2}>
                {/* <Grid item xs={12}>
                    <TextField
                        label="email"
                        variant="outlined"
                        value={email}
                        onChange={onChangeEmail}
                    />
                </Grid> */}
                <Grid item xs={12}>
                    <TextField
                        label="foodname"
                        variant="outlined"
                        value={foodname}
                        onChange={onChangeFoodname}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="price"
                        variant="outlined"
                        value={price}
                        onChange={onChangePrice}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Addon"
                        variant="outlined"
                        value={Addon}
                        onChange={onChangeAddon}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="varity"
                        variant="outlined"
                        value={varity}
                        onChange={onChangeVarity}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="quantitythere"
                        variant="outlined"
                        value={quantitythere}
                        onChange={onChangeQt}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={onSub}>Addfood</Button>
                </Grid>
            </Grid>
        </Box>









    );


};
export default Addfooditem;