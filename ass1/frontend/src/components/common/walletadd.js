import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// 

//const [dum, setDum] = useState("0");

const Walletadd = (props) => {
    //const [managername, setmName] = useState("");
    //const [shopname, setsName] = useState("");
    const [wallet, setWallet] = useState();
    const [password, setPassword] = useState("");
    //const [age,setAge] = useState("");
    const [dumm, setDumm] = useState(0);
    // var dad=0;
    const [dum, setDum] = useState(0);
    const [users, setUsers] = useState([]);
    //setDumm(10)

    var s = 0;
    var p = 0;

    //   const onChangemname = (event) => {
    //     setmName(event.target.value);
    //   };

    const navigate = useNavigate();
    //   const onChangesName = (event) => {
    //     setsName(event.target.value);
    //   };
    const onChangeWallet = (event) => {
        setWallet(event.target.value);
    };


    const resetInputs = () => {
        // setmName("");
        // setsName("");
        setWallet("");
        // setPassword("");

    };

    const onSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            //managername: managername,
            //shopname: shopname,
            email: localStorage.getItem("email"),
            wallet: wallet,
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










    }


    return (
        <Grid container align={"center"} spacing={2}>

            <Box sx={{ flexGrow: 1 }} style={{ margin: " 0% 0% 0% 0% " }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ cursor: "pointer" }}
                            onClick={() => navigate("/")}
                        >
                            Canteen Portal
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                       
                        <Button color="inherit" onClick={() => navigate("/login/buyer")}>
                            Buyer Home
                        </Button>
                        <Button color="inherit" onClick={() => navigate("/buyerprofile")} >
                            profile
                        </Button>
                        <Button color="inherit" onClick={() => navigate("/myorders")}>
                            my orders
                        </Button>
                        <Button color="inherit" onClick={() => navigate("/fav")}>
                            favorites
                        </Button>
                       
                        <Button color="inherit" onClick={() => navigate("/")}>
                            logout
                        </Button>

                    </Toolbar>
                </AppBar>
            </Box>

            <Grid item xs={12}>
                <TextField
                    label="wallet"
                    variant="outlined"
                    value={wallet}
                    onChange={onChangeWallet}
                />
            </Grid>


            {/* {dum === 3 && navigate("/login/buyer")}
      {dum === 4 && navigate("/login/vendor")} */}


            <Grid item xs={12}>
                <Button variant="contained" onClick={onSubmit}>
                    changewalletamount
                </Button>
            </Grid>






        </Grid>
    );
};

export default Walletadd;
