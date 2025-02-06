import { useState } from "react";

export default function Authentication() {
  const [isRegistration, setIsRegistration] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticating, setAuthenticating] = useState(false);

  return (
    <>
      <h2 className="sign-up-text">Sign Up / Login</h2>
      <p>Sign in to your account!</p>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="*********"
        type="password"
      />
      <button>
        <p>Submit</p>
      </button>
      <hr />
      <div className="register-content">
        <p>Don&apos;t have an account?</p>
        <button>
          <p>Sign up</p>
        </button>
      </div>
    </>
  );
}
