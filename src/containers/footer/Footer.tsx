import { CONTENT } from "../../content/content";
import Link from "next/link";
import Icon from "@/utils/Icon";
import ContactForm from "@/components/ContactForm";
export default function Footer() {
  return (
    <footer className="w-full md:h-[400px] relative">
      <div className="flex justify-center mt-6">
        <h5 className="font-bold text-[27px] text-center border-b-2 border-b-[rgb(141_96_231)] inline">
          {CONTENT.H5}
        </h5>
      </div>
      <div className="flex flex-wrap h-full items-center justify-around">
        <div className="md:w-1/3 w-full flex flex-col items-center md:items-start">
          <p className="font-bold text-[24px] hidden md:block">راه های ارتباطی با من</p>
          <p className="font-normal text-gray-700 text-[16px] md:text-[20px] mt-5 md:mt-2 w-10/12 text-center md:text-start">
            جهت ارتباط با بنده می توانید از طریق شماره تماس یا ایمیل زیر اقدام
            نمایید.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start mt-5 md:gap-3 justify-end">
            <Link
              href={`mailto:${CONTENT.EMAIL}`}
              className="px-3 py-2 flex items-center gap-1"
            >
              <span className="mt-1">{CONTENT.EMAIL}</span>
              <Icon name="email" size={15}></Icon>
            </Link>
            <Link
              href={`tel:${CONTENT.TEL}`}
              className="px-3 py-2 flex items-center gap-1"
            >
              <span className="mt-1">{CONTENT.TEL}</span>
              <Icon name="phone" size={17}></Icon>
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <ContactForm/>
        </div>
      </div>
    </footer>
  );
}
