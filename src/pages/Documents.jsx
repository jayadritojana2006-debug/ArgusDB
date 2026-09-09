import { useState } from 'react'

function Documents() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [showUpload, setShowUpload] = useState(false)

  const documents = [
    {
      id: 'DOC-2026-00421',
      name: 'FIR_Report_00124.pdf',
      type: 'PDF',
      caseId: 'ARG-2026-00124',
      uploadedBy: 'Officer',
      date: 'Today',
      size: '2.4 MB',
      status: 'Verified',
    },
    {
      id: 'DOC-2026-00418',
      name: 'Witness_Statement.pdf',
      type: 'PDF',
      caseId: 'ARG-2026-00119',
      uploadedBy: 'Officer',
      date: 'Yesterday',
      size: '1.8 MB',
      status: 'Verified',
    },
    {
      id: 'DOC-2026-00412',
      name: 'CCTV_Footage.mp4',
      type: 'Video',
      caseId: 'ARG-2026-00119',
      uploadedBy: 'Officer',
      date: '2 days ago',
      size: '84.6 MB',
      status: 'Pending',
    },
    {
      id: 'DOC-2026-00405',
      name: 'Evidence_Photos.zip',
      type: 'Archive',
      caseId: 'ARG-2026-00108',
      uploadedBy: 'Officer',
      date: '3 days ago',
      size: '18.2 MB',
      status: 'Verified',
    },
  ]

  const handleFileSelect = (e) => {
    const file = e.target.files[0]

    if (file) {
      setSelectedFile(file)
      setShowUpload(true)
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`
    }

    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  }

  const getFileType = (fileName) => {
    const extension = fileName.split('.').pop().toUpperCase()

    return extension
  }

  return (
    <div className="min-h-full bg-slate-50 p-6">

      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Documents
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Securely manage investigation documents and digital evidence.
          </p>
        </div>

        {/* Upload Button */}
        <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
          + Upload Document

          <input
            type="file"
            className="hidden"
            onChange={handleFileSelect}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mov,.txt,.zip"
          />
        </label>

      </div>


      {/* Upload Panel */}
      {showUpload && selectedFile && (
        <div className="mb-5 rounded-xl border border-blue-200 bg-white p-5 shadow-sm">

          <div className="mb-4 flex items-center justify-between">

            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Document Selected
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Review the file before secure processing.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedFile(null)
                setShowUpload(false)
              }}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              aria-label="Remove selected file"
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
                  d="m6 6 12 12M18 6 6 18"
                />
              </svg>
            </button>

          </div>


          {/* Selected File */}
          <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex min-w-0 items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">

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
                </svg>

              </div>


              <div className="min-w-0">

                <p className="truncate text-sm font-medium text-slate-800">
                  {selectedFile.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {getFileType(selectedFile.name)} •{' '}
                  {formatFileSize(selectedFile.size)}
                </p>

              </div>

            </div>


            <button
              type="button"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Begin Secure Processing
            </button>

          </div>


          {/* Processing Pipeline */}
          <div className="mt-5">

            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Secure Processing Pipeline
            </p>

            <div className="grid gap-2 sm:grid-cols-4">

              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <p className="text-xs font-medium text-slate-700">
                  01. Upload
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  File received
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <p className="text-xs font-medium text-slate-700">
                  02. Encrypt
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Secure storage
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <p className="text-xs font-medium text-slate-700">
                  03. SHA-256
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Integrity fingerprint
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <p className="text-xs font-medium text-slate-700">
                  04. OCR
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Searchable text
                </p>
              </div>

            </div>

          </div>

        </div>
      )}


      {/* Search + Filters */}
      <div className="mb-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-3 md:flex-row">

          {/* Search */}
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
              placeholder="Search by document name, ID, or case ID..."
              className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
            />

          </div>


          {/* Case Filter */}
          <select
            className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
          >
            <option>All Cases</option>
            <option>ARG-2026-00124</option>
            <option>ARG-2026-00119</option>
            <option>ARG-2026-00108</option>
          </select>


          {/* Status Filter */}
          <select
            className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
          >
            <option>All Status</option>
            <option>Verified</option>
            <option>Pending</option>
          </select>

        </div>
      </div>


      {/* Statistics */}
      <div className="mb-5 grid gap-4 sm:grid-cols-3">

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Total Documents
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            186
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Across all active cases
          </p>
        </div>


        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Verified
          </p>

          <p className="mt-2 text-2xl font-semibold text-green-600">
            179
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Integrity verified
          </p>
        </div>


        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Pending Verification
          </p>

          <p className="mt-2 text-2xl font-semibold text-amber-600">
            7
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Require verification
          </p>
        </div>

      </div>


      {/* Documents Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-100 px-5 py-4">

          <h2 className="text-base font-semibold text-slate-900">
            Secure Document Repository
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Documents and evidence available to your account.
          </p>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px] text-left">

            <thead className="bg-slate-50">

              <tr className="border-b border-slate-200">

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Document
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Case ID
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Type
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Size
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Uploaded
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Integrity
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Action
                </th>

              </tr>

            </thead>


            <tbody className="divide-y divide-slate-100">

              {documents.map((document) => (

                <tr
                  key={document.id}
                  className="transition hover:bg-slate-50"
                >

                  {/* Document */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">

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

                        </svg>

                      </div>


                      <div className="min-w-0">

                        <p className="truncate text-sm font-medium text-slate-800">
                          {document.name}
                        </p>

                        <p className="mt-0.5 font-mono text-xs text-slate-400">
                          {document.id}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* Case ID */}
                  <td className="px-5 py-4">

                    <span className="font-mono text-xs font-medium text-slate-600">
                      {document.caseId}
                    </span>

                  </td>


                  {/* Type */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {document.type}
                  </td>


                  {/* Size */}
                  <td className="px-5 py-4 text-sm text-slate-500">
                    {document.size}
                  </td>


                  {/* Uploaded */}
                  <td className="px-5 py-4 text-sm text-slate-500">
                    {document.date}
                  </td>


                  {/* Integrity */}
                  <td className="px-5 py-4">

                    {document.status === 'Verified' ? (

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">

                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                        Verified

                      </span>

                    ) : (

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">

                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />

                        Pending

                      </span>

                    )}

                  </td>


                  {/* Action */}
                  <td className="px-5 py-4">

                    <button
                      type="button"
                      className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
                    >
                      View
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* Security Notice */}
      <div className="mt-5 flex items-start gap-3 rounded-xl border border-teal-100 bg-teal-50 p-4">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
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


        <div>

          <p className="text-sm font-medium text-teal-900">
            Document Integrity Protection
          </p>

          <p className="mt-1 text-xs leading-5 text-teal-700">
            Uploaded documents will be assigned a unique SHA-256 integrity
            fingerprint. Any modification to a document can then be detected
            during verification.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Documents