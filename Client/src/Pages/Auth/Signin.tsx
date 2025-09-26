import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const navigate = useNavigate()

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
        <div className='flex flex-col justify-center items-center mb-6'>
          <img 
            src="/download.jpg" 
            alt="logo"
            className='w-24 h-24 rounded-full object-cover mb-4'
          />
          <h1 className="text-2xl font-bold text-gray-800">
            Login to Arnold Sellers
          </h1>
        </div>
        
        <p className="text-gray-600 text-center mb-6">Fill the fields below to Proceed</p>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p className='text-sm'>{error}</p>
          </div>
        )}
        
        <form className="space-y-6" onSubmit={submit}>
          <div className="relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              disabled={loading}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
            />
            <label
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                isEmailFocused || email
                  ? 'top-1 text-xs text-blue-500 font-medium'
                  : 'top-4 text-gray-500'
              } ${loading ? 'opacity-50' : ''}`}
            >
              Email or Mobile Number*
            </label>
          </div>
          
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              disabled={loading}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
            />
            <label
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                isPasswordFocused || password
                  ? 'top-1 text-xs text-blue-500 font-medium'
                  : 'top-4 text-gray-500'
              } ${loading ? 'opacity-50' : ''}`}
            >
              Password*
            </label>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200 ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 cursor-pointer'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Veryfying...
              </div>
            ) : (
              'Proceed'
            )}
          </button>
        </form>
        
        <div className="text-center text-sm text-gray-600 mt-6">
          <p>New to Arnold sellers? <Link to={'/register'}className="text-blue-600 hover:underline">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;