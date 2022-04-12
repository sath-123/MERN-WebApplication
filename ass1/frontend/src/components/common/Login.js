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

const Login = (props) => {
  //const [managername, setmName] = useState("");
  //const [shopname, setsName] = useState("");
  const [email, setEmail] = useState("");
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
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangepassword = (event) => {
    setPassword(event.target.value);
  };

  const resetInputs = () => {
    // setmName("");
    // setsName("");
    setEmail("");
    setPassword("");

  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      //managername: managername,
      //shopname: shopname,
      email: email,
      password: password,

    };
    //   function sath() {
    //     setDum(0);
    //  }



    // let one = "http://localhost:4000/user/login/buyer"
    // let two = "http://localhost:4000/user/login/vendor"


    // const requestOne = axios.get(one);
    // const requestTwo = axios.get(two);


    // axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
    //   const responseOne = responses[0]
    //   const responseTwo = responses[1]

    //   // use/access the results 
    // })).catch(errors => {

    //   //console.log(responseOne);
    //   // react on errors.
    // })
    // axios.all([ssss
    //   axios.post("http://localhost:4000/user/login/buyer", newUser),
    //  // axios.post("http://localhost:4000/user/login/vendor", newUser)
    // ])
    // .then((response) => {
    //       alert("Created\t");
    //       console.log("logged in");
    //     });


    // .then(axios.spread((obj1, obj2) => {
    //   // Both requests are now complete
    //   console.log(obj1.data.login + ' has ' + obj1.data.public_repos + ' public repos on GitHub');
    //   console.log(obj2.data.login + ' has ' + obj2.data.public_repos + ' public repos on GitHub');
    // }));

    // .then((response) => {ss
    //   // output of req.
    //   alert("Created");
    //   console.log(response.data);
    // });
    //   setDum(5)
    //   function sath() {
    //     setDum(0);
    //  }
    //setDum(5);
    // let s = 0;
    // axios
    //   .post("http://localhost:4000/user/login/buyer", newUser)
    //   .then((response) => {
    //     //alert("Created\t" + response.data.name);
    //     //console.log(response.data);
    //     setDumm(4)
    //     p = 1;
    //     if (response.data === 1) {

    //       //navigate("/login/buyer");
    //       //setDum(3);
    //       //p=1;
    //       setUsers(response.data);
    //       s = 1;
    //       //email=response.data.email;
    //       localStorage.setItem("email", email);
    //       alert("taking into  buyer page");
    //       //p=1;
    //       navigate("/login/buyer");
    //       // setDum(3);
    //       //dad=1;
    //     }
        
    //     // if(!response.data)
    //     // {
    //     //   alert("not in")
    //     // }
    //     // else
    //     // {
    //     //   alert("no")
    //     // }






    //   });
    // if (s !== 1) {

    axios
      .post("http://localhost:4000/user/login/vendor", newUser)
      .then((res) => {
        //alert("Created\t" + response.data.name);
        //console.log(response.data);
        //setDum(3)
        // s = 1;
        if(res.data===3)
        {
          alert("provide all details");
        }
        else if (res.data === 2) {
          //navigate("/login/vendor");
          //setDum(4);
          //s=1;

          localStorage.setItem("email", email);
          alert("going into vendor page");
          //s=1;
          navigate("/login/vendor");
          //dad=2;
          setDumm(4);
        }
        else if(res.data===1)
        {
          localStorage.setItem("email", email);
          alert("going into buyer page");
          //s=1;
          navigate("/login/buyer");
          //dad=2;
        }
        else if(res.data===0)
        {
          alert("not registered");
        }
        // else if (res.data === 3) {
        //   alert("not registered")
        // }






      });
    // }

    // if(dum===5)
    // {
    //   alert("no")
    // }







  };

  //resetInputs();


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
            <Button color="inherit" onClick={() => navigate("/register")}>
              Register
            </Button>
            <Button color="inherit" onClick={() => navigate("/profile")}>
              My Profile
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
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
          type="password"
          label="password"
          variant="outlined"
          value={password}
          onChange={onChangepassword}
        />
      </Grid>


      {/* {dum === 3 && navigate("/login/buyer")}
      {dum === 4 && navigate("/login/vendor")} */}


      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          login
        </Button>
      </Grid>






    </Grid>
  );
};

export default Login;
