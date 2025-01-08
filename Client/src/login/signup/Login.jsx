
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import logo from '../../assets/logo.png';
import Navbar from '../../homepage/Navbar';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');

  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    setErrorMessage('');
    console.log('Logging in:', { email, password, rememberMe });
    try {
      const response = await axios.post('http://localhost:5001/login', { email, password }); // Send email instead of username
      const { user } = response.data;
  
      // Save user info to localStorage
      localStorage.setItem('user', JSON.stringify(user));
      
      // Redirect to the home page or dashboard
      navigate('/');
    } catch (err) {
      setError('Login failed: ' + (err.response ? err.response.data.error : 'Unknown error'));
    }
  };
  

  
  return (
    <>
      <Navbar />
      <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
        <img src={logo} alt="logo" className="w-20 h-20" />
        <div className="relative mt-12 w-full max-w-lg sm:mt-10">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
          <div className="mx-5 border border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
              <p className="mt-1.5 text-sm font-medium text-white/50">
                Welcome back, enter your credentials to continue.
              </p>
              {errorMessage && <p className="mt-2 text-red-500 text-sm">{errorMessage}</p>}
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-gray-400">
                        Email
                      </label>
                    </div>
                    <input
  type="email"
  name="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"
  autoComplete="off"
  className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
/>

                  </div>
                </div>
                <div className="mt-4">
                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-gray-400">
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="outline-none focus:outline focus:outline-sky-300"
                    />
                    <span className="text-xs">Remember me</span>
                  </label>
                  <a className="text-sm font-medium text-foreground underline" href="/forgot-password">
                    Forgot password?
                  </a>
                </div>
                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <NavLink to="/signup" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200">
                    Register
                  </NavLink>
                  <button
                    className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                    type="submit"
                    disabled={email === '' || password === ''}
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
