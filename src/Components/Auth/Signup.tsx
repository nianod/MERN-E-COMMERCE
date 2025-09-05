import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const submit = (e: any) => {
    e.preventDefault()
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
            Welcome to Arnold Sellers
          </h1>
        </div>
        
        <p className="text-gray-600 text-center mb-6">Create account by filling fields below</p>
        
        <form className="space-y-6">
           <div className="relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <label
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                isEmailFocused || email
                  ? 'top-1 text-xs text-blue-500 font-medium'
                  : 'top-4 text-gray-500'
              }`}
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
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <label
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                isPasswordFocused || password
                  ? 'top-1 text-xs text-blue-500 font-medium'
                  : 'top-4 text-gray-500'
              }`}
            >
              Password*
            </label>
          </div>
          
          <button
            type="submit"
            onClick={submit}
            className={`${loading ? "cursor-not-allowed opacity-40" : "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"} cursor-pointer `}
          >
           {loading ? "Registering" : "Create Account"}
          </button>
        </form>
        
        <div className="text-center text-sm text-gray-600 mt-6">
          <p>Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;