import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import Link from "@mui/material/Link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/skywalker2207">
        Nikhil Agrawal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const LogIn = (props) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [type, setType] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeType = (event) => {
    setType(event.target.value);
  };

  const resetInputs = () => {
    setEmail("");
    setPassword("");
    setType("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      email: email,
      type: type,
      password: password,
    };

    axios
      .post("http://localhost:4000/user/register", newUser)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();
  };

  // const { classes } = this.props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div align="center" /* className={classes.paper} */>
        <Avatar /* className={classes.avatar} */>
          <br />
          <LoginOutlinedIcon />
          <br />
        </Avatar>
        <Typography component="h1" variant="h5">
          LogIn
          <br />
          <br />
        </Typography>
        <form noValidate>
          <Grid container align={"center"} spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                fullWidth
                required
                onChange={onChangeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="outlined"
                value={password}
                fullWidth
                required
                onChange={onChangePassword}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="User type"
                  onChange={onChangeType}
                >
                  <MenuItem value={"Vendor"}>Vendor</MenuItem>
                  <MenuItem value={"Buyer"}>Buyer</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" onClick={onSubmit}>
                LogIn
              </Button>
            </Grid>
            <Grid container align="center" justify="flex-end">
              <Grid item>
                <Link href="/register" align="center" variant="body2">
                  <br />
                  Do not have an account? Register
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LogIn;
