function Sidebar({ activeItem, onNavigate }) {
  const menuItems = [
    {
      name: 'Dashboard',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },

    {
      name: 'Cases',
      icon: (
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
            d="M4 7.5h5l2 2h9v9.25A1.75 1.75 0 0 1 18.25 20H5.75A1.75 1.75 0 0 1 4 18.25V7.5Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7.5V5.75A1.75 1.75 0 0 1 5.75 4h4l2 2h6.5A1.75 1.75 0 0 1 20 7.75V9.5"
          />
        </svg>
      ),
    },

    {
      name: 'Documents',
      icon: (
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
            d="M6 3.75h8.25L19 8.5v11.75H6A1.75 1.75 0 0 1 4.25 18.5v-13A1.75 1.75 0 0 1 6 3.75Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 3.75V9h5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 13h7M8 16.5h5"
          />
        </svg>
      ),
    },

    {
      name: 'Search',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <circle cx="10.75" cy="10.75" r="6.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16 16 4.25 4.25"
          />
        </svg>
      ),
    },

    {
      name: 'Audit Trail',
      icon: (
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
            d="M12 3.5 5.5 6v5.25c0 4.03 2.7 7.5 6.5 8.75 3.8-1.25 6.5-4.72 6.5-8.75V6L12 3.5Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l2.5 1.5"
          />
        </svg>
      ),
    },
  ]

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col bg-slate-900 text-white">

      {/* Brand */}
      <div className="border-b border-slate-800 px-6 py-5">
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <span className="text-base font-bold">
              A
            </span>
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight">
              ARGUSDB
            </h1>

            <p className="text-[11px] text-slate-400">
              Secure Evidence Platform
            </p>
          </div>

        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6">

        <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Workspace
        </p>

        <div className="space-y-1">

          {menuItems.map((item) => {
            const isActive = activeItem === item.name

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => onNavigate(item.name)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.icon}

                <span>
                  {item.name}
                </span>
              </button>
            )
          })}

        </div>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-slate-800 p-3">

        {/* Settings */}
        <button
          type="button"
          onClick={() => onNavigate('Settings')}
          className={`mb-2 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
            activeItem === 'Settings'
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
          }`}
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <circle cx="12" cy="12" r="3" />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.75 1.75-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V20h-2.47v-.15a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.75-1.75.06-.06A1.7 1.7 0 0 0 8.28 15a1.7 1.7 0 0 0-1.56-1.04H6v-2.47h.72A1.7 1.7 0 0 0 8.28 10a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.75-1.75.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 12.61 5.15V5h2.47v.15a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.75 1.75-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.56 1.04H21v2.47h-.04A1.7 1.7 0 0 0 19.4 15Z"
            />
          </svg>

          <span>
            Settings
          </span>

        </button>

        {/* User */}
        <div className="flex items-center gap-3 rounded-lg bg-slate-800 px-3 py-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold">
            JD
          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-medium text-white">
              Officer
            </p>

            <p className="truncate text-xs text-slate-400">
              Authorized User
            </p>

          </div>

        </div>

      </div>
    </aside>
  )
}

export default Sidebar