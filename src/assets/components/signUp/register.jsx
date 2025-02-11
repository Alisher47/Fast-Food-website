import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    navigate(`/login`)
  }



  return (
    <>
           <section className="min-h-[80vh] flex justify-center items-center bg-gray-100">
        <div className="container mx-auto flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md animate-slide-up">
            <h2 className="text-2xl font-bold text-red-600 text-center mb-6">Register</h2>
            <form>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Register
              </button>
            </form>
            <div className="flex justify-center items-center mt-4">
              <p className="mr-2 cursor-pointer">Already have an account?</p>
              <button className="text-red-600 hover:underline" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;