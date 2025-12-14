import { useState } from 'react';
import './Account.css';

function Account() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="account-page">
      <div className="container">
        <div className="account-content">
          <div className="account-tabs">
            <button
              className={isLogin ? 'active' : ''}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? 'active' : ''}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          {isLogin ? (
            <form className="account-form">
              <h2>Login</h2>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" required />
              </div>
              <button type="submit" className="btn btn-accent btn-full">
                Login
              </button>
            </form>
          ) : (
            <form className="account-form">
              <h2>Create Account</h2>
              <div className="form-group">
                <label>Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" required />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" required />
              </div>
              <button type="submit" className="btn btn-accent btn-full">
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;

