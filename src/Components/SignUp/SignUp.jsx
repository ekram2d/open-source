import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Import Link from React Router
import lottieImage from './../../../public/animation_lndajoa3.json'
import Lottie from 'lottie-react';
import { AiOutlineGoogle } from 'react-icons/ai';
const SignUp = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen md:flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

      <div className="text-center md:w-1/2 lg:text-left">
        {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
        <Lottie animationData={lottieImage} loop={true} />

      </div>
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Username is required',
                  minLength: { value: 5, message: 'Username must be at least 5 characters long' },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="username"
                    autoComplete="username"
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${errors.username ? 'border-red-500' : ''
                      }`}
                    placeholder="Username"
                  />
                )}
              />
              {errors.username && (
                <p className="mt-2 text-sm text-red-600">{errors.username.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Za-z0-9+_.-]+@(.+)$/,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    id="email"
                    autoComplete="email"
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${errors.email ? 'border-red-500' : ''
                      } rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Email address"
                  />
                )}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Password must be at least 8 characters long' },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${errors.password ? 'border-red-500' : ''
                      } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Password"
                  />
                )}
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
            <div className='flex items-center justify-center '>
              <button className="text-center font-bold text-xl mt-2 text-indigo-600 hover:text-indigo-500">
                <AiOutlineGoogle size={30} className="mr-2 inline" />
                Google
              </button>
            </div>
          </div>
        </form>

        {/* "Have an account? Sign in" link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
