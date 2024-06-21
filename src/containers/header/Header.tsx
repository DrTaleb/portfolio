import Image from "next/image";
import { CONTENT } from "../../content/content";
export default function Header() {
  return (
    <div className="header w-full md:h-[600px] relative">
      <div className="hidden md:block -z-[100]">
        <Image
          className="absolute"
          fill={true}
          style={{ objectFit: "cover" }}
          alt=""
          src={"/images/download.png"}
        />
        <Image
          className="absolute mt-4 blur-md opacity-50"
          fill={true}
          style={{ objectFit: "cover" }}
          alt=""
          src={"/images/download.png"}
        />
      </div>
      <div className="md:hidden">
        <Image
          className="absolute rotate-180"
          fill={true}
          style={{ objectFit: "cover" }}
          alt=""
          src={"/images/download (1).png"}
        />
        <Image
          className="absolute mt-4 blur-md opacity-50 rotate-180"
          fill={true}
          style={{ objectFit: "cover" }}
          alt=""
          src={"/images/download (1).png"}
        />
      </div>
      <div className="flex flex-wrap h-full md:items-center">
        <div className="md:hidden w-full md:w-1/2 flex items-center justify-center relative mt-10">
          <Image
            width={170}
            height={170}
            className="rounded-lg"
            alt={CONTENT.MAIN_IMAGE_ALT}
            src={"/images/taleb3.jpg"}
          />
          <div className="absolute blur-lg ms-2 mt-2 -z-10">
            <Image
              width={170}
              height={170}
              className="rounded-lg"
              alt={CONTENT.MAIN_IMAGE_ALT}
              src={"/images/taleb3.jpg"}
            />
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 items-center justify-center relative mt-10">
          <Image
            width={300}
            height={300}
            className="rounded-lg"
            alt={CONTENT.MAIN_IMAGE_ALT}
            src={"/images/taleb3.jpg"}
          />
          <div className="absolute blur-lg ms-2 mt-2 -z-10">
            <Image
              width={330}
              height={330}
              className="rounded-lg"
              alt={CONTENT.MAIN_IMAGE_ALT}
              src={"/images/taleb3.jpg"}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center md:items-start mt-7 md:mt-0  z-[100]">
          <h1 className="font-bold text-[24px] md:text-[30px] md:text-start text-center">
            {CONTENT.H1}
          </h1>
          <h2 className="font-normal text-gray-700 text-[18px] md:text-[20px] mt-2 w-11/12 md:text-start text-center">
            {CONTENT.H2}
          </h2>
          <div className="flex mt-5 gap-3 justify-end">
            <a href="/resume/resume.pdf" target="_blank" className="bg-[rgb(141_96_231)] px-3 py-2 rounded-lg text-white">
              {CONTENT.DOWNLOAD_RESUME_BTN}
            </a>
            <a rel="nofollow" href="tel:09155301677" className="bg-[rgb(141_96_231)]  px-3 py-2 rounded-md text-white">
              {CONTENT.CONTACT_ME}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
