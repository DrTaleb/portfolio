import { CONTENT } from "../../content/content";
export default function Navbar() {
  return (
    <nav className="main-nav w-full sticky md:fixed top-0 shadow-sm z-[1000]">
      <div className="hidden md:flex max-w-[1300px] mx-auto flex-row justify-between py-4">
        <div className="flex items-center">
          <span className="font-bold text-xl">محمد جواد طالب کارگر</span>
        </div>
        <a target="_blank" href="/resume/resume.pdf" className="bg-[rgb(141_96_231)] px-3 py-2 rounded-lg text-white">
          {CONTENT.DOWNLOAD_RESUME_BTN}
        </a>
      </div>
      <div className="flex md:hidden max-w-[1300px] mx-auto flex-row justify-between px-3 py-2">
        <div className="flex items-center">
          <span className="font-bold text-md">محمد جواد طالب کارگر</span>
        </div>
        <a
          href="/resume/resume.pdf"
          target="_blank"
          className="bg-[rgb(141_96_231)] px-3 py-2 rounded-lg text-white text-sm"
        >
          {CONTENT.DOWNLOAD_RESUME_BTN}
        </a>
      </div>
    </nav>
  );
}
