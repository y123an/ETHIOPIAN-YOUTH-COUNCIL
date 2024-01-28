import React from "react";
import NewsCard from "./NewsCard";
import { news1, news2 } from "../../assets/images";

const News = () => {
  return (
    <div className="grid  ">
      <div className="px-10 py-5 flex ">
        <h1 className="text-2xl p border-b-4 p-2 border-primary">
          News And Updates
        </h1>
      </div>
      <div className="p-10 flex justify-center">
        <NewsCard
          news={
            "የወጣቶችን ሁለንተናዊ ተሳትፎ ለማረጋገጥ ክፍት የወጣቶች የምክክር መድረክ በመፍጠር በውይይትና በምክንያታዊነት የተገነባ የወጣት አደረጃጀትን እውን ለማድረግ እንሰራለን፤ የሀ/ክ/ወ/ም/ቤት ሰብሳቢ ወጣት በሀር አብዲ፡፡"
          }
          img={news1}
          date={"Jan 19, 2024"}
        />
        <NewsCard
          news={
            "የኢትዮጵያ ወጣቶች ምክር ቤት በኢትዮጵያና ሶማሌላንድ መካከል የተደረገው ስምምነት የሁለቱ ሀገራት ተጠቃሚነትን የሚያረጋግጥ በመሆኑ ስምምነቱን እንደሚደግፍ አስታወቀ፡፡"
          }
          img={news2}
          date={"Jan 17, 2024"}
        />
        <NewsCard
          news={
            "የኢትዮጵያ ወጣቶች ምክር ቤት በኢትዮጵያና ሶማሌላንድ መካከል የተደረገው ስምምነት የሁለቱ ሀገራት ተጠቃሚነትን የሚያረጋግጥ በመሆኑ ስምምነቱን እንደሚደግፍ አስታወቀ፡፡"
          }
          img={news2}
          date={"Jan 17, 2024"}
        />
      </div>
      <div className="flex justify-end p-10">
        <button className="py-2 px-6 bg-primary transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white">
          More News
        </button>
      </div>
    </div>
  );
};

export default News;
