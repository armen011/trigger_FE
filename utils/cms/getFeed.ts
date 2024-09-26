import { ImageProps } from "@/components/Image";
import { fetchData } from "./api";
import {
  FeedKeyType,
  ResponseString,
  StrapiImageType,
  StrapiPluralResponseType,
} from "./types";

export const feedMap = {
  "influencer-marketing": "influencer_marketings",
};

type ClientType = {
  name: ResponseString;
  slug: ResponseString;
  logo: {
    data: StrapiImageType[];
  };
};

export type FeedType = {
  name: string;
  slug: string;
  image: ImageProps;
};
const getFeed = async (type: FeedKeyType): Promise<FeedType[]> => {
  const relationSlug = feedMap[type];
  const data = await fetchData<StrapiPluralResponseType<ClientType>>(
    `/clients?filters[${relationSlug}][id][$notNull]=true&populate[0]=logo`,
    ["client", relationSlug]
  );

  return (
    data?.data.map((item) => ({
      name: item.attributes.name || "",
      slug: item.attributes.slug || "",
      image: {
        src: item.attributes?.logo?.data?.[0]?.attributes?.url || "",
        width: item.attributes?.logo?.data?.[0]?.attributes?.width || 0,
        height: item.attributes?.logo?.data?.[0]?.attributes?.height || 0,
        alt:
          item.attributes?.logo?.data?.[0]?.attributes?.alternativeText || "",
      },
    })) || []
  );
};

export default getFeed;
