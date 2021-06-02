import React from "react";
import { GoogleLogin } from "react-google-login";
// import { refreshTokenSetup } from "./utils/refreshToken";
import { Button } from "semantic-ui-react";

const clientId =
  "982850187403-ead9nrhv3rbfb9jp5ju4d589tkanvvqg.apps.googleusercontent.com";

function Login() {
  // const onSuccess = (res) => {
  //   console.log("Login Success: currentUser:", res.profileObj);
  //   alert(`Logged in successfully! Welcome, ${res.profileObj.name}. \n`);
  //   refreshTokenSetup(res);
  // };

  // const onFailure = (res) => {
  //   console.log("Login failed: res:", res);
  //   alert(`Failed to log in.`);
  // };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <Button
            primary
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Log In
          </Button>
        )}
        // onSuccess={onSuccess}
        // onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
