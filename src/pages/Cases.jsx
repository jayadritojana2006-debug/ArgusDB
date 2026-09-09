import CreateCase from './CreateCase'

function Cases({ onCreateCase }) {
  return (
    <div className="min-h-full bg-slate-50 p-6">

      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Cases
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage and access investigation records securely.
          </p>
        </div>

        <button
          type="button"
          onClick={onCreateCase}
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          + Create New Case
        </button>
      </div>

      {/* Search and Filter */}
      <div className="mb-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row">

          <div className="relative flex-1">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            >
              <circle cx="10.75" cy="10.75" r="6.5" />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16 16 4.25 4.25"
              />
            </svg>

            <input
              type="text"
              placeholder="Search by case ID, title, or case type..."
              className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
            />

          </div>

          <select
            className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
          >
            <option>All Status</option>
            <option>Under Investigation</option>
            <option>Pending Review</option>
            <option>Verified</option>
          </select>

        </div>
      </div>

      {/* Cases Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-100 px-5 py-4">

          <h2 className="text-base font-semibold text-slate-900">
            Investigation Records
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Secure case records available to your account.
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px] text-left">

            <thead className="bg-slate-50">

              <tr className="border-b border-slate-200">

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Case ID
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Case
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Type
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Updated
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Action
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-slate-100">

              {/* Case 1 */}
              <tr className="transition hover:bg-slate-50">

                <td className="px-5 py-4">
                  <span className="font-mono text-sm font-medium text-slate-700">
                    ARG-2026-00124
                  </span>
                </td>

                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-slate-800">
                    Financial Investigation
                  </p>
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  Financial Crime
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    Under Investigation
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-slate-500">
                  Today
                </td>

                <td className="px-5 py-4">
                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Open
                  </button>
                </td>

              </tr>

              {/* Case 2 */}
              <tr className="transition hover:bg-slate-50">

                <td className="px-5 py-4">
                  <span className="font-mono text-sm font-medium text-slate-700">
                    ARG-2026-00119
                  </span>
                </td>

                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-slate-800">
                    Cyber Crime Investigation
                  </p>
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  Cyber Crime
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                    Pending Review
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-slate-500">
                  Yesterday
                </td>

                <td className="px-5 py-4">
                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Open
                  </button>
                </td>

              </tr>

              {/* Case 3 */}
              <tr className="transition hover:bg-slate-50">

                <td className="px-5 py-4">
                  <span className="font-mono text-sm font-medium text-slate-700">
                    ARG-2026-00108
                  </span>
                </td>

                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-slate-800">
                    Missing Person Investigation
                  </p>
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  Missing Person
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    Verified
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-slate-500">
                  2 days ago
                </td>

                <td className="px-5 py-4">
                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Open
                  </button>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Information */}
      <div className="mt-5 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">

        <div className="mt-0.5 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <circle cx="12" cy="12" r="8.5" />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10.5v5M12 7.5h.01"
            />
          </svg>
        </div>

        <div>

          <p className="text-sm font-medium text-blue-900">
            Secure case access
          </p>

          <p className="mt-1 text-xs leading-5 text-blue-700">
            Case records displayed here are controlled through role-based
            access permissions. Backend authorization will be connected later.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Cases