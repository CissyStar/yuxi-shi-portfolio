import "./index.scss";
import { useState } from "react";
import { registerNewUser, signInWithEmail } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const registerUser = (event) => {
    event.preventDefault();
    registerNewUser(email, password);
  };

  const logUserIn = (event) => {
    event.preventDefault();
    signInWithEmail(email, password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {!showSignup && (
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <input type="text" palceholder="Email" onChange={updateEmail} />
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={updatePassword}
              />
              <br />
              <input
                type="submit"
                value="Log in"
                onClick={logUserIn}
                className="submit"
              />
            </form>
          </div>
        )}

        {/* Signup button */}
        {!showSignup && (
          <button
            className="sign-up-bottom"
            onClick={() => setShowSignup(true)}
          >
            Sign up
          </button>
        )}
        {/* Sign up form */}
        {showSignup && (
          <div className="register-form">
            <h2>Register</h2>
            <form>
              <input type="text" palceholder="Email" onChange={updateEmail} />
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={updatePassword}
              />
              <br />
              <input
                type="submit"
                value="Submit"
                onClick={registerUser}
                className="submit"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
