import React, {useEffect, useRef } from "react";
import { connect } from "react-redux";
import { addUser, getUsers } from '../actions';
// import "./SignUp.css";
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  help: {
    fontSize: "12px"
  }
}));


function SignUp ({addUser, onlineUser,getUsers,all_users}) {
  
  const classes = useStyles();
  const history = useHistory(); 
  const [input, setInput] = React.useState({})
  const [errors, setErrors] = React.useState({});
  useEffect(() => {
    getUsers()
  },[])
  var verified = useRef("true");


  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    if (input.password !== input.password2){
     errors.password = "The password doesnt equal." 
    }
    setErrors(validate({
          ...input,
          [e.target.name]: e.target.value
      }));

  }

  function handleSubmit() {
    var keys = Object.keys(input)    
    if (errors.firstname || errors.surname || errors.username || errors.password || errors.password2 || errors.email)  {
      var err = Object.keys(errors).filter(el => el !== "password2")
      var sum = "";
      err.forEach(el => {
        sum += el+" invalid!!!\n"
      })
      Swal.fire({
            icon: 'error',
            title: sum,
            showConfirmButton: false,
            timer: 1500
          })                  
    } else if (input.password !== input.password2) {
        Swal.fire({
            icon: 'error',
            title: 'Passwords do not match.',
            showConfirmButton: false,
            timer: 1500
          })        
    } else if (keys.length === 0) {
      Swal.fire({
            icon: 'error',
            title: 'Error!!! Incomplete entries',
            showConfirmButton: false,
            timer: 1500
          })        
    } else {
        addUser(input)
        Swal.fire({
          icon: 'success',
          title: 'Your account has been created successfully',
        })
        history.push('/'); 
    }
  }
  var flagName = useRef("true");
  var flagSurname = useRef("true");
  var flagUsername = useRef("true");
  var flagPass = useRef("true");
  var flagPass2 = useRef("true");
  var flagEmail = useRef("true");
  
  
  function validate(input) {
    let errors = {};
    
    if (!input.firstname) {
      errors.firstname = "Firstname is required";
    } else if (!/^[a-zA-Z\-]+$/.test(input.firstname)) {
      errors.firstname = "Firstname is invalid";
    } else {
      flagName.current = "";
     }
    
    if (!input.surname) {
      errors.surname = "Surname is required";
    } else if (!/^[a-zA-Z\-]+$/.test(input.surname)) {
      errors.surname = "Surname is invalid";
    } else {
      flagSurname.current = "";
    }
    console.log("1", input.email)
    if (!input.username) {
      errors.username = "Username is required";
    } else if (!/^[a-zA-Z0-9]+$/.test(input.username)) {
      errors.username = "Username is invalid";
    } else {
    all_users.map((us) =>{
      if (us.username === input.username){
        return errors.username = "Username is already in use"
      }
    })} 
    if(errors.username === "username") {
      flagUsername.current = ""
    }
  
    if (!input.email) {
      errors.email = "Email is required";
    } else if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(input.email)){
      errors.email = "Email is invalid"
    } else {
    all_users.map((us) =>{
      if (us.email === input.email){
        return errors.email = "Email is already in use"
    }
  })
  }
  if ( errors.email === "email"){ flagEmail.current = ""}
  
  // /(?=.*[0-9])/
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(input.password)) {
    errors.password = "Password is invalid"
  } else {
    flagPass.current = ""
  }
  if (!input.password2) {
    errors.password2 = "Password is required";
    } else if ( input.password !== input.password2) {
      errors.password2 = "Passwords doesnt equal."
    } else { flagPass2.current = ""} 
    return (errors)
  };
  console.log(errors.username)

  return ( 

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error = {flagName.current}
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleInputChange}
                helperText = {errors.firstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error = {flagSurname.current}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="surname"
                autoComplete="lname"
                onChange={handleInputChange}
                helperText = {errors.surname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error = {flagEmail.current}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
                helperText = {errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <ValidationTextField
                error = {flagUsername.current}
                variant="outlined"
                required
                fullWidth
                name="username"
                label="Username"
                id="username"
                onChange={handleInputChange}
                helperText={errors.username}
              />
            </Grid>
            <Grid item xs={12} sm ={6}>
              <TextField 
                error ={flagPass.current}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                error ={flagPass2.current}
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Repeat your password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
                helperText={errors.password2}
              />
            </Grid>
            
            
          </Grid>
          <Button
            disabled = {verified}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addUser: (body) => dispatch(addUser(body)),
    getUsers: () => dispatch(getUsers())
  }
}


const mapStateToProps = state => {
  return {
    onlineUser: state.onlineUser,
    all_users: state.all_users
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
