import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./FakeLoginPage.module.css";

const FakeLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a fake login by checking for specific values
    if (username.toLowerCase() === "demo" && password === "password123") {
      navigate("/Loggedin");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login Page</h1>
      <label className={styles.label}>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
      </label>
      <br />
      <label className={styles.label}>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
      </label>
      <div className={styles.forgot}>
        <div>
          <p>Forgot Password?</p>
        </div>
        <div>
          <p>Create Account</p>
        </div>
      </div>
      <br />

      <button onClick={handleLogin} className={styles.button}>
        Login
      </button>
    </div>
  );
};

export default FakeLoginPage;
