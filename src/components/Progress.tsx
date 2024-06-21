export default function Progress({name , percent} : {name : string, percent : Number}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-normal text-gray-500 text-[20px]">{name}</span>
      <div className="relative h-[12px] md:h-[15px] border border-gray-200 rounded-xl overflow-hidden">
        <div className={`bg-[rgb(141_96_231)] w-${percent}/12 h-full`}></div>
      </div>
    </div>
  );
}
