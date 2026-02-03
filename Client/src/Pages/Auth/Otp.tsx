import   { useRef, useState, KeyboardEvent, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

type InputProps = {
  length?: number;
  onComplete: (pin: string) => void;
};

const Otp = ({ length = 4, onComplete }: InputProps) => {
  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(''));
  const [loading, setLoading] = useState<boolean>(false)
 
  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleTextChange = (input: string, index: number) => {
     
    if (input && !/^\d+$/.test(input)) return;

    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    
    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    
    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

 
    if (newPin.every((digit) => digit !== '')) {
      onComplete(newPin.join(''));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
     
    if (e.key === 'ArrowRight' && index < length - 1) {
      inputRef.current[index + 1]?.focus();
      e.preventDefault();
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRef.current[index - 1]?.focus();
      e.preventDefault();
    }
    
    //  paste
    if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      navigator.clipboard.readText().then(text => {
        const digits = text.replace(/\D/g, '').split('').slice(0, length);
        const newPin = [...OTP];
        digits.forEach((digit, i) => {
          if (i < length) {
            newPin[i] = digit;
          }
        });
        setOTP(newPin);
        
         
        const lastFilledIndex = Math.min(digits.length - 1, length - 1);
        inputRef.current[lastFilledIndex]?.focus();
         
        if (newPin.every(digit => digit !== '')) {
          onComplete(newPin.join(''));
        }
      });
    }
  };

  const requestOtp = (e: any) => {
    //Request otp
    e.preventDefault()
    setLoading(true)
  }

  const resendCode = () => {
     //resend opt
  };

  return (
    <div className="flex bg-white flex-col justify-center min-h-screen items-center ">
      <div className='bg-white p-6 rounded shadow-md'>
        <span className='text-sm text-gray-700 mb-3 flex justify-center'>Verify otp</span>
      <div className="flex justify-center gap-3 mb-6 ">
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength={1}
            value={OTP[index]}
            onChange={(e) => handleTextChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
            className="w-14 h-14 text-center text-2xl font-semibold 
                       border-2 border-gray-300 rounded-lg 
                       focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                       transition-all duration-200
                       hover:border-gray-400
                       shadow-sm"
            autoComplete="one-time-code"
            aria-label={`Digit ${index + 1} of ${length}`}
          />
        ))}
      </div>
      
          <button
              onClick={requestOtp}
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                   <Loader2 />
                  Requesting...
                </div>
              ) : (
                "Request otp"
              )}
            </button>
      
      <div className="mt-4 text-sm text-gray-600 text-center max-w-xs">
        <p>Enter the {length}-digit code sent to your phone</p>
          <button className='text-sm cursor-pointer text-blue-600' onClick={resendCode}>Resend code</button>
      </div>
      </div>
    </div>
  );
};

export default Otp; 