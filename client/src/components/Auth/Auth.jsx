import React, {useState} from "react";
import {Avatar, Button, Paper, Grid, Typography, Container} from "@material-ui/core";
import useStyles from "./style";
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import {IoLockClosedOutline} from "react-icons/io5";
import Input from "./Input";
import {FcGoogle} from "react-icons/fc";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const switchMode = () => {
    setIsSignUp(prev => !prev);
  };

  const handleSignIn = res => {
    const user_info = jwtDecode(res.credential);
    localStorage.setItem("user", JSON.stringify(user_info));
    navigate("/");
  };

  return (
    <Container
      component='main'
      maxWidth='xs'>
      <Paper
        className={classes.paper}
        elevation={3}>
        <Avatar className={classes.avatar}>
          <IoLockClosedOutline fontSize={28} />
        </Avatar>
        <Typography variant='h5'>{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}>
            {isSignup && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autofocus
                  half
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  handleChange={handleChange}
                  autofocus
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='E-Mail'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name='confirmPassword'
                label='Confirm Password'
                handleChange={handleChange}
                type={"password"}
              />
            )}
          </Grid>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            spacing={2}>
            <GoogleOAuthProvider clientId='458847142767-re2lqg9i3jk57atap59lar4aatlkrahc.apps.googleusercontent.com'>
              <GoogleLogin
                onSuccess={resCred => {
                  handleSignIn(resCred);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid
            container
            justifyContent='center'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account, SignUp"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
