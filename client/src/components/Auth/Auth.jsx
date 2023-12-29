import React, {useState} from "react";
import {Avatar, Button, Paper, Grid, Typography, Container} from "@material-ui/core";
import useStyles from "./style";
import {IoLockClosedOutline} from "react-icons/io5";
import Input from "./Input";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyles();
  const isSignup = false;

  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
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
            spacing={1}>
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
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autofocus
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
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
