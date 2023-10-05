import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Import Link from React Router
// import lottieImage from './../../public/animation_lnc0tps4.json'
// import lottieImage from './../../public/animation_lnc0tps4.json'
import lottieImage from './../../../public/animation_lnc0tps4.json'
import Lottie from 'lottie-react';
import { AiOutlineGoogle } from 'react-icons/ai';
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen md:flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
         <div className="text-center md:w-1/2 lg:text-left">
                                    {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                                    <Lottie animationData={lottieImage} loop={true} />

                              </div>
      <div className="max-w-md w-full">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  {...register("email", { required: 'Email is required' })}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="m-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  {...register("password", { required: 'Password is required' })}
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  className="m-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
      <div className='flex items-center justify-center '>
      <button className="text-center font-bold text-xl mt-2 text-indigo-600 hover:text-indigo-500">
        <AiOutlineGoogle size={30} className="mr-2 inline" />
         Google
      </button>
      </div>
            </div>
          </form>
          <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </p>
        </div>
        </div>

        {/* "Don't have an account? Sign up" link */}
       
       
      </div>
    </div>
  );
};

export default Login;
