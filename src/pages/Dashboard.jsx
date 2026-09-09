function Dashboard() {
  return (
    <div className="min-h-full bg-slate-50 p-6">
      
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Welcome back, Officer
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage cases, documents, and secure evidence from one workspace.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Cases */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Active Cases
            </p>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              ⚖
            </div>
          </div>

          <p className="mt-4 text-2xl font-semibold text-slate-900">
            24
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Cases currently under investigation
          </p>
        </div>

        {/* Documents */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Documents
            </p>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
              ▣
            </div>
          </div>

          <p className="mt-4 text-2xl font-semibold text-slate-900">
            186
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Securely stored documents
          </p>
        </div>

        {/* Pending Verification */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Pending Verification
            </p>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              !
            </div>
          </div>

          <p className="mt-4 text-2xl font-semibold text-slate-900">
            7
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Documents awaiting verification
          </p>
        </div>

        {/* Security */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Security Status
            </p>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
              ✓
            </div>
          </div>

          <p className="mt-4 text-2xl font-semibold text-green-600">
            Secure
          </p>

          <p className="mt-1 text-xs text-slate-500">
            No integrity issues detected
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        
        {/* Recent Cases */}
        <div className="rounded-xl border border-slate-200 bg-white lg:col-span-2">
          
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Recent Cases
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Recently accessed investigation records
              </p>
            </div>

            <button
              type="button"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            
            {/* Case 1 */}
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm font-medium text-slate-800">
                  Case #ARG-2026-00124
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Financial Investigation • Updated today
                </p>
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                Under Investigation
              </span>
            </div>

            {/* Case 2 */}
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm font-medium text-slate-800">
                  Case #ARG-2026-00119
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Cyber Crime • Updated yesterday
                </p>
              </div>

              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                Pending Review
              </span>
            </div>

            {/* Case 3 */}
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm font-medium text-slate-800">
                  Case #ARG-2026-00108
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Missing Person • Updated 2 days ago
                </p>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Security Overview */}
        <div className="rounded-xl border border-slate-200 bg-white">
          
          <div className="border-b border-slate-100 px-5 py-4">
            <h2 className="text-base font-semibold text-slate-900">
              Security Overview
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Current platform security status
            </p>
          </div>

          <div className="space-y-4 p-5">
            
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                ✓
              </div>

              <div>
                <p className="text-sm font-medium text-slate-800">
                  Encryption
                </p>

                <p className="text-xs text-slate-500">
                  Secure storage enabled
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                ✓
              </div>

              <div>
                <p className="text-sm font-medium text-slate-800">
                  Integrity Monitoring
                </p>

                <p className="text-xs text-slate-500">
                  SHA-256 verification active
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                ✓
              </div>

              <div>
                <p className="text-sm font-medium text-slate-800">
                  Audit Trail
                </p>

                <p className="text-xs text-slate-500">
                  Activity logging enabled
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        
        <h2 className="text-base font-semibold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Frequently used document-management actions
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          
          <button
            type="button"
            className="rounded-lg border border-slate-200 px-4 py-3 text-left transition hover:border-blue-300 hover:bg-blue-50"
          >
            <p className="text-sm font-medium text-slate-800">
              Create New Case
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Start a new investigation record
            </p>
          </button>

          <button
            type="button"
            className="rounded-lg border border-slate-200 px-4 py-3 text-left transition hover:border-blue-300 hover:bg-blue-50"
          >
            <p className="text-sm font-medium text-slate-800">
              Upload Document
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Add a document to a case
            </p>
          </button>

          <button
            type="button"
            className="rounded-lg border border-slate-200 px-4 py-3 text-left transition hover:border-blue-300 hover:bg-blue-50"
          >
            <p className="text-sm font-medium text-slate-800">
              Verify Document
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Check document integrity
            </p>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Dashboard