import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log(res.data);
      // Save authentication status or token in localStorage/sessionStorage
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/UserLogin', { replace: true });  // Navigate to UserLogin page and replace history
    } catch (err) {
      console.log("user does not exist");
      setError(err.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-600">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        {error && <p className="text-slate-50 bg-red-600 rounded-2xl p-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email<span className='text-red-600 text-lg'>*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password<span className='text-red-600 text-lg'>*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 px-2 py-1 text-sm text-gray-600 bg-gray-200 rounded"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 hover:scale-95 duration-300 rounded-md hover:bg-red-700 focus:outline-none focus:bg-blue-700"
          >
            Login
          </button>
          <div>
            <span>Don&apos;t Have an Account sign up </span>
            <NavLink className="text-lg text-blue-600 hover:underline hover:text-red-500 font-bold" to={'/signupform'}>Sign Up</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;


// import { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();  // Hook for navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/login', { email, password });
//       navigate('/UserLogin', { replace: true });   // Navigate to UserLogin page
//       console.log(res.data);
//     } catch (err) {
//       console.log("user does not exist");
//       setError(err.response.data.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-slate-600">
//       <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email<span className='text-red-600 text-lg'>*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password<span className='text-red-600 text-lg'>*</span>
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter your password"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-2 top-2 px-2 py-1 text-sm text-gray-600 bg-gray-200 rounded"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>
//           <div className="flex items-center justify-between">
//             <a href="#" className="text-sm text-blue-600 hover:underline">
//               Forgot password?
//             </a>
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//           >
//             Login
//           </button>
//           <div>
//             <span>Don&apos;t Have an Account sign up </span>
//             <NavLink className="text-lg text-blue-600 hover:underline font-bold" to={'/signupform'}>Sign Up</NavLink>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
