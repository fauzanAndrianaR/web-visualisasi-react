import  { useState } from 'react';

const LoginForm = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`login-form-container ${isActive ? 'active' : ''}`}>
      <i
        className="fas fa-times"
        id="form-close"
        onClick={() => setIsActive(false)}
      ></i>
      <form action="">
        <h3>Sign In</h3>
        <input type="email" className="box" placeholder="Enter your email" />
        <input
          type="password"
          className="box"
          placeholder="Enter your password"
        />
        <input type="submit" value="Login" className="btn" />
        <input type="checkbox" id="remember" />
        <label htmlFor="remember"> Remember me</label>
        <p>
          Forgot Password? <a href="#">Click Here</a>
        </p>
        <p>
          Dont have an account? <a href="#">Register Now</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
