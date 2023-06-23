import Image from 'next/image'
import logo from "./../../../public/logo.png";

export default function Header() {
  return (
    <header>
      <Image src={logo} alt={"logo"} />
    </header>
  );
}
