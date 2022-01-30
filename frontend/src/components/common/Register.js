import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "@mui/material/Link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles, Typography } from "@mui/material";
import { withStyles } from "@mui/material";

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

const Register = (props) => {
  const [firstName, setfName] = useState("");
  const [lastName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [batch, setBatch] = useState("");
  const [age, setAge] = useState("");
  const [shopName, setShopName] = useState("");
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");
  const [phone, setPhone] = useState("");

  const onChangeFirstName = (event) => {
    setfName(event.target.value);
  };
  const onChangeLastName = (event) => {
    setlName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeType = (event) => {
    setType(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeBatch = (event) => {
    setBatch(event.target.value);
  };
  const onChangeAge = (event) => {
    setAge(event.target.value);
  };
  const onChangeShopName = (event) => {
    setShopName(event.target.value);
  };
  const onChangeOpen = (event) => {
    setOpen(event.target.value);
  };
  const onChangeClose = (event) => {
    setClose(event.target.value);
  };
  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const resetInputs = () => {
    setfName("");
    setlName("");
    setEmail("");
    setDate(null);
    setType("");
    setPassword("");
    setBatch("");
    setAge("");
    setShopName("");
    setOpen("");
    setClose("");
    setPhone("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      firstName: firstName,
      email: email,
      date: Date.now(),
      type: type,
      password: password,
      batch: batch,
      age: age,
      shopName: shopName,
      open: open,
      close: close,
      phone: phone,
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
          <LockOutlinedIcon />
          <br />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
          <br />
          <br />
        </Typography>
        <form noValidate>
          <Grid container align={"center"} spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                required
                value={firstName}
                onChange={onChangeFirstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={onChangeLastName}
              />
            </Grid>
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
              <TextField
                label="Contact Number"
                variant="outlined"
                value={phone}
                fullWidth
                required
                onChange={onChangePhone}
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
              <TextField
                label="Shop Name"
                variant="outlined"
                value={shopName}
                fullWidth
                onChange={onChangeShopName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Opening Time"
                variant="outlined"
                value={open}
                fullWidth
                onChange={onChangeOpen}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Closing Time"
                variant="outlined"
                value={close}
                fullWidth
                onChange={onChangeClose}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Batch</InputLabel>
                <Select
                  labelId="demo-select-label"
                  id="alelelle"
                  value={batch}
                  label="Batch"
                  onChange={onChangeBatch}
                >
                  <MenuItem value={"UG1"}>UG1</MenuItem>
                  <MenuItem value={"UG2"}>UG2</MenuItem>
                  <MenuItem value={"UG3"}>UG3</MenuItem>
                  <MenuItem value={"UG4"}>UG4</MenuItem>
                  <MenuItem value={"UG5"}>UG5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Age"
                variant="outlined"
                value={age}
                fullWidth
                onChange={onChangeAge}
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" onClick={onSubmit}>
                Register
              </Button>
            </Grid>
            <Grid container align="center" justify="flex-end">
              <Grid item>
                <Link href="/login" align="center" variant="body2">
                  <br />
                  Already have an account? Log in
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

export default Register;
