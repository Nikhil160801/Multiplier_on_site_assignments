import { NavLink } from "react-router-dom";
const AuthButtons = () => {
  return (
    <div className="flex items-center justify-center p-5 bg-slate-700">
      <div className="space-x-4">
      <NavLink to={'/loginform'}>
        <button
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
          Login
        </button>
    </NavLink>
        <NavLink to={'/signupform'}>
            <button
            className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700"
            >
            Sign Up
            </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AuthButtons;
