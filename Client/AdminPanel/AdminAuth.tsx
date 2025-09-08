import { useState } from "react";

const AdminAuth = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [passcode, setPasscode] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [error, setError] = useState<string>("")

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    
    const ADMIN_PASSCODE: number = 12345
    setTimeout (() => {
    if(passcode !== ADMIN_PASSCODE) {
      setError('Unkown Passcode')
      setLoading(false)
      return
    } else {
      setSuccess('Verified, Redirecting to Admin Dashboard')
      setLoading(true)
    }
    }, 1000)

    // setTimeout(() => {
    //   if (passcode === ADMIN_PASSCODE) {
    //     alert("✅ Verified! Redirecting to Admin Dashboard...");
    //     // Example: navigate("/admin/dashboard");
    //   } else {
    //     setError("❌ Incorrect passcode");
    //   }
    //   setLoading(false);
    // }, 1000);
  };

  return (
    <div className="items-center justify-center flex flex-col min-h-screen border">
      <div className="bg-gray-200 gap-7 flex flex-col p-10 rounded">
        <h1 className="font-semibold">Admin Page - Only accessible to Admins</h1>
        <form onSubmit={submit}>
          <p>Verify Your authorization by entering a passcode below</p>
          <label className="font-bold block mt-2">Passcode:</label>
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="border border-gray-500 p-2 rounded outline-blue-700"
          />

          {error && <p className="text-red-600 mt-1">{error}</p>}
          {success && <p className="text-green-600 mt-1">{error}</p>} 

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "cursor-not-allowed opacity-40"
                : "hover:bg-blue-700 cursor-pointer"
            } w-full bg-blue-600 text-white px-3 rounded mt-6 py-2`}
          >
            {loading ? "Verifying..." : "Verify and Proceed"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAuth;
