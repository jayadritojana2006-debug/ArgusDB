function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      
      {/* Left Section */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Dashboard
        </h2>

        <p className="text-xs text-slate-500">
          Secure document management workspace
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Security Status */}
        <div className="hidden items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 sm:flex">
          <span className="h-2 w-2 rounded-full bg-teal-500" />

          <span className="text-xs font-medium text-teal-700">
            System Secure
          </span>
        </div>

        {/* Notification */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
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
              d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 21h4"
            />
          </svg>

          {/* Notification indicator */}
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-600" />
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-slate-200" />

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-slate-800">
              Officer
            </p>

            <p className="text-xs text-slate-500">
              Authorized User
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
            JD
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar