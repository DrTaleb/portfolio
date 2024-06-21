import Progress from "@/components/Progress";
import { CONTENT } from "../../content/content";
import Icon from "@/utils/Icon";
export default function MySkills() {
  return (
    <div className="header w-full h-[500px] relative max-w-[1300px] mx-auto mt-16 md:mt-0">
      <div className="flex flex-wrap h-full md:items-center justify-around">
        <div className="w-11/12 md:w-1/3">
          <h3 className="font-bold text-[24px] md:text-[30px] flex items-center gap-4 justify-center md:justify-start">
            <i className="rotate-180">
              <Icon name="category" color="rgb(141, 96, 231)"></Icon>
            </i>
            {CONTENT.H3}
          </h3>
          <p className="font-normal text-gray-700 text-[18px] md:text-[20px] mt-2 text-center md:text-start">
            {CONTENT.MYSKILLS_TEXT}
          </p>
        </div>
        <div className="w-11/12 md:w-1/3 grid grid-cols-2 gap-3">
          <Progress name="Next.js (page & app)" percent={12} />
          <Progress name="React.js" percent={11} />
          <Progress name="Rest API" percent={11} />
          <Progress name="TypeScript" percent={11} />
          <Progress name="Redux" percent={12} />
          <Progress name="UI frameworks" percent={12} />
          <Progress name="Express.js" percent={12} />
          <Progress name="MongoDB" percent={12} />
          <Progress name="SQL" percent={9} />
        </div>
      </div>
    </div>
  );
}
