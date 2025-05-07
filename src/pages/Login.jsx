import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import { alert } from "@material-tailwind/react";
import Swal from "sweetalert2";

const Login = () => {
  const { singInUser, singInGoogle } = useContext(AuthContext)

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // password validation
    singInUser(email, password)
    .then( () => {
      Swal.fire({
        title:" Login success",
        icon: "success",
        draggable: true
      });
      
    })
    .catch(() => {
      Swal.fire({
        title:"sorry",
        icon: "error",
        draggable: true
      });
    })
  };

  const handleSignInwithGoogle = () => {
    singInGoogle()
    .then(result => {
      alert(result.user)
    })
    .catch(error => {
      alert(error.message)
    })
  }

  return (
    <div className="min-h-svh flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700 underline underline-offset-4">
          Sign In
        </h2>
        <form onSubmit={handleLoginSubmit}>
          {/* Email Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                           border-b-2 border-gray-300 appearance-none focus:outline-none 
                           focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 
                           top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 
                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          {/* Password Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              autocomplete="current-password"
              id="password"
              placeholder=""
              required
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                           border-b-2 border-gray-300 appearance-none focus:outline-none 
                           focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 
                           top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 
                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          {/* <Link className="-mt-1">Forgat password?</Link> */}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-sm text-gray-400">OR</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Google */}
          <button onClick={handleSignInwithGoogle}
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 cursor-pointer"
          >
            <FcGoogle className="text-xl mr-2" />
            Login with Google
          </button>

          {/* Login Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-500 hover:underline font-medium"
            >
              Singup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
