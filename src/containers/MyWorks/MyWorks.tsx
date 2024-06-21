"use client";
import { CONTENT } from "../../content/content";
import SampleCard from "@/components/sampleCard";

export default function VerticalSwiper({ props }: any) {
  const samples = [
    {
      id: 1,
      name: "پنل وفادارسازی مشتری فیلیا",
      link: "https://fa.philia.vip/",
      alt: "برنامه نویسی وبسایت",
      image: "/images/philia.png",
      desc: " برنامه نویسی در تیم فیلیا",
      tags: ["next.js","react.js", "material UI"],
    },
    {
      id: 2,
      name: "وبسایت عروسی",
      link: "https://aroosi.org",
      alt: "برنامه نویسی وبسایت",
      image: "/images/aroosi.png",
      desc: " برنامه نویسی نقشه و مسیریاب عروسی او آر جی",
      tags: ["next.js", "material UI","tailwind","leaflet","redux"],
    },
    {
      id: 3,
      name: "وبسایت سوروسات",
      link: "https://soorosat.com",
      alt: "برنامه نویس وبسایت سوروسات",
      image: "/images/bia2aroosi.png",
      desc: "سوروسات عروسی کامل ترین وبسایت حوزه ودینگ و اطلاعات عروسی ایران",
      tags: ["next.js", "Tailwind"],
    },
    {
      id: 4,
      name: "پروژه رزرواسیون هتل اسپادتریپ",
      link: "https://spadtrip.com",
      alt: "برنامه نویسی وب ",
      image: "/images/Touriper.png",
      desc: "پنل B2B اسپادتریپ یک وبسایت در جهت رزرواسیون هتل به دوزبان ترکی و انگلیسی",
      tags: ["React.js", "methronic", "react-bootstrap"],
    },
    {
      id: 5,
      name: "پایا ۳۶۰",
      link: "https://paya360.ir",
      alt: "پایا۳۶۰",
      image: "/images/paya360.png",
      desc: "وبسایت شرکتی پایا۳۶۰",
      tags: ["Bootstrap", "JQuery"],
    },
    {
      id: 6,
      name: "پنل مدیریتی و کاربری بیامراسم",
      link: "https://biamarasem.ir",
      alt: "برنامه نویس پنل وبسایت ",
      image: "/images/panel.png",
      desc: "پنل کاربری و ادمین بیامراسم ",
      tags: ["next.js", "material UI"],
    }
  ];
  return (
    <>
      <div className="flex justify-center mb-5 mt-10">
        <h4 className="font-bold text-[25px] md:text-[27px] text-center border-b-2 border-b-[rgb(141_96_231)] inline">
          {CONTENT.H4}
        </h4>
      </div>
      <div className="mx-auto 2xl:max-w-[1300px] xl:max-w-[1250px] lg:max-w-[1020px] md:max-w-[700px] sm:max-w-[550px] max-w-full py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {samples.map((item: any) => (
            <SampleCard
              key={item.id}
              name={item.name}
              link={item.link}
              alt={item.alt}
              image={item.image}
              desc={item.desc}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </>
  );
}
