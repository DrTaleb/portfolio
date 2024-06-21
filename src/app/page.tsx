import MyWorks from "@/containers/MyWorks/MyWorks";
import Header from "@/containers/header/Header";
import MySkills from "@/containers/mySkills/MySkills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Header />
      <MySkills />
      <MyWorks />
    </>
  );
}
