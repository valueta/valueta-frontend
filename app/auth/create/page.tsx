"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import PasswordValidator from "@/components/PasswordValidator";
const Create = () => {
  return (
    <div>
      <p className="font-semibold text-xl">Create your Account</p>
      <p className="text-sm font-medium text-grey-100 pt-4">
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </p>

      <form className="pt-4">
        <div className="grid grid-cols-2 gap-4">
          <Input type="text" label="First Name" placeholder="John" />
          <Input type="text" label="Last Name" placeholder="Doe" />
        </div>

        <Input type="text" label="Email Address" placeholder="Doe" />

        <Input type="password" label="Password" placeholder="********" />
        <PasswordValidator password={""} />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="********"
        />

        <Button text="Continue" className="mt-2" secondary />
      </form>
    </div>
  );
};

export default Create;
