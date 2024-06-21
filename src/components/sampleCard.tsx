'use client';
import Link from "next/link";
import Image from "next/image";

export default function SampleCard({
  image,
  name,
  desc,
  link,
  alt,
  tags,
}: {
  image: string;
  name?: string;
  desc?: string;
  link: string;
  alt: string;
  tags?: any;
}) {
  return (
    <Link rel="nofolow" href={link} target="_blank" className="flex flex-col items-center h-full">
      <div className="w-11/12 md:w-full rounded-xl overflow-hidden shadow-xl hover:shadow-md duration-300 min-h-[350px] h-full">
        <Image width={200} height={200} className="w-full h-[230px]" src={image} alt={alt} />
        <div className="px-3 py-3">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
        <div className="px-1 pt-2 pb-2">
          {tags?.map(( item : string , index : any) => (
            <span key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-normal text-gray-600 mr-2 mb-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
