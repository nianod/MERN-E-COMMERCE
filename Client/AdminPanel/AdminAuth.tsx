import { useState } from "react";

const AdminAuth = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="items-center justify-center flex flex-col min-h-screen border">
      <div className="bg-gray-200 gap-7 flex flex-col p-10 rounded">
        <h1>Admin Page - Only accessible to Admins</h1>
        <form onSubmit={submit}>
          <p>Verify Your authorization by entering a passcode below</p>
          <label>Passcode:</label>
          <input type="password" className="" />
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "cursor-not-allowed opacity-40"
                : "hover:to-blue-700 cursor-pointer"
            } w-full bg-blue-600 text-white px-3 py-2 p-2`}
          >
            {loading ? "Verifying" : "Verify and Proceed"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAuth;
