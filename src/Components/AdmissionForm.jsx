import React, { useState } from "react";
import {
  FaUserGraduate,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCalendarAlt,
  FaIdCard,
  FaSchool,
  FaMobileAlt,
  FaHome,
  FaCity,
  FaMapPin,
  FaBriefcase,
  FaUpload,
  FaCamera,
  FaFileAlt,
  FaCheckSquare,
  FaPhone
} from "react-icons/fa";

/* ------------------ INPUT COMPONENT ------------------ */
const Input = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  icon: Icon,
  pattern,
  maxLength,
  readOnly = false,
}) => (
  <div className="relative">
    {Icon && (
      <span className="absolute inset-y-0 left-3 flex items-center text-[var(--color-DarkGray)]">
        <Icon />
      </span>
    )}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder + (required ? " *" : "")}
      required={required}
      pattern={pattern}
      maxLength={maxLength}
      readOnly={readOnly}
      className={`w-full rounded-xl border border-[var(--color-softgray)] bg-[var(--color-white)]
      px-4 py-3 text-base placeholder:text-[var(--color-DarkGray)] outline-none focus:outline-none
      focus:border-[var(--color-darkBlue-2)] focus:ring-2 focus:ring-[var(--color-darkBlue-2)]/20
      transition ${Icon ? "pl-11" : ""} ${readOnly ? "bg-[var(--color-lightgray)]" : ""}`}
    />
  </div>
);

/* ------------------ TEXTAREA ------------------ */
const TextArea = ({ name, placeholder, value, onChange, required = false }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder + (required ? " *" : "")}
    required={required}
    rows={3}
    className="w-full rounded-xl border border-[var(--color-softgray)] bg-[var(--color-white)]
    px-4 py-3 text-base placeholder:text-[var(--color-DarkGray)]
    focus:border-[var(--color-darkBlue-2)] focus:ring-2 focus:ring-[var(--color-darkBlue-2)]/20 transition"
  />
);

/* ------------------ SECTION HEADER ------------------ */
const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-[var(--color-lightgray)] pb-4">

    <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-DarkBlue)]">
      {title}
    </h2>
  </div>
);

/* ------------------ SELECT COMPONENT ------------------ */
/* ------------------ SELECT COMPONENT (FIXED & PREMIUM) ------------------ */
const Select = ({
  name,
  value,
  onChange,
  options = [],
  required = false,
  icon: Icon,
  placeholder = "Select option",
  disabled = false,
}) => (
  <div className="relative">
    {/* LEFT ICON */}
    {Icon && (
      <span className="absolute inset-y-0 left-3 flex items-center text-[var(--color-DarkGray)] pointer-events-none">
        <Icon />
      </span>
    )}

    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`w-full appearance-none rounded-xl border border-[var(--color-softgray)]
      bg-[var(--color-white)] px-4 py-3 text-base
      focus:border-[var(--color-darkBlue-2)] outline-none focus:outline-none
      focus:ring-2 focus:ring-[var(--color-darkBlue-2)]/20
      transition
      ${Icon ? "pl-11" : ""}
      ${value === "" ? "text-[var(--color-DarkGray)]" : "text-[var(--color-Black)]"}
      ${disabled ? "bg-[var(--color-lightgray)] cursor-not-allowed" : ""}`}
    >
      {/* PLACEHOLDER */}
      <option value="" disabled>
        {placeholder}{required ? " *" : ""}
      </option>

      {options.map((opt, i) => (
        <option key={i} value={opt.value} className="text-[var(--color-Black)]">
          {opt.label}
        </option>
      ))}
    </select>

    {/* DROPDOWN ARROW */}
    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[var(--color-DarkGray)]">
      ▼
    </span>
  </div>
);


const bloodGroupOptions = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];

const howDidYouKnowOptions = [
  { label: "Promotions Team", value: "promotions" },
  { label: "Newspaper", value: "newspaper" },
  { label: "Teachers", value: "teachers" },
  { label: "Friends / Relatives", value: "friends" },
  { label: "Website", value: "website" },
  { label: "Radio / TV", value: "radioTV" },
  { label: "Other", value: "other" },
];

const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other", value: "Other" },
];

const categoryOptions = [
  { label: "GEN", value: "GEN" },
  { label: "OBC", value: "OBC" },
  { label: "SC", value: "SC" },
  { label: "ST", value: "ST" },
  { label: "PH", value: "PH" },
];

const stateOptions = [
  { label: "Maharashtra", value: "Maharashtra" },
  { label: "Karnataka", value: "Karnataka" },
  { label: "Gujarat", value: "Gujarat" },
  { label: "Delhi", value: "Delhi" },
  { label: "Tamil Nadu", value: "Tamil Nadu" },
];

/* ================= MAIN COMPONENT ================= */

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    fatherOccupation: "",
    motherOccupation: "",
    bloodGroup: "",
    nationality: "",
    gender: "",
    category: "",
    mobile: "",
    parentMobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    school: "",
    percentage: "",
    photo: null,
    marksheet: null,
    agree: false,
    courseType: [],
    howDidYouKnow: [],
    courseLevel: {
      foundations: "",
      medical: "",
      engineering: "",
    },
    courseNameCode: "",
    permanentAddress: {
      address: "",
      city: "",
      state: "",
      pin: "",
      phoneOffice: "",
      phoneResidence: "",
    },
    correspondenceAddress: {
      address: "",
      city: "",
      state: "",
      pin: "",
      phoneOffice: "",
      phoneResidence: "",
    },
    sameAsPermanent: false,
    schoolAddress: "",
    marksX: "",
    marksPCB: "",
    marksPCM: "",
    grades: "",
    examBoard: "",
    educationOther: "",
  });

  const handleHowDidYouKnowChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      howDidYouKnow: checked
        ? [...prev.howDidYouKnow, value]
        : prev.howDidYouKnow.filter((v) => v !== value),
    }));
  };

  const handlePermanentChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedPermanent = {
        ...prev.permanentAddress,
        [name]: value,
      };

      return {
        ...prev,
        permanentAddress: updatedPermanent,
        correspondenceAddress: prev.sameAsPermanent
          ? { ...updatedPermanent }
          : prev.correspondenceAddress,
      };
    });
  };

  const handleCorrespondenceChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      correspondenceAddress: {
        ...prev.correspondenceAddress,
        [name]: value,
      },
    }));
  };

  const handleSameAddressToggle = () => {
    setFormData((prev) => ({
      ...prev,
      sameAsPermanent: !prev.sameAsPermanent,
      correspondenceAddress: !prev.sameAsPermanent
        ? { ...prev.permanentAddress }
        : {
          address: "",
          city: "",
          state: "",
          pin: "",
          phoneOffice: "",
          phoneResidence: "",
        },
    }));
  };

  const handleCourseTypeChange = (course) => {
    setFormData((prev) => ({
      ...prev,
      courseType: prev.courseType.includes(course)
        ? prev.courseType.filter((c) => c !== course)
        : [...prev.courseType, course],
    }));
  };

  const handleCourseLevelChange = (course, level) => {
    setFormData((prev) => ({
      ...prev,
      courseLevel: {
        ...prev.courseLevel,
        [course]: level,
      },
    }));
  };


  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Admission Form Submitted Successfully");
  };

  return (
    <div className="min-h-screen bg-[var(--color-veryLightgray)] p-4 md:p-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-[var(--color-white)] rounded-2xl shadow-2xl p-6 md:p-10"
      >
        {/* HEADER */}
        <div className='mx-auto flex justify-center mb-8'>
          <div className='text-center'>
            <div className="flex items-center ">
              <img className='w-[80px] h-[80px] object-cover' src='/Images/Sagar education Logo.jpeg' />
              <h1 className="text-xl md:text-3xl font-bold text-DarkBlue">SAGAR EDUCATION</h1>
            </div>
            <p className="text-sm md:text-xl font-medium text-lightgreen mt-[-10px]">Medical | IIT-JEE | Foundations</p>
            <h2 className="mt-8 text-2xl font-semibold text-[var(--color-LogoBlue)]">
              ADMISSION FORM
            </h2>
          </div>
        </div>

        <div className="space-y-5 md:space-y-10">
          {/* Course Selection */}
          {/* COURSE SELECTION */}
          <div>
            <SectionHeader
              icon={FaGraduationCap}
              title="Course Selection"
            />

            <div className="mb-10 p-6 rounded-2xl bg-[var(--color-veryLightgray)] border border-[var(--color-lightgray)]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* FOUNDATIONS */}
                <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100">
                  <label className="flex items-center gap-3 font-semibold text-base text-[var(--color-DarkBlue)]">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded overflow-hidden"
                      checked={formData.courseType.includes("foundations")}
                      onChange={() => handleCourseTypeChange("foundations")}
                    />
                    FOUNDATIONS
                  </label>

                  <div className="mt-4 space-y-2 pl-6">
                    {["IX", "X"].map((level) => (
                      <label key={level} className="flex items-center gap-2 text-base">
                        <input
                          type="radio"
                          className="w-4 h-4"
                          name="foundations-level"
                          value={level}
                          disabled={!formData.courseType.includes("foundations")}
                          checked={formData.courseLevel.foundations === level}
                          onChange={(e) =>
                            handleCourseLevelChange("foundations", e.target.value)
                          }
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>

                {/* MEDICAL */}
                <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100">
                  <label className="flex items-center gap-3 font-semibold text-[var(--color-DarkBlue)]">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded overflow-hidden"
                      checked={formData.courseType.includes("medical")}
                      onChange={() => handleCourseTypeChange("medical")}
                    />
                    MEDICAL
                  </label>

                  <div className="mt-4 space-y-2 pl-6">
                    {["XI", "XII"].map((level) => (
                      <label key={level} className="flex items-center gap-2 text-base">
                        <input
                          type="radio"
                          className="w-4 h-4"
                          name="medical-level"
                          value={level}
                          disabled={!formData.courseType.includes("medical")}
                          checked={formData.courseLevel.medical === level}
                          onChange={(e) =>
                            handleCourseLevelChange("medical", e.target.value)
                          }
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>

                {/* ENGINEERING */}
                <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100">
                  <label className="flex items-center gap-3 font-semibold text-[var(--color-DarkBlue)]">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded overflow-hidden"
                      checked={formData.courseType.includes("engineering")}
                      onChange={() => handleCourseTypeChange("engineering")}
                    />
                    ENGINEERING
                  </label>

                  <div className="mt-4 space-y-2 pl-8">
                    {["XI", "XII"].map((level) => (
                      <label key={level} className="flex items-center gap-2 text-base">
                        <input
                          type="radio"
                          name="engineering-level"
                          className="w-4 h-4"
                          value={level}
                          disabled={!formData.courseType.includes("engineering")}
                          checked={formData.courseLevel.engineering === level}
                          onChange={(e) =>
                            handleCourseLevelChange("engineering", e.target.value)
                          }
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* COURSE CODE */}
              <div className="mt-8">
                <Input
                  name="courseNameCode"
                  placeholder="Course Name with Code (e.g. MED-XI-PCM-001)"
                  value={formData.courseNameCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* PERSONAL DETAILS */}
          <div>
            <SectionHeader icon={FaUserGraduate} title="Personal Details" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="firstName"
                placeholder="Student First Name"
                required
                icon={FaUserGraduate}
                value={formData.firstName}
                onChange={handleChange}
              />

              <Input
                name="lastName"
                placeholder="Student Last Name"
                required
                icon={FaUserGraduate}
                value={formData.lastName}
                onChange={handleChange}
              />

              <Input
                name="fatherName"
                placeholder="Father / Guardian Name"
                required
                icon={FaBriefcase}
                value={formData.fatherName}
                onChange={handleChange}
              />

              <Input
                name="fatherOccupation"
                placeholder="Father Occupation"
                icon={FaBriefcase}
                value={formData.fatherOccupation}
                onChange={handleChange}
              />

              <Input
                name="motherName"
                placeholder="Mother Name"
                required
                icon={FaBriefcase}
                value={formData.motherName}
                onChange={handleChange}
              />

              <Input
                name="motherOccupation"
                placeholder="Mother Occupation"
                icon={FaBriefcase}
                value={formData.motherOccupation}
                onChange={handleChange}
              />

              {/* Date of Birth with placeholder */}
              <div>
                {/* <p className="text-sm text-gray-400">Select Date of Birth</p> */}
                <Input
                  name="dob"
                  type="date"
                  required
                  icon={FaCalendarAlt}
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              <Select
                name="bloodGroup"
                placeholder="Select Blood Group"
                value={formData.bloodGroup}
                onChange={handleChange}
                options={bloodGroupOptions}
                icon={FaIdCard}
                required
              />

              <Select
                name="category"
                placeholder="Select Category"
                value={formData.category}
                onChange={handleChange}
                options={categoryOptions}
                icon={FaIdCard}
              />

              <Input
                name="nationality"
                placeholder="Nationality"
                value={formData.nationality}
                onChange={handleChange}
              />

              <Select
                name="gender"
                placeholder="Select Gender"
                value={formData.gender}
                onChange={handleChange}
                options={genderOptions}
                icon={FaUserGraduate}
                required
              />
            </div>
          </div>


          {/* CONTACT */}
          <div>
            <SectionHeader icon={FaPhoneAlt} title="Contact Details" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input name="mobile" placeholder="Student Mobile Number" required icon={FaMobileAlt} value={formData.mobile} onChange={handleChange} />
              <Input name="parentMobile" placeholder="Parent Mobile Number" required icon={FaMobileAlt} value={formData.parentMobile} onChange={handleChange} />
              <Input name="email" type="email" placeholder="Email Address" required icon={FaEnvelope} value={formData.email} onChange={handleChange} />
            </div>
          </div>

          {/* Address Details */}
          <div>
            <SectionHeader icon={FaHome} title="Address Details" />

            {/* PERMANENT ADDRESS */}
            <div className="mb-10 p-6 rounded-2xl bg-[var(--color-veryLightgray)] border border-[var(--color-lightgray)]">
              <h3 className="text-lg font-semibold text-[var(--color-DarkBlue)] mb-4">
                Permanent Address
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <TextArea
                    name="address"
                    placeholder="Permanent Address"
                    required
                    value={formData.permanentAddress.address}
                    onChange={handlePermanentChange}
                  />
                </div>

                <div className="flex flex-col">
                  <Input
                    name="city"
                    placeholder="City"
                    required
                    value={formData.permanentAddress.city}
                    onChange={handlePermanentChange}
                  />
                </div>

                <Select
                  name="state"
                  placeholder="Select State"
                  value={formData.permanentAddress.state}
                  onChange={handlePermanentChange}
                  options={stateOptions}
                  icon={FaMapMarkerAlt}
                  required
                />

                <Input
                  name="pin"
                  placeholder="PIN Code"
                  required
                  pattern="\d{6}"
                  maxLength={6}
                  icon={FaMapPin}
                  value={formData.permanentAddress.pin}
                  onChange={handlePermanentChange}
                />

                <Input
                  name="phoneOffice"
                  placeholder="Office Phone Number"
                  icon={FaPhone}
                  value={formData.permanentAddress.phoneOffice}
                  onChange={handlePermanentChange}
                />

                <Input
                  name="phoneResidence"
                  placeholder="Residence Phone Number"
                  icon={FaPhone}
                  value={formData.permanentAddress.phoneResidence}
                  onChange={handlePermanentChange}
                />
              </div>
            </div>



            {/* CORRESPONDENCE ADDRESS */}
            <div className="p-6 rounded-2xl bg-[var(--color-veryLightgray)] border border-[var(--color-lightgray)]">
              <div className="flex items-center h-fit gap-3">
                <h3 className="text-lg font-semibold text-[var(--color-DarkBlue)] mb-4">
                  Correspondence Address
                </h3>
                {/* SAME AS CHECKBOX */}
                <div className="mb-6 flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-1"
                    checked={formData.sameAsPermanent}
                    onChange={handleSameAddressToggle}
                  />
                  <span className="text-sm font-medium text-[var(--color-softBlack)]">
                    Correspondence Address same as Permanent Address
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextArea
                  name="address"
                  placeholder="Correspondence Address"
                  required
                  value={formData.correspondenceAddress.address}
                  onChange={handleCorrespondenceChange}
                  readOnly={formData.sameAsPermanent}
                />

                <Input
                  name="city"
                  placeholder="City"
                  required
                  value={formData.correspondenceAddress.city}
                  onChange={handleCorrespondenceChange}
                  readOnly={formData.sameAsPermanent}
                />

                <Input
                  name="state"
                  placeholder="State"
                  required
                  icon={FaMapMarkerAlt}
                  value={formData.correspondenceAddress.state}
                  onChange={handleCorrespondenceChange}
                  readOnly={formData.sameAsPermanent}
                />

                <Input
                  name="pin"
                  placeholder="PIN Code"
                  required
                  pattern="\d{6}"
                  maxLength={6}
                  icon={FaMapPin}
                  value={formData.correspondenceAddress.pin}
                  onChange={handleCorrespondenceChange}
                  readOnly={formData.sameAsPermanent}
                />

                <Input
                  name="phoneOffice"
                  placeholder="Office Phone Number"
                  icon={FaPhone}
                  value={formData.correspondenceAddress.phoneOffice}
                  onChange={handleCorrespondenceChange}
                  readOnly={formData.sameAsPermanent}
                />

                <Input
                  name="phoneResidence"
                  placeholder="Residence Phone Number"
                  icon={FaPhone}
                  value={formData.correspondenceAddress.phoneResidence}
                  onChange={handleCorrespondenceChange}
                  readOnly={formData.sameAsPermanent}
                />
              </div>
            </div>
          </div>


          {/* EDUCATION DETAILS */}
          <div>
            <SectionHeader icon={FaGraduationCap} title="Education Details" />

            {/* School / College */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input
                name="school"
                placeholder="School / College Name"
                required
                icon={FaSchool}
                value={formData.school}
                onChange={handleChange}
              />

              <Input
                name="schoolAddress"
                placeholder="School / College Address"
                required
                value={formData.schoolAddress}
                onChange={handleChange}
              />
            </div>

            {/* MARKS OBTAINED */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-[var(--color-DarkBlue)] mb-3">
                Marks Obtained (%)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input
                  name="marksX"
                  placeholder="% (Class VIII / IX / X – Science & Mathematics Aggregate)"
                  value={formData.marksX}
                  onChange={handleChange}
                />

                <Input
                  name="marksPCB"
                  placeholder="% (XII Board – PCB Aggregate)"
                  value={formData.marksPCB}
                  onChange={handleChange}
                />

                <Input
                  name="marksPCM"
                  placeholder="% (XII Board – PCM Aggregate)"
                  value={formData.marksPCM}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* GRADES & BOARD */}
            <div>
              <p className="text-sm font-semibold text-[var(--color-DarkBlue)] flex items-center gap-2 mb-3">
                Grades Obtained (%) <span className="text-[10px] font-medium">(Class VII / IX / X)</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input
                  name="grades"
                  placeholder="Grades Obtained (In Science)"
                  value={formData.grades}
                  onChange={handleChange}
                />

                <Input
                  name="grades"
                  placeholder="Grades Obtained (In Maths) "
                  value={formData.grades}
                  onChange={handleChange}
                />


              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input
                name="examBoard"
                placeholder="Exam Board (CBSE / ICSE / State Board / Other)"
                value={formData.examBoard}
                onChange={handleChange}
              />
              {/* OTHER DETAILS */}
              <Input
                name="educationOther"
                placeholder="Other Educational Details (Optional)"
                value={formData.educationOther}
                onChange={handleChange}
              />
            </div>
          </div>


          {/* UPLOAD SECTION */}
          <div>
            <SectionHeader icon={FaUpload} title="Upload Documents" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PHOTO UPLOAD */}
              <div className="relative flex flex-col justify-between border-2 border-dashed border-[var(--color-softgray)] rounded-2xl p-6 bg-[var(--color-veryLightgray)] hover:border-[var(--color-DarkBlue)] transition">

                <div className="flex flex-col items-center text-center">
                  <FaCamera className="text-5xl text-[var(--color-DarkGray)] mb-3" />
                  <p className="text-sm font-medium text-[var(--color-DarkBlue)]">
                    Passport Size Photograph *
                  </p>
                </div>

                <div className="mt-4 flex flex-col items-center justify-between gap-3">
                  <label className="cursor-pointer">
                    <span className="inline-block px-5 py-2 text-sm font-semibold text-white bg-[var(--color-DarkBlue)] rounded-lg shadow hover:bg-[var(--color-darkBlue-2)] transition">
                      Choose File
                    </span>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>

                  <span className="text-xs text-[var(--color-DarkGray)] truncate max-w-[160px] text-right">
                    {formData.photo ? formData.photo.name : "No file selected"}
                  </span>
                </div>
              </div>

              {/* MARKSHEET UPLOAD */}
              <div className="relative flex flex-col justify-between border-2 border-dashed border-[var(--color-softgray)] rounded-2xl p-6 bg-[var(--color-veryLightgray)] hover:border-[var(--color-DarkBlue)] transition">

                <div className="flex flex-col items-center text-center">
                  <FaFileAlt className="text-5xl text-[var(--color-DarkGray)] mb-3" />
                  <p className="text-sm font-medium text-[var(--color-DarkBlue)]">
                    Self-Attested Marksheet *
                  </p>
                </div>

                <div className="mt-4 flex flex-col items-center justify-between gap-3">
                  <label className="cursor-pointer">
                    <span className="inline-block px-5 py-2 text-sm font-semibold text-white bg-[var(--color-DarkBlue)] rounded-lg shadow hover:bg-[var(--color-darkBlue-2)] transition">
                      Choose File
                    </span>
                    <input
                      type="file"
                      name="marksheet"
                      accept=".pdf,.jpg,.png"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>

                  <span className="text-xs text-[var(--color-DarkGray)] truncate max-w-[160px] text-right">
                    {formData.marksheet ? formData.marksheet.name : "No file selected"}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* HOW DID YOU KNOW */}
          <div>
            <SectionHeader
              icon={FaCheckSquare}
              title="How did you come to know about Sagar Education?"
            />

            <p className="text-sm text-[var(--color-DarkGray)] mb-5">
              Select all that apply
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {howDidYouKnowOptions.map((option) => {
                const checked = formData.howDidYouKnow.includes(option.value);

                return (
                  <label
                    key={option.value}
                    className={`flex items-center gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-200
          ${checked
                        ? "border-[var(--color-DarkBlue)] bg-blue-50 shadow-md"
                        : "border-[var(--color-lightgray)] bg-white hover:border-[var(--color-DarkBlue)]"
                      }`}
                  >
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={checked}
                      onChange={handleHowDidYouKnowChange}
                      className="w-4 h-4 accent-[var(--color-DarkBlue)]"
                    />

                    <span className="text-base font-medium text-[var(--color-softBlack)]">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>



          {/* DECLARATION */}
          <div className="mt-10 flex items-center gap-2">
            <input type="checkbox" id="agree" name="agree" className="w-4 h-4" required onChange={handleChange} />
            <label htmlFor="agree" className="text-base text-gray-700" >
              I confirm that the above information is true and correct.
            </label>
          </div>
        </div>

        {/* SUBMIT */}
        <div className="mx-auto max-w-fit">
          <button
            type="submit"
            className="mt-10 w-full md:w-auto  px-10 py-4 bg-[var(--color-darkBlue-2)]
          text-white text-xl font-semibold rounded-2xl shadow-lg
          hover:bg-[var(--color-DarkBlue)] transition"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
