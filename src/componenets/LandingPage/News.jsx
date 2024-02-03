import React from "react";
import NewsCard from "./NewsCard";
import { news1, news2 } from "../../assets/images";

const News = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold p-2 border-b-4 head-font border-primary inline-block">
          News And Updates
        </h1>
      </div>
      <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
      <div className="flex justify-center mt-8">
        <button className="py-2 px-6 bg-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:border-primary hover:text-black hover:border hover:bg-white duration-300 text-white">
          More News
        </button>
      </div>
    </div>
  );
};

export default News;
