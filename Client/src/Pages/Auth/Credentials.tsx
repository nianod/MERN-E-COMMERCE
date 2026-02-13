import { Loader2 } from "lucide-react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Credentials = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email

  if(!email) {
    navigate('/signin')
    return null
  }

  const handleChange = (value: string | undefined) => {
    const input = value || "";
    setMobileNumber(input);
    setValid(validateMobileNumber(input));
  };

  const validateMobileNumber = (mobileNumber: string) => {
    const numberPattern = /^\+\d{10,15}$/;
    return numberPattern.test(mobileNumber);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = import.meta.env.HEROKU_URL
      await axios.post(
        `${apiUrl}/api/auth/register`,
        {
          email,
          firstName,
          lastName,
          mobileNumber
        }
      );

   
      navigate("/otp", { state: { email } });

    } catch (err) {
      console.error(err);
       
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        
        <div className="text-center mb-8 items-center justify-center flex flex-col">
           <img
            className="w-24 h-24 rounded-full object-cover"
            src="/download.jpg" alt="logo" />
        
          <p className="text-gray-500 text-sm">
            Please provide your details to continue
          </p>
        </div>

       
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <form className="space-y-5" onSubmit={submit}>
      
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                  First name
                </label>
                <input
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                  Last name
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>

           
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Phone number
              </label>
              <div className={`border ${!valid ? 'border-red-300' : 'border-gray-300'} rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition`}>
                <PhoneInput
                  defaultCountry="US"
                  international
                  value={mobileNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 focus:outline-none"
                />
              </div>
              {!valid && (
                <p className="text-sm text-red-600 mt-1.5">
                  Please enter a valid phone number
                </p>
              )}
            </div>

             
            <button
              type="submit"
              disabled={loading || !valid}
              className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                   <Loader2 className="animate-spin" />
                  Processing...
                </div>
              ) : (
                "Continue"
              )}
            </button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-6">
            We'll send a verification code to your email
          </p>
        </div>
      </div>
    </div>
  );
};

export default Credentials;