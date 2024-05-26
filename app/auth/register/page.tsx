import PhoneNumberInput from "@/components/PhoneInput";
const Register = () => {
  return (
    <div className="text-black">
      <div className="text-center">
        <p className="font-semibold text-xl">Enter your Phone Number</p>
        <p className="text-sm font-medium text-grey-100 pt-4">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex flex-col items-center pt-5">
        <PhoneNumberInput />
      </div>
    </div>
  );
};

export default Register;
