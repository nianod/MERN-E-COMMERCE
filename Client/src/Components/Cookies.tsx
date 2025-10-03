import { Link } from "react-router-dom"


type CookiesProps = {
  cookiesModal: boolean;
  setCookiesModal: React.Dispatch<React.SetStateAction<boolean>>
}
const Cookies: React.FC<CookiesProps> = ({cookiesModal, setCookiesModal}) => {

  // const acceptCookies = () => {
  //   //Accept cookies
  //   setCookiesModal(false)
  // }

  return(
    <div>
      {cookiesModal && (
        <span
          className="fixed inset-0 z-100"
          onClick={() => setCookiesModal(false)}
        ></span>
      )}
      <div className="bottom-3 left-7 right-0 z-50 static bg-gray-300 w-fit rounded p-5">
        <p className="text-center font-semibold">This site has cookies</p>
        <span>
          click {" "}
           <Link 
              className="text-blue-700 hover:underline"
              to="/"
            >
              Here {" "}
            </Link>
           to learn more <br /> about cookies
        </span> <br />
        <button
          className="bg-amber-500 p-2 py-1.5 text-white font-bold shadow-2xs px-1.5 cursor-pointer rounded justify-end flex"
          onClick={() => setCookiesModal(false)}
        >
          Accept cookies
        </button>
      </div>
    </div>
  )
}
export default Cookies