import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-screen">
      <div className="">
        <h1 className="text-2xl font-semibold">Hey, hello 👋</h1>
        <p>Enter the information you entered while registering</p>
      </div>

      <div className="">
        <div className="text-red-500 font-medium">
          error !{/* {{ store.error }} */}
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="">
              Email
            </label>

            <input
              id="email"
              type="email"
              className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
              name="email"
              value
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="">
              Password
            </label>

            <input
              id="password"
              type="password"
              className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
              name="password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full font-medium mt-6 bg-[#ef5b44] disabled:bg-black/50 hover:bg-[#ef5b44]/90 text-white px-4 py-2 rounded-lg"
          >
            Login
            {/* <span v-if="!store.loading">Login</span>
            <span v-if="store.loading">Logging in....</span> */}
          </button>

          <p className="opacity-90 text-center font-normal">Or</p>

          <button className="w-full flex justify-center items-center gap-4 border border-gray-500 py-2 font-medium rounded-lg hover:border-2">
            <img src="" className="w-6 h-6" alt="" />
            Login with Google
          </button>
        </form>

        <p className="text-center mt-10">
          Don't have an account? {" "}
          <Link to="/register" className="underline font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
