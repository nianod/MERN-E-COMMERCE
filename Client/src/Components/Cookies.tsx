import { Link } from "react-router-dom";

type CookiesProps = {
  cookiesModal: boolean;
  setCookiesModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cookies: React.FC<CookiesProps> = ({ cookiesModal, setCookiesModal }) => {
  return (
    <>
      {cookiesModal && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setCookiesModal(false)}
          ></div>

           <div className="fixed bottom-3 left-46 -translate-x-1/2 z-50 bg-gray-300 w-fit rounded p-5 shadow-lg">
            <p className="text-center font-semibold">This site uses cookies </p>
            <span>
              Click{" "}
              <Link
                className="text-blue-700 hover:underline"
                to="/"
              >
                here
              </Link>{" "}
              to learn more about cookies
            </span>
            <br />
            <button
              className="bg-amber-500 mt-3 px-4 py-2 text-white cursor-pointer font-bold rounded shadow hover:bg-amber-600 transition-colors"
              onClick={() => setCookiesModal(false)}
            >
              Accept Cookies
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Cookies;


