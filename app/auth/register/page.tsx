import PhoneNumberInput from "@/components/PhoneInput";
import Button from "@/components/Button";
import Link from "next/link";
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

      <div className="pt-5 text-left">
        <PhoneNumberInput />
        <Button text="Continue" className="mt-7" secondary />
      </div>

      <div className="pt-5 text-sm font-medium text-center leading-5">
        <p className="text-grey-100">
          For new users, by clicking “Continue”, you agree to our
        </p>
        <span className="inline-block">
          <Link href="#" className="underline">Terms & Conditions</Link> and
          <Link href="#" className="underline"> Privacy Policy</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
