import React from "react";
import { GoogleLogin } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const Login = ({ classes }) => {
  const onSuccess = googleUser => {
    console.log({ googleUser });
  };

  return (
    <GoogleLogin
      clientId="895850204586-sju6t2c25jpm90ksv8u3tv83bvocead2.apps.googleusercontent.com"
      onSuccess={onSuccess}
    />
  );
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
