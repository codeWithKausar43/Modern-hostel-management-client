
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import { alert } from "@material-tailwind/react";
 
 
 
const Register = () => {

const {createUser, singInGoogle,upDataUserProfile} = useContext(AuthContext)


const   handleCreateUser = e => {
  e.preventDefault()
  const name = e.target.userName.value;
  const photoUrl = e.target.photoUrl.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(name, photoUrl)
  createUser(email,password)
  .then(result => {
  upDataUserProfile(name, photoUrl)
  .then(() => {
    console.log(result)
  })
  .catch((error) =>{
    console.log(error)
  })
  })
  .catch(error => {
    console.log(error.message)
  })
}
 
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700 underline underline-offset-4">
          Sing Up
        </h2>
        <form onSubmit={handleCreateUser}>
          {/* Name Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="userName"
              id="name"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                         border-b-2 border-gray-300 appearance-none focus:outline-none 
                         focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 
                         top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 
                         peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>

          {/*  photo url*/}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="url"
              name="photoUrl"
              id="name"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                         border-b-2 border-gray-300 appearance-none focus:outline-none 
                         focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 
                         top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 
                         peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Photo Url
            </label>
          </div>

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
              id="password"
              placeholder=" "
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

          {/* Terms */}
          <div className="flex items-center mb-4">
            <input
              id="terms"
              type="checkbox"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              Accept our Terms and Conditions
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Sign Up
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
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;


