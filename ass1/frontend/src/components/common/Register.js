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
import BasicSelect from "./Selectvu";
// import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//import Button from "@mui/material/Button";

const Register = () => {
  // alert("in registration page");
  // window.location.reload(false);
  const [name, setName] = useState("");
  //const [shopname, setsName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");
  const [shopname, setshopName] = useState("");
  const [password, setPassword] = useState("");
  const [batch, setBatch] = useState("");
  const [opening, setOpening] = useState("");
  const [closing, setClosing] = useState("");
  const [sath, setSath] = useState("");
  const [wallet, setWallet] = useState("");



  const [number, setNumber] = useState("");
  const [managername, setManagername] = useState("");
  const [dummy, setDummy] = useState("0");


  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const onChangename = (event) => {
    setName(event.target.value);
  };
  const onChangeWallet = (event) => {
    setWallet(event.target.value);
  };
  const onChangepassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangebatch = (event) => {
    setBatch(event.target.value);
  };



  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeOpening = (event) => {
    setOpening(event.target.value);
  };
  const onChangeClosing = (event) => {
    setClosing(event.target.value);
  };
  const onChangeManagername = (event) => {
    setManagername(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };
  const onChangeAge = (event) => {
    setAge(event.target.value);
  };
  const onChangeNumber = (event) => {
    setNumber(event.target.value);
  };
  const onChangeshopName = (event) => {
    setshopName(event.target.value);
  };
  // const onChangeWallet = (event) => {
  //   setWallet(event.target.value);
  // };

  // const resetInputs = () => {
  //   setName("");
  //   setshopName("");
  //   setEmail("");
  //   setDate("");
  //   setAge("");
  //   setNumber("");
  //   setManagername("");

  // };
  const handleChange = (event) => {
    setRole(event.target.value);
    if (event.target.value === "Buyer") {
      setDummy(5);
      setSath(7);
    }
    if (event.target.value === "Vendor") {
      setDummy(6);
      setSath(7);
    }

  };

  const onSubmit = (event) => {
    //navi("/login/buyer")
    // event.preventDefault();
    if (dummy === 5) {
      const resetInputs = () => {
        setName("");
        //setshopName("");
        setEmail("");
        setNumber("");
        setAge("");
        setBatch("");
        setPassword("");
        setWallet("");
        //setNumber("");
        //setManagername("");

      };
      const newUser = {
        name: name,
        email: email,
        number: number,
        age: age,
        batch: batch,
        password: password,
        wallet: wallet,

      };
      axios
        .post("http://localhost:4000/register/buyers", newUser)
        .then((response) => {
          if (response.data === 0) {
            alert("already there")
          }
          else if (response.data === 1) {
            alert("provide all details");
          }
          else if (response.data === 2) {
            alert("mismatch details");
          }
          else {
            alert("ur registration completed succesfully")
          }

        });

      resetInputs();
    }
    else {

      const resetInputs = () => {
        //setName("");
        setManagername("");
        setshopName("");
        setEmail("");
        //setDate("");
        //setAge("");
        setNumber("");
        setOpening("");
        setClosing("");
        setPassword("");
        // setWallet("");

      };
      const newVendor = {
        managername: managername,

        //email: email,
        shopname: shopname,
        email: email,
        number: number,
        opening: opening,
        closing: closing,
        password: password,
        // wallet:wallet,
        //age: age,

      };

      axios
        .post("http://localhost:4000/register/vendors", newVendor)
        .then((response) => {
          if (response.data === 1) {
            alert("email alraedy existed")
          }
          else if (response.data === 0) {
            alert("shop already there")
          }
          else if (response.data === 3) {
            alert("enetr all details")
          }
          else if (response.data === 4) {
            alert(" provide proper details")
          }
          else {
            alert("completed registration")
          }
        });

      resetInputs();
    }
    // window.location.reload(false);
  };



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
            <Button color="inherit" onClick={() => navigate("/login")}>
              login
            </Button>
            {/* <Button color="inherit" onClick={() => navigate("/register")}>
              Register

            </Button> */}
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid>
        <Box container align={"center"} xs={12} sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={handleChange}
            >
              <MenuItem value="Buyer">Buyer</MenuItem>
              <MenuItem value="Vendor">Vendor</MenuItem>
            </Select>
          </FormControl>


        </Box>
      </Grid>
      {
        dummy === 5 &&
        <Grid item xs={12}>
          <TextField
            label="name"
            variant="outlined"
            value={name}
            onChange={onChangename}
          />
        </Grid>
      }
      {
        dummy === 5 && <Grid item xs={12}>
          <TextField
            label="email"
            variant="outlined"
            value={email}
            onChange={onChangeEmail}
          />
        </Grid>
      } {
        dummy === 5 &&
        <Grid item xs={12}>
          <TextField
            label="number"
            variant="outlined"
            value={number}
            onChange={onChangeNumber}
          />
        </Grid>
      } {
        dummy === 5 && <Grid item xs={12}>
          <TextField
            label="age"
            variant="outlined"
            value={age}
            onChange={onChangeAge}
          />
        </Grid>
      }
      {
        dummy === 5 &&
        <Grid item xs={20}>
          <InputLabel id="demo-simple-select-label">Batch name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={batch}
            label="batch"
            onChange={onChangebatch}
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
            onChange={onChangebatch}
          /> */}
        </Grid>
      }

      {
        dummy === 5 &&
        <Grid type="password" item xs={12}>
          <TextField
            type="password"
            label="password"
            variant="outlined"
            value={password}
            onChange={onChangepassword}
          />
        </Grid>
      }
      {
        dummy === 5 &&
        <Grid item xs={12}>
          <TextField
            label="walletmoney"
            variant="outlined"
            value={wallet}
            onChange={onChangeWallet}
          />
        </Grid>
      }

      {
        dummy === 6 && <Grid item xs={12}>
          <TextField
            label="managerName"
            variant="outlined"
            value={managername}
            onChange={onChangeManagername}
          />
        </Grid>
      }

      {
        dummy === 6 && <Grid item xs={12}>
          <TextField
            label="shopname"
            variant="outlined"
            value={shopname}
            onChange={onChangeshopName}
          />
        </Grid>
      }
      {
        dummy === 6 && <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={onChangeEmail}
          />
        </Grid>
      }
      {
        dummy === 6 && <Grid item xs={12}>
          <TextField
            label="Number"
            variant="outlined"
            value={number}
            onChange={onChangeNumber}
          />
        </Grid>
      }
      {
        dummy === 6 && <Grid item xs={12}>
          <TextField
            label="openingtime"
            variant="outlined"
            value={opening}
            onChange={onChangeOpening}
          />
        </Grid>
      }
      {
        dummy === 6 && <Grid item xs={12}>
          <TextField
            label="closingtime"
            variant="outlined"
            value={closing}
            onChange={onChangeClosing}
          />
        </Grid>
      }
      {
        dummy === 6 && <Grid type="password" item xs={12}>
          <TextField
            type="password"
            label="password"
            variant="outlined"
            value={password}
            onChange={onChangepassword}
          />
        </Grid>
      }
      {
        sath === 7 && <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit}>
            Register
          </Button>
        </Grid>
      }

     </Grid>
  );
};

export default Register;
