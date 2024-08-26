import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // This function handles back button presses to prevent going back to the login page.
    const handleBackButton = (event) => {
      event.preventDefault();
      // Push the current page onto the history stack again to prevent back navigation
      window.history.pushState(null, null, window.location.pathname);
    };

    // Add the initial state to the history stack
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

  const handleLogout = () => {
    // Clear any session or authentication tokens here
    // e.g., localStorage.removeItem('authToken');
    navigate('/', { replace: true }); // Navigate to the login or home page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-500 p-4">
      <div className="m-3">
        <button
          onClick={handleLogout} // Updated to use handleLogout
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Log out
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <div className="bg-green-500 text-xl p-1 font-bold rounded-lg text-slate-50 m-3">
          <p>Successful Login done</p>
        </div>
        <img
          src="/images/keep going.jpg"
          alt="Placeholder"
          className="w-full h-auto rounded-lg"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">Logged In Page</h2>
        <p className="mt-2 text-gray-600">
          Welcome to multiplier AI. Are you ready to start the journey with our company? This is a simple Logged In page created using React.js and Tailwind CSS.
        </p>
        <div className="m-3">
          <button
            onClick={handleLogout} // Updated to use handleLogout
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;