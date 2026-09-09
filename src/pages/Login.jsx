import { useState } from 'react'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
      
      {/* Login Card */}
      <div className="w-full max-w-[430px] rounded-2xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)] px-8 py-9 sm:px-10">
        
        {/* Brand */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">
            <span className="text-lg font-bold text-white">
              A
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ARGUSDB
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Secure Documents. Verifiable Evidence.
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-100" />

        {/* Heading */}
        <div className="mb-7">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Welcome back
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Sign in to access your secure workspace.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          
          {/* Official ID / Email */}
          <div>
            <label
              htmlFor="officialId"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Official ID / Email
            </label>

            <input
              id="officialId"
              name="officialId"
              type="text"
              autoComplete="username"
              placeholder="Enter your official ID or email"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition duration-200 hover:border-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700"
              >
                Password
              </label>
            </div>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pr-12 text-sm text-slate-900 placeholder-slate-400 outline-none transition duration-200 hover:border-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
              />

              {/* Password visibility button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              >
                {showPassword ? (
                  /* Eye Off Icon */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.98A10.45 10.45 0 0 0 2.25 12c1.73 4.03 5.6 6.75 9.75 6.75 1.61 0 3.13-.37 4.48-1.02M6.23 6.23A9.85 9.85 0 0 1 12 5.25c4.15 0 8.02 2.72 9.75 6.75a10.5 10.5 0 0 1-3.03 4.15M6.23 6.23 3 3m3.23 3.23 4.06 4.06M21 21l-3.27-3.27M14.12 14.12A3 3 0 0 1 9.88 9.88"
                    />
                  </svg>
                ) : (
                  /* Eye Icon */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12s3.5-6.75 9.75-6.75S21.75 12 21.75 12 18.25 18.75 12 18.75 2.25 12 2.25 12Z"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
            >
              Forgot password?
            </button>
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 active:bg-blue-800"
          >
            Sign In
          </button>
        </form>

        {/* Security Information */}
        <div className="mt-7 flex items-center justify-center gap-2 border-t border-slate-100 pt-5">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4 text-teal-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3.5 5 6v5.25c0 4.34 2.94 7.92 7 9.25 4.06-1.33 7-4.91 7-9.25V6l-7-2.5Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.5 12 1.75 1.75L14.75 10"
            />
          </svg>

          <p className="text-xs font-medium text-slate-500">
            Protected access • Secure authentication
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login