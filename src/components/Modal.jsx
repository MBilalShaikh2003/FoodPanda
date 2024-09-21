"use client"
import { useState, useEffect } from 'react';

const Modal = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
   
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      setIsSignedUp(true); 
    } else {
      setIsSignedUp(false); 
    }
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail === email && savedPassword === password) {
      // Successful login
      console.log("Logged in:", email);
      setErrorMessage('');
      setShowModal(false);
    } else {
      // If login fails
      setErrorMessage('Invalid email or password. Please sign up first.');
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
   
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

 
    setIsSignedUp(true);
    setErrorMessage('');
    console.log("Signed up:", email);
    setShowModal(false);
  };

  const toggleSignUpMode = () => {
    setIsSignedUp(!isSignedUp); 
    setErrorMessage(''); 
    setEmail('');
    setPassword('');
  };

  return (
    <>
        {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-offwhite-500 hover:text-red-900 bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center"
            >
              &#10005; 
            </button>

            <h2 className="text-xl font-bold mb-4">
              {isSignedUp ? 'Log in' : 'Sign up'}
            </h2>
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <form onSubmit={isSignedUp ? handleLoginSubmit : handleSignUpSubmit}>
              <div className="mb-4">
                <button
                  type="button"
                  className="bg-blue-600 text-white p-3 w-full rounded-lg mb-2"
                >
                  Continue with Facebook
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white p-3 w-full rounded-lg"
                >
                  Continue with Google
                </button>
              </div>
              <div className="mb-4 text-center">or</div>
              <div className="mb-4">
                <input
                  type="email"
                  className="border p-3 w-full rounded-lg"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="border p-3 w-full rounded-lg"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white p-3 w-full rounded-lg"
              >
                {isSignedUp ? 'Log in' : 'Sign up'}
              </button>
              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="text-blue-600"
                  onClick={toggleSignUpMode}
                >
                  {isSignedUp
                    ? 'Not signed up? Sign up now.'
                    : 'Already signed up? Log in.'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
