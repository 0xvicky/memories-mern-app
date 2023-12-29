import React from "react";
import {
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  Visibility,
  VisibilityOff
} from "@material-ui/core";
import {MdOutlineVisibility, MdOutlineVisibilityOff} from "react-icons/md";

const Input = ({
  half,
  name,
  handleChange,
  label,
  autofocus,
  type,
  handleShowPassword
}) => {
  return (
    <Grid
      xs={10}
      sm={half ? 6 : 12}
      spacing={2}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        variant='outlined'
        margin='normal'
        fullWidth
        required
        type={type}
        autofocus={autofocus}
        InputProps={
          name === "password" && {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? (
                    <MdOutlineVisibility fontSize={28} />
                  ) : (
                    <MdOutlineVisibilityOff fontSize={28} />
                  )}
                </IconButton>
              </InputAdornment>
            )
          }
        }
      />
    </Grid>
  );
};

export default Input;
