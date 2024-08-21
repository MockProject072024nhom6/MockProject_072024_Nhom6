import { useState } from "react";
import { 
  container, loginBox, logoContainer, inputGroup, labelStyle, inputStyle, 
  passwordContainer, passwordInput, togglePassword, checkboxContainer, 
  buttonStyle, registerText, registerLink, titleStyle, allLink,
  errorMessage, errorInputStyle 
} from "../Style/tailwindStyles";
import { Eye, EyeOff } from 'lucide-react';
import logo from "../assets/logo1.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmailOrPhone = (value:string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10,11}$/;
    return emailPattern.test(value) || phonePattern.test(value);
  };

  const handleLogin = () => {
    let valid = true;

    if (!validateEmailOrPhone(username)) {
      setUsernameError("Please enter a valid email or phone number");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError("Please enter the password");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      console.log("Username:", username);
      console.log("Password:", password);
      console.log("Remember Me:", rememberMe);
    }
  };

  const isLoginDisabled = 
    !validateEmailOrPhone(username) || password === "";

  return (
    <div className={container}>
      <div className={logoContainer}>
        <img src={logo} alt="Logo" className="h-16 mx-auto" />
      </div>
      <div className={loginBox}>
        <h2 className={titleStyle}>Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={inputGroup}>
            <label htmlFor="username" className={labelStyle}>
              Enter Email or Number
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter Email or Number"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (usernameError) setUsernameError("");
              }}
              onBlur={() => {
                if (!username) setUsernameError("Please enter your email or phone number");
                else if (!validateEmailOrPhone(username)) setUsernameError("Please enter a valid email or phone number");
              }}
              className={`${inputStyle} ${usernameError ? errorInputStyle : ""}`}
            />
            {usernameError && <p className={errorMessage}>{usernameError}</p>}
          </div>
          <div className={inputGroup}>
            <label htmlFor="password" className={labelStyle}>
              Enter Password
            </label>
            <div className={passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError("");
                }}
                onBlur={() => {
                  if (!password) setPasswordError("Please enter the password");
                }}
                className={`${passwordInput} ${passwordError ? errorInputStyle : ""}`}
              />
              <span 
                className={togglePassword} 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
            {passwordError && <p className={errorMessage}>{passwordError}</p>}
          </div>
          <div className={checkboxContainer}>
            <input 
              type="checkbox" 
              id="rememberMe" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            />
            <label htmlFor="rememberMe" className="ml-2 text-black">
              Remember Me
            </label>
          </div>
          <button 
            type="button" 
            onClick={handleLogin} 
            className={buttonStyle}
            disabled={isLoginDisabled}
          >
            Login
          </button>
        </form>
        <div className={allLink}>
          <a href="#" className={registerLink}> Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
