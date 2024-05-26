import { ReactNode } from "react";
import Logo from "@/components/Logo";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="bg-primary"></div>

      <div className="flex flex-col items-center px-[170px] pt-[61px] bg-white">
        <div className="pb-8">
          <Logo />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
