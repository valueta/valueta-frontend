import React from "react";
import Icon from "./Icon";

type Props = {
  password: string;
};

const PasswordValidator: React.FC<Props> = ({ password }) => {
  return (
    <div className="grid grid-cols-2 gap-4 pb-5">
      <div className="flex items-center justify-between">
        <span className="text-[#7B7F99] font-medium text-xs">
          8+ Characters
        </span>
        <Icon
          name={(password.length || 0) >= 8 ? "grey-check" : "grey-check"}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[#7B7F99] font-medium text-xs">1+ Uppercase</span>
        <Icon
          name={
            /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)
              ? "grey-check"
              : "grey-check"
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[#7B7F99] font-medium text-xs">1+ Number</span>
        <Icon name={/\d/.test(password) ? "grey-check" : "grey-check"} />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[#7B7F99] font-medium text-xs">1+ Symbol</span>
        <Icon
          name={
            /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
              ? "grey-check"
              : "grey-check"
          }
        />
      </div>
    </div>
  );
};

export default PasswordValidator;
