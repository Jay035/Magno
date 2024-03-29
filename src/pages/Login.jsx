import { Link } from "react-router-dom";
import googleIcon from "../assets/google-icon.png";
import FormValidation from "../formValidation/FormValidation";

export default function Login() {
  const {
    email,
    password,
    error,
    loading,
    setEmail,
    setPassword,
    logIn,
    signInWithGoogle,
  } = FormValidation();

  return (
      <main className="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-[90vh]">
        <div className="">
          <h1 className="text-2xl font-semibold">Hey, hello 👋</h1>
          <p>Enter the information you entered while registering</p>
        </div>

        <div className="">
          {error && <div className="text-red-500 font-medium">{error}</div>}

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              logIn();
            }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="">
                Email
              </label>

              <input
                id="email"
                type="email"
                className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
                name="email"
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                  console.log(email);
                }}
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
                value={password}
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                  console.log(password);
                }}
                required
              />
            </div>

            <button
              disabled={email === "" || password === ""}
              type="submit"
              className="w-full font-medium mt-6 bg-[#ef5b44] disabled:bg-[#ef5b44]/50 hover:bg-[#ef5b44]/90 text-white px-4 py-2 rounded-lg"
            >
              {loading ? "Logging in...." : "Login"}
            </button>

            <p className="opacity-90 text-center font-normal">Or</p>
          </form>
          <button
            onClick={signInWithGoogle}
            className="w-full flex justify-center items-center mt-4 gap-4 border border-gray-500 py-2 font-medium rounded-lg hover:border-2"
          >
            <img src={googleIcon} className="w-6 h-6" alt="google icon" />
            Login with Google
          </button>

          <p className="text-center mt-10">
            Don't have an account?{" "}
            <Link to="/register" className="underline font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </main>
  );
}
