"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className="">
      <label className="font-medium text-xs pb-1">Phone Number</label>

      <div className="text-center">
        <PhoneInput
          country={"by"}
          placeholder="(25) 701-95-32"
          dropdownClass="text-left"
          buttonClass="!border-l-0 !border-t-0 !border-b-0 p-1"
          countryCodeEditable={false}
          value={phoneNumber}
          onChange={handleChange}
          inputStyle={{
            backgroundColor: "#F8F8F8",
            borderTopLeftRadius: "9px",
            borderBottomLeftRadius: "9px",
            border: "none",
            borderTopRightRadius: "9px",
            borderBottomRightRadius: "9px",
            height: "56px",
            width: "100%"
          }}
          inputProps={{
            required: true,
            autoFocus: true,
          }}
        />
      </div>

      {!valid && (
        <p className="border-l-0">Please enter a valid phone number.</p>
      )}
    </div>
  );
};

export default PhoneNumberValidation;
