import { fetchData } from "./api";
import {
  ResponseString,
  StrapiImageType,
  StrapiPluralResponseType,
} from "./types";

type ClientType = {
  name: ResponseString;
  slug: ResponseString;
  logo: {
    data: StrapiImageType[];
  };
};

const getClient = async (slug: string) => {
  const data = await fetchData<StrapiPluralResponseType<ClientType>>(
    `/clients?filters[slug][$eq]=${slug}&populate[0]=logo`,
    ["client", slug]
  );

  const currentClient = data?.data[0];
  const clientInfo = {
    name: currentClient?.attributes.name || "",
    image: {
      src: currentClient?.attributes?.logo?.data?.[0]?.attributes?.url || "",
      width: currentClient?.attributes?.logo?.data?.[0]?.attributes?.width || 0,
      height:
        currentClient?.attributes?.logo?.data?.[0]?.attributes?.height || 0,
      alt:
        currentClient?.attributes?.logo?.data?.[0]?.attributes
          ?.alternativeText || "",
    },
  };

  return {
    clientInfo,
  };
};

export default getClient;
