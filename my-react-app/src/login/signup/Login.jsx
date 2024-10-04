// import React, { useState } from 'react';
// import logo from '../../assets/logo.png'
// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     if (username === '' || password === '') {
//       setErrorMessage('Please enter both username and password.');
//       return;
//     }
//     // Clear error message if validation passes
//     setErrorMessage('');
//     console.log('Logging in:', { username, password, rememberMe });
//   };

//   return (
//     <>
//     <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
//       {/* <a href="#">
//         <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
//           <div>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
//             </svg>
//           </div>
//           Cere Scan 
//         </div>
//       </a> */}
      
//       <img src={logo} alt="logo" className="w-20 h-20"></img>
//       <div className="relative mt-12 w-full max-w-lg sm:mt-10">
//         <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
//         <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
//           <div className="flex flex-col p-6">
//             <h3 className="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
//             <p className="mt-1.5 text-sm font-medium text-white/50">Welcome back, enter your credentials to continue.</p>
//             {errorMessage && <p className="mt-2 text-red-500 text-sm">{errorMessage}</p>}
//           </div>
//           <div className="p-6 pt-0">
//             <form onSubmit={handleSubmit}>
//               <div className="mt-4">
//                 <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
//                   <div className="flex justify-between">
//                     <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Username</label>
//                     <div className="absolute right-3 translate-y-2 text-green-200">
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                         <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                   </div>
//                   <input
//                     type="text"
//                     name="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Username"
//                     autoComplete="off"
//                     className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
//                   />
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
//                   <div className="flex justify-between">
//                     <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Password</label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="password"
//                       name="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-4 flex items-center justify-between">
//                 <label className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     name="remember"
//                     checked={rememberMe}
//                     onChange={() => setRememberMe(!rememberMe)}
//                     className="outline-none focus:outline focus:outline-sky-300"
//                   />
//                   <span className="text-xs">Remember me</span>
//                 </label>
//                 <a className="text-sm font-medium text-foreground underline" href="/forgot-password">Forgot password?</a>
//               </div>
//               <div className="mt-4 flex items-center justify-end gap-x-2">
//                 <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200" href="/register">Register</a>
//                 <button
//                   className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
//                   type="submit"
//                 >
//                   Log in
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//  </>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setErrorMessage('Please enter both username and password.');
      return;
    }
    setErrorMessage('');
    console.log('Logging in:', { username, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google');
    // Add Google login logic here
  };

  return (
    <>
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
                        Username
                      </label>
                    </div>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
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
                  <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200" href="/register">
                    Register
                  </a>
                  <button
                    className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
              </form>
              {/* Google Login Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      d="M23.49 12.275c0-.816-.073-1.614-.206-2.392H12v4.523h6.512c-.282 1.485-1.11 2.739-2.364 3.579v2.983h3.818c2.23-2.053 3.524-5.081 3.524-8.693z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 24c3.24 0 5.955-1.077 7.94-2.925l-3.818-2.983c-1.059.705-2.404 1.13-4.122 1.13-3.167 0-5.849-2.141-6.809-5.017H1.269v3.108A12.002 12.002 0 0012 24z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.191 14.205A7.18 7.18 0 014.808 12c0-.76.133-1.496.383-2.205V6.687H1.269A12.01 12.01 0 000 12c0 1.883.44 3.662 1.269 5.313l3.922-3.108z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 4.77c1.766 0 3.352.61 4.603 1.805l3.43-3.43C17.954 1.07 15.24 0 12 0 7.314 0 3.308 2.69 1.269 6.687l3.922 3.108C6.15 7.81 8.833 4.77 12 4.77z"
                      fill="#EA4335"
                    />
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
