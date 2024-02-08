import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <>
      <section
        id="notfound"
        className="flex  flex-col  items-center justify-center  bg-[black] rounded-3xl drop-shadow-xl text-white"
      >
        <h2 className="font-bold text-[100px]   animate-bounce error   ">
          404 !
        </h2>
        <h4 className="text-2xl mb-4">Sorry! Page not found</h4>
        <p className="text-center mb-8">
          Oops! It seems like the page you're trying to access doesn't exist. If
          you believe there's an issue, feel free to report it, and we'll look
          into it.
        </p>
        <div className="flex space-x-4">
          <NavLink to="/" className="text-blue-800 hover:underline">
            Home
          </NavLink>
          <NavLink to="/contact" className="text-blue-800 hover:underline">
            Contact
          </NavLink>
        </div>
      </section>
    </>
  );
}
