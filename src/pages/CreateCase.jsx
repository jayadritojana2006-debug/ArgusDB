import { useState } from 'react'

function CreateCase({ onBack }) {
  const [formData, setFormData] = useState({
    // Complainant / Informant
    complainantName: '',
    complainantAge: '',
    complainantAddress: '',
    complainantMobile: '',
    complainantOccupation: '',
    complainantId: '',

    // Incident
    incidentDate: '',
    incidentTime: '',
    incidentPlace: '',
    incidentDescription: '',
    incidentHow: '',
    peopleInvolved: '',
    accusedDetails: '',
    victimDetails: '',
    witnessDetails: '',

    // Case Information
    caseTitle: '',
    caseType: '',
    priority: 'Medium',
    lawSections: '',
    policeStation: '',
    firNumber: '',
    registrationDate: '',
    
    // Evidence
    evidenceDescription: '',
    documents: '',
    photosVideos: '',
    messagesRecords: '',
    otherEvidence: '',

    // Officer
    investigatingOfficer: '',
  })

  const [created, setCreated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCreated(true)
  }

  if (created) {
    return (
      <div className="min-h-full bg-slate-50 p-6">
        <div className="mx-auto max-w-3xl">

          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
            </div>

            <h1 className="mt-5 text-2xl font-semibold text-slate-900">
              Case Created Successfully
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              The investigation record has been created successfully.
            </p>

            <div className="mx-auto mt-6 max-w-md rounded-xl border border-slate-200 bg-slate-50 p-5 text-left">

              <div className="mb-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Case ID
                </p>

                <p className="mt-1 font-mono text-lg font-semibold text-slate-900">
                  ARG-2026-00125
                </p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Case Title
                </p>

                <p className="mt-1 text-sm font-medium text-slate-800">
                  {formData.caseTitle}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Case Type
                </p>

                <p className="mt-1 text-sm font-medium text-slate-800">
                  {formData.caseType}
                </p>
              </div>

            </div>

            <button
              type="button"
              onClick={onBack}
              className="mt-7 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Back to Cases
            </button>

          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-full bg-slate-50 p-6">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-6">

          <button
            type="button"
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 18 9 12l6-6"
              />
            </svg>

            Back to Cases
          </button>

          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Create New Case
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Create a secure investigation record with complainant, incident,
            case and evidence details.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* ========================================================= */}
          {/* COMPLAINANT / INFORMANT DETAILS */}
          {/* ========================================================= */}

          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">

            <div className="border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <span className="text-sm font-bold">01</span>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Complainant / Informant Details
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Details of the person reporting or providing information
                    about the incident.
                  </p>
                </div>

              </div>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="complainantName"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="complainantName"
                  name="complainantName"
                  type="text"
                  value={formData.complainantName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Age */}
              <div>
                <label
                  htmlFor="complainantAge"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Age
                </label>

                <input
                  id="complainantAge"
                  name="complainantAge"
                  type="number"
                  min="0"
                  max="120"
                  value={formData.complainantAge}
                  onChange={handleChange}
                  placeholder="Enter age"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Mobile */}
              <div>
                <label
                  htmlFor="complainantMobile"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Mobile / Contact Number
                </label>

                <input
                  id="complainantMobile"
                  name="complainantMobile"
                  type="tel"
                  value={formData.complainantMobile}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Occupation */}
              <div>
                <label
                  htmlFor="complainantOccupation"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Occupation
                  <span className="ml-1 text-xs font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <input
                  id="complainantOccupation"
                  name="complainantOccupation"
                  type="text"
                  value={formData.complainantOccupation}
                  onChange={handleChange}
                  placeholder="Enter occupation"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label
                  htmlFor="complainantAddress"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Address
                </label>

                <textarea
                  id="complainantAddress"
                  name="complainantAddress"
                  rows="3"
                  value={formData.complainantAddress}
                  onChange={handleChange}
                  placeholder="Enter residential / correspondence address"
                  required
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Identification */}
              <div className="md:col-span-2">
                <label
                  htmlFor="complainantId"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Identification Details
                  <span className="ml-1 text-xs font-normal text-slate-400">
                    (Where required)
                  </span>
                </label>

                <input
                  id="complainantId"
                  name="complainantId"
                  type="text"
                  value={formData.complainantId}
                  onChange={handleChange}
                  placeholder="Identification type / reference details"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

            </div>
          </section>


          {/* ========================================================= */}
          {/* INCIDENT DETAILS */}
          {/* ========================================================= */}

          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">

            <div className="border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <span className="text-sm font-bold">02</span>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Incident Details
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Record the circumstances and people connected to the incident.
                  </p>
                </div>

              </div>
            </div>

            <div className="space-y-6 p-6">

              {/* Date + Time */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="incidentDate"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Date of Incident
                  </label>

                  <input
                    id="incidentDate"
                    name="incidentDate"
                    type="date"
                    value={formData.incidentDate}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="incidentTime"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Approximate Time
                  </label>

                  <input
                    id="incidentTime"
                    name="incidentTime"
                    type="time"
                    value={formData.incidentTime}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

              </div>

              {/* Place */}
              <div>
                <label
                  htmlFor="incidentPlace"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Place of Occurrence
                </label>

                <input
                  id="incidentPlace"
                  name="incidentPlace"
                  type="text"
                  value={formData.incidentPlace}
                  onChange={handleChange}
                  placeholder="Enter location where the incident occurred"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* What Happened */}
              <div>
                <label
                  htmlFor="incidentDescription"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  What Happened
                </label>

                <textarea
                  id="incidentDescription"
                  name="incidentDescription"
                  rows="5"
                  value={formData.incidentDescription}
                  onChange={handleChange}
                  placeholder="Describe the incident and what happened..."
                  required
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* How */}
              <div>
                <label
                  htmlFor="incidentHow"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  How It Happened
                </label>

                <textarea
                  id="incidentHow"
                  name="incidentHow"
                  rows="4"
                  value={formData.incidentHow}
                  onChange={handleChange}
                  placeholder="Provide available information about how the incident occurred..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* People Involved */}
              <div>
                <label
                  htmlFor="peopleInvolved"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  People Involved
                </label>

                <textarea
                  id="peopleInvolved"
                  name="peopleInvolved"
                  rows="3"
                  value={formData.peopleInvolved}
                  onChange={handleChange}
                  placeholder="List known people involved in the incident..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Accused */}
              <div>
                <label
                  htmlFor="accusedDetails"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Accused Details
                  <span className="ml-1 text-xs font-normal text-slate-400">
                    (If known)
                  </span>
                </label>

                <textarea
                  id="accusedDetails"
                  name="accusedDetails"
                  rows="3"
                  value={formData.accusedDetails}
                  onChange={handleChange}
                  placeholder="Name and available details of accused person(s)..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Victims */}
              <div>
                <label
                  htmlFor="victimDetails"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Victim / Other Persons Details
                </label>

                <textarea
                  id="victimDetails"
                  name="victimDetails"
                  rows="3"
                  value={formData.victimDetails}
                  onChange={handleChange}
                  placeholder="Names and available details of victims or other persons involved..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Witnesses */}
              <div>
                <label
                  htmlFor="witnessDetails"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Witness Details
                  <span className="ml-1 text-xs font-normal text-slate-400">
                    (If applicable)
                  </span>
                </label>

                <textarea
                  id="witnessDetails"
                  name="witnessDetails"
                  rows="3"
                  value={formData.witnessDetails}
                  onChange={handleChange}
                  placeholder="Names and available contact/details of witnesses..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

            </div>
          </section>


          {/* ========================================================= */}
          {/* CASE INFORMATION */}
          {/* ========================================================= */}

          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">

            <div className="border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <span className="text-sm font-bold">03</span>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Case Information
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Official classification and registration information.
                  </p>
                </div>

              </div>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">

              {/* Case Title */}
              <div className="md:col-span-2">
                <label
                  htmlFor="caseTitle"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Case Title
                </label>

                <input
                  id="caseTitle"
                  name="caseTitle"
                  type="text"
                  value={formData.caseTitle}
                  onChange={handleChange}
                  placeholder="Enter case title"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Case Type */}
              <div>
                <label
                  htmlFor="caseType"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Type / Nature of Offence
                </label>

                <select
                  id="caseType"
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="">Select offence type</option>
                  <option value="Murder">Murder</option>
                  <option value="Theft">Theft</option>
                  <option value="Assault">Assault</option>
                  <option value="Domestic Violence">
                    Domestic Violence
                  </option>
                  <option value="Cyber Crime">Cyber Crime</option>
                  <option value="Financial Crime">Financial Crime</option>
                  <option value="Fraud">Fraud</option>
                  <option value="Missing Person">Missing Person</option>
                  <option value="Kidnapping">Kidnapping</option>
                  <option value="Robbery">Robbery</option>
                  <option value="Sexual Offence">Sexual Offence</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label
                  htmlFor="priority"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Priority
                </label>

                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>

              {/* Law Sections */}
              <div className="md:col-span-2">
                <label
                  htmlFor="lawSections"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Relevant Sections of Law
                </label>

                <input
                  id="lawSections"
                  name="lawSections"
                  type="text"
                  value={formData.lawSections}
                  onChange={handleChange}
                  placeholder="Enter applicable legal sections / provisions"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Police Station */}
              <div>
                <label
                  htmlFor="policeStation"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Police Station
                </label>

                <input
                  id="policeStation"
                  name="policeStation"
                  type="text"
                  value={formData.policeStation}
                  onChange={handleChange}
                  placeholder="Enter police station"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* FIR Number */}
              <div>
                <label
                  htmlFor="firNumber"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  FIR / Complaint Number
                  <span className="ml-1 text-xs font-normal text-slate-400">
                    (Once registered)
                  </span>
                </label>

                <input
                  id="firNumber"
                  name="firNumber"
                  type="text"
                  value={formData.firNumber}
                  onChange={handleChange}
                  placeholder="Enter FIR / complaint number"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Registration Date */}
              <div>
                <label
                  htmlFor="registrationDate"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Date of Registration
                </label>

                <input
                  id="registrationDate"
                  name="registrationDate"
                  type="date"
                  value={formData.registrationDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Investigating Officer */}
              <div>
                <label
                  htmlFor="investigatingOfficer"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Investigating Officer
                </label>

                <input
                  id="investigatingOfficer"
                  name="investigatingOfficer"
                  type="text"
                  value={formData.investigatingOfficer}
                  onChange={handleChange}
                  placeholder="Enter officer name or official ID"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

            </div>
          </section>


          {/* ========================================================= */}
          {/* EVIDENCE / INFORMATION */}
          {/* ========================================================= */}

          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">

            <div className="border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <span className="text-sm font-bold">04</span>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Evidence & Information Available
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Record available evidence and supporting information.
                  </p>
                </div>

              </div>
            </div>

            <div className="space-y-6 p-6">

              {/* Evidence Description */}
              <div>
                <label
                  htmlFor="evidenceDescription"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Evidence / Information Available
                </label>

                <textarea
                  id="evidenceDescription"
                  name="evidenceDescription"
                  rows="4"
                  value={formData.evidenceDescription}
                  onChange={handleChange}
                  placeholder="Provide a brief description of available evidence or information..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Documents */}
              <div>
                <label
                  htmlFor="documents"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Documents
                </label>

                <textarea
                  id="documents"
                  name="documents"
                  rows="3"
                  value={formData.documents}
                  onChange={handleChange}
                  placeholder="Describe available documents, reports, statements, records, etc."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Photos / Videos */}
              <div>
                <label
                  htmlFor="photosVideos"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Photos / Videos
                </label>

                <textarea
                  id="photosVideos"
                  name="photosVideos"
                  rows="3"
                  value={formData.photosVideos}
                  onChange={handleChange}
                  placeholder="Describe available photographs, CCTV footage, videos, etc."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Messages / Records */}
              <div>
                <label
                  htmlFor="messagesRecords"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Messages / Other Records
                </label>

                <textarea
                  id="messagesRecords"
                  name="messagesRecords"
                  rows="3"
                  value={formData.messagesRecords}
                  onChange={handleChange}
                  placeholder="Describe available messages, emails, call records or other digital records..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Other Evidence */}
              <div>
                <label
                  htmlFor="otherEvidence"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Other Relevant Evidence
                </label>

                <textarea
                  id="otherEvidence"
                  name="otherEvidence"
                  rows="3"
                  value={formData.otherEvidence}
                  onChange={handleChange}
                  placeholder="Enter any other relevant evidence or information..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              </div>

            </div>
          </section>


          {/* ========================================================= */}
          {/* SECURITY NOTICE */}
          {/* ========================================================= */}

          <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-5">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3.5 5 6v5.25c0 4.34 2.94 7.92 7 9.25 4.06-1.33 7-4.91 7-9.25V6l-7-2.5Z"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15.5h.01"
              />
            </svg>

            <div>
              <p className="text-sm font-medium text-blue-900">
                Secure Case Record
              </p>

              <p className="mt-1 text-xs leading-5 text-blue-700">
                Case information and evidence records are intended to be
                protected through role-based access, encryption, integrity
                verification and audit logging.
              </p>
            </div>

          </div>


          {/* ========================================================= */}
          {/* ACTIONS */}
          {/* ========================================================= */}

          <div className="flex flex-col-reverse gap-3 pb-6 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={onBack}
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              Create Case
            </button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateCase