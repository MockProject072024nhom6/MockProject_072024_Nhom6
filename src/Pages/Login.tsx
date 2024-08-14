import { useState } from "react";
import { 
  container, loginBox, logoContainer, inputGroup, labelStyle, inputStyle, 
  passwordContainer, passwordInput, togglePassword, checkboxContainer, 
  buttonStyle, registerText, registerLink, titleStyle, allLink 
} from "../Style/tailwindStyles";
import { Eye, EyeOff } from 'lucide-react';
import logo from "../assets/logo1.png"


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

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
              onChange={(e) => setUsername(e.target.value)}
              className={inputStyle}
            />
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
                onChange={(e) => setPassword(e.target.value)}
                className={passwordInput}
              />
              <span 
                className={togglePassword} 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
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
          <button type="button" onClick={handleLogin} className={buttonStyle}>
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