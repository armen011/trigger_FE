import getFeed from "@/utils/cms/getFeed";
import CompanyFeed from "./_components/CompanyFeed";
import Navigation from "./_components/Navigation";
import { FeedKeyType } from "@/utils/cms/types";
import Section from "@/components/Section";

type FeedPageProps = {
  params: { category: FeedKeyType };
};

const ellipseWidthClassName =
  "h-[288px] md:h-[450px] xl:h-[521px] w-[380px] md:w-[592px] xl:w-[685px]";
const ellipsePositionClassName =
  "-right-[288px] -md:right-[394px] -xl:right-[192px] -2xl:right-[272px]";

const FeedPage = async ({ params }: FeedPageProps) => {
  const feed = await getFeed(params.category);

  return (
    <Section
      ellipse="yellow"
      className={`${ellipseWidthClassName} absolute ${ellipsePositionClassName} rotate-[30deg] top-[100px] `}
      wrapperCN="w-full"
    >
      <Navigation categorySlug={params.category} />
      <CompanyFeed feed={feed} feedType={params.category} />
    </Section>
  );
};

export default FeedPage;
