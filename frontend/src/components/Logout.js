import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Button } from "semantic-ui-react";

const clientId =
'982850187403-ead9nrhv3rbfb9jp5ju4d589tkanvvqg.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logged out successfully!');
    alert('Logged out successfully!');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        render={(renderProps) => (
            <Button
              basic
              color="blue"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Log Out
            </Button>
          )}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;