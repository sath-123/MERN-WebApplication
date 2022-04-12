import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// 
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }} style={{margin :" 0% 0% 0% 0% "}}>
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

          {/* <h1>Welcome to SPR</h1> */}
          {/* <Button color="inherit" onClick={() => navigate("/profile")}>
            My Profile
          </Button> */}
          
          {/* <Button color="inherit" onClick={() => navigate("/users")}>
            users
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
