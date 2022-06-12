import logo from "../../public/logo.png";

export function Login() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        {/* TODO: Get a suitable backgroud Image */}
        <div
          className="hidden bg-cover lg:block lg:w-2/3 relative backdrop-blur-sm"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}
        >
          <div
            className="absolute blur-sm opacity-80 inset-0 w-full h-full bg-cover  hover:opacity-90 transition-all duration-300"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
            }}
          ></div>
          <div className="flex justify-center items-center h-full px-20 bg-gray-900 bg-opacity-40 ">
            <div className="flex flex-col items-center justify-center ">
              <img
                src={logo}
                className="object-contain w-[400px] text-4xl z-50 hover:animate-pulse duration-300"
              />
              {/* TODO: Add typing animation */}
              <p className="max-w-md  text-4xl font-thin  text-gray-300 text-center relative bottom-28">
                Welcome To Nest Admin
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <img
                src={logo}
                className="object-contain lg:hidden w-[200px] m-auto relative top-11 "
              />
              <h1 className="hidden font-normal text-4xl mb-5  lg:flex flex-col items-start text-gray-700 dark:text-white">
                Login
                <div className="w-[40px] h-[3px]  bg-gradient-to-r from-[#B85BF0] via-[#A085F8] to-[#8FA1FE] rounded-full mt-1"></div>
              </h1>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Log in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-600 dark:text-gray-200">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-[#A085F8] hover:text-[#A085F8] hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    type="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-[#B85BF0] via-[#A085F8] to-[#8FA1FE]  rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <a
                  href="#"
                  className="text-[#A085F8] focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
