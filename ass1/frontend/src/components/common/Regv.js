import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Regv = (props) => {
  const [managername, setmName] = useState("");
  const [shopname, setsName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
    //const [vendor,setVendor] = useState("");
  //const [age,setAge] = useState("");

  const onChangemname = (event) => {
    setmName(event.target.value);
  };

  
  const onChangesName = (event) => {
    setsName(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeNumber = (event) => {
    setNumber(event.target.value);
  };
//   const onChangeVendor = (event) => {
//     setVendor(event.target.value);
//   };

  const resetInputs = () => {
    setmName("");
    setsName("");
    setEmail("");
    setNumber("");
    //setVendor("");
    
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      managername: managername,
      shopname: shopname,
      email: email,
      number: number,
      
    };


    axios
      .post("http://localhost:4000/register/vendors", newUser)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();
  };

  return (
    <Grid container align={"center"} spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="managerName"
          variant="outlined"
          value={managername}
          onChange={onChangemname}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="shopname"
          variant="outlined"
          value={shopname}
          onChange={onChangesName}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Number"
          variant="outlined"
          value={number}
          onChange={onChangeNumber}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

export default Regv;
