import { ImageProps } from "@/components/Image";
import { fetchData } from "./api";
import { StrapiImageType, StrapiSingleResponseType } from "./types";

type PartnersResponseType = {
  partner_first_row?: { data: StrapiImageType[] };
  partner_second_row?: { data: StrapiImageType[] };
};

const getPartners = async (): Promise<{
  firstRow: ImageProps[];
  secondRow: ImageProps[];
}> => {
  const data = await fetchData<StrapiSingleResponseType<PartnersResponseType>>(
    `/parterns-logo?populate[0]=partner_first_row&populate[1]=partner_second_row`,
    ["partners"]
  );

  return {
    firstRow:
      data?.data?.attributes?.partner_first_row?.data?.map((item) => ({
        src: item?.attributes?.url || "",
        width: item?.attributes?.width || 0,
        height: item?.attributes?.height || 0,
        alt: item?.attributes?.alternativeText || "",
      })) || [],
    secondRow:
      data?.data?.attributes?.partner_second_row?.data?.map((item) => ({
        src: item?.attributes?.url || "",
        width: item?.attributes?.width || 0,
        height: item?.attributes?.height || 0,
        alt: item?.attributes?.alternativeText || "",
      })) || [],
  };
};

export default getPartners;
