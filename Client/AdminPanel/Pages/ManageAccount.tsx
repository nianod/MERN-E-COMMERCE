import { useState } from "react"

const ManageAccount = () => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className="inset-0 fixed flex items-center justify-center -z-50">
      <div className="bg-blue-900 p-6 rounded-lg">
        <p>Are you sure you want to log out?</p>
        <div className="flex justify-between">
          <button className="bg-red-500 cursor-pointer rounded-lg p-2 text-white font-semibold px-3">Cancel</button>
          <button className={`bg-red-500 p-2 text-white font-semibold rounded-lg px-3 hover:bg-red-700 cursor-pointer ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default ManageAccount