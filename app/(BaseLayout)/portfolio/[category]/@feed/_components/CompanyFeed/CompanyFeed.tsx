import { FeedType } from "@/utils/cms/getFeed";
import FeedCard from "./FeedCard";
import Section from "@/components/Section";

type CompanyFeedProps = {
  feed: FeedType[];
  feedType: string;
};

const CompanyFeed = ({ feedType, feed }: CompanyFeedProps) => {
  return (
    <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {feed.map(({ slug, image }, idx) => (
        <FeedCard
          key={idx}
          image={image}
          link={`/portfolio/${feedType}/${slug}`}
          slug={slug}
        />
      ))}
    </div>
  );
};

export default CompanyFeed;
