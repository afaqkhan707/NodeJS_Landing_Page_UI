import styles from "../components/Navbar.css";
import Image from "next/image";
import logo from "../../../assets/Logo.svg";
import lang from "..//../../assets/lang.svg";
import globe from "../..//../assets/globe.svg";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <Image src={logo} alt="Logo" width={100} height={50} />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Downloads</a>
        </li>
        <li>
          <a href="#">DOCS</a>
        </li>
        <li>
          <a href="#">Get Involved</a>
        </li>
        <li>
          <a href="#">Security</a>
        </li>
        <li>
          <a href="#">Certification</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
      </ul>
      <div className="icons">
        <Image src={lang} width={80} height={40} />
        <Image src={globe} width={80} height={40} />
      </div>
    </header>

  );
}
