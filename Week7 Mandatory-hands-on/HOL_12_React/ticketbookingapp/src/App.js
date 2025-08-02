import React, { useState } from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.click}>Login</button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.click}>Logout</button>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let button;
  let greeting;
  let heading;

  if (isLoggedIn) {
    button = <LogoutButton click={() => setIsLoggedIn(false)} />;
    heading = <h1>Welcome</h1>;
  } else {
    button = <LoginButton click={() => setIsLoggedIn(true)} />;
    heading = <h1>Please Sign up.</h1>;
  }

  return (
    <div>
      {heading}
      {button}
      {greeting}
    </div>
  );
}

export default App;