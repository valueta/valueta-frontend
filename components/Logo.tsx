import Image from "next/image";

const Logo = () => {
  return <Image src="/logo.svg" width={100} height={38} alt="Brand Logo" priority />;
};

export default Logo;
