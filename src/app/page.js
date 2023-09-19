import Image from "next/image";
// import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}
