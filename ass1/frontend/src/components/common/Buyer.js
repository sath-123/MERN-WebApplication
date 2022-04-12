
// import { useNavigate } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// /import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
// import Button from "@mui/material/Button";
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
// import Typography from "@mui/material/Typography";


//mport axios from "axios";

const Buyer = () => {
    const na = useNavigate();
    let string = localStorage.getItem("email");
    let newUser = {
        email: localStorage.getItem("email")
    }
    const [users, setUsers] = useState([]);
    const [ss, setSs] = useState([]);
    const [dum, setDum] = useState("");
    const [quantity, setQ] = useState("");
    const [wallet, setWallet] = useState("");
    const onChangeQ = (event) => {
        setQ(event.target.value);
    };

    useEffect(() => {
        axios
            .get("http://localhost:4000/user/buyerfood")
            .then((response) => {
                setUsers(response.data);
                //setSortedUsers(response.data);
                //setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .post("http://localhost:4000/user/getwallet", newUser)
            .then((response) => {
                // console.log(response.data.wallet);
                setWallet(response.data.wallet);
                //setSortedUsers(response.data);
                //setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    let wal = wallet - 12;
    const son = () => {
        console.log(wal);
        const newBuyer = {
            email: string,
            wallet: wal


        };
        console.log("in new");
        console.log(newBuyer.wallet);
        axios
            .post("http://localhost:4000/user/savewallet", newBuyer)
            .then((response) => {
                console.log(response.data.wallet);
                // setWallet(response.data.wallet);
                //setSortedUsers(response.data);
                //setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });

    }
    const onSubmit = () => {
        // alert("at beg");
        // var now = new Date();
        // var currentTime = now.getHours() * 60 + now.getMinutes()  ;
        const newOrder = {
            vendoremail: ss.email,
            foodname: ss.foodname,
            buyeremail: string,
            Addon: ss.Addon,
            quantity: quantity,
            wallet: wallet,
            price: ss.price,
            time:Date.now(),
            status:"placed",
            cost: (quantity)*(ss.price)

        };
        console.log("kkk");
        //    alert({foodame});
        axios
            .post("http://localhost:4000/user/orders", newOrder)
            .then((response) => {
                // alert("in fy");sponse
                console.log("ebbbb");
                if (response.data === 3) {
                    alert("oreder can't place check ur wallet");
                }
                else if (response.data === 0) {
                    alert("already order placed");
                }
                else {
                    // alert("order placed");
                    // son(wallet - ss.price);
                    let wal = wallet - ss.price*quantity;
                    console.log(wal);
                    const newBuyer = {
                        email: string,
                        wallet: wal


                    };
                    console.log("in new");
                    console.log(newBuyer.wallet);
                    axios
                        .post("http://localhost:4000/user/savewallet", newBuyer)
                        .then((response) => {
                            console.log(response.data.wallet);
                            // setWallet(response.data.wallet);
                            //setSortedUsers(response.data);
                            //setSearchText("");
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    alert("order placed");

                }
                window.location.reload(false);
                // setUsers(response.data);
                //setSortedUsers(response.data);
                //setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });


        //alert("say,hi")
    }
    const onsam = (user) => {
        const newFav = {
            vendoremail: user.email,
            foodname: user.foodname,
            buyeremail: string,
            Addon: user.Addon,
            // quantity: quantity
        };
        console.log("kkk");
        //    alert({foodame});
        axios
            .post("http://localhost:4000/user/fav", newFav)
            .then((response) => {
                // alert("in fy");sponse
                console.log("ebbbb");
                if (response.data === 0) {
                    alert("already in fav");
                }
                else {
                    alert("added to fav");
                }
                window.location.reload(false);
                // setUsers(response.data);
                //setSortedUsers(response.data);
                //setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    let date=Date.now();
    const onsath = (user) => {
        setDum(6);
        setSs(user);

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
                    <Button color="inherit" onClick={() => na("/buyerprofile")} >
                        profile
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
                </Toolbar>
            </AppBar>
            <h1>{string}</h1>
            {/* {date} */}
            <h1>wallet : {wallet}</h1>
            {/* <Grid>
                <Button color="inherit" onClick={() => son()}>
                    wallet
                </Button>
            </Grid> */}
            {dum === 6 && <Grid item xs={12}>
                <TextField
                    label="quantity"
                    variant="outlined"
                    value={quantity}
                    onChange={onChangeQ}
                />
            </Grid>
            }
            {dum === 6 &&
                <Button
                    variant="contained" color="primary" onClick={() => onSubmit()}
                >place Order</Button>
            }


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
                                <TableCell>Email</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Addon</TableCell>
                                <TableCell>varity</TableCell>
                                {/* <TableCell>quantitythere</TableCell> */}
                                <TableCell>Delete</TableCell>
                                <TableCell>AddtoFav</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, ind) => (
                                <TableRow key={ind}>
                                    <TableCell>{ind + 1}</TableCell>
                                    <TableCell>{user.foodname}</TableCell>
                                    {/* <TableCell></TableCell> */}
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.price}</TableCell>
                                    <TableCell>{user.Addon}</TableCell>
                                    <TableCell>{user.varity}</TableCell>
                                    {/* <TableCell>{user.quantitythere}</TableCell> */}
                                    <TableCell>

                                        <Button
                                            variant="contained" color="primary" onClick={() => onsath(user)}
                                        >Order</Button>
                                    </TableCell>
                                    <TableCell>

                                        <Button
                                            variant="contained" color="success" onClick={() => onsam(user)}
                                        >Add to fav</Button>
                                    </TableCell>


                                    {/* <TableCell >
                                        <Grid item xs={12}>
                                            <TextField
                                                label="quantity"
                                                variant="outlined"
                                                value={quantity}
                                                onChange={onChangeQ}
                                            />
                                        </Grid>

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
export default Buyer;