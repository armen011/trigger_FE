import { fetchData } from "./api";
import {
  ResponseString,
  StrapiImageType,
  StrapiPluralResponseType,
} from "./types";

export enum Role {
  CEO = "ceo",
  Founder = "founder",
  Stuff = "stuff",
}

export type Stuff = {
  full_name: string;
  profession: ResponseString;
  role: Role;
  experience: ResponseString;
  link?: ResponseString;
  profile_pic?: { data: StrapiImageType };
};

const getStuff = async (roles: Role[]) => {
  const roleFilters = roles
    .map((role) => `filters[role][$eq]=${role}`)
    .join("&");
  const data = await fetchData<StrapiPluralResponseType<Stuff>>(
    `/teams?${roleFilters}&populate[0]=profile_pic`,
    ["stuff"]
  );

  return (
    data?.data
      .sort(
        (
          { attributes: { updatedAt: prevDate } },
          { attributes: { updatedAt: nextDate } }
        ) => {
          return prevDate > nextDate ? -1 : 1;
        }
      )
      .map((stuff) => ({
        fullName: stuff.attributes.full_name,
        profession: stuff.attributes.profession || undefined,
        role: stuff.attributes.role,
        experience: stuff.attributes.experience || undefined,
        link: stuff.attributes.link || undefined,
        image: {
          src: stuff.attributes.profile_pic?.data?.attributes.url || "",
          width: stuff.attributes.profile_pic?.data?.attributes?.width || 0,
          height: stuff.attributes.profile_pic?.data?.attributes.height || 0,
          alt:
            stuff.attributes.profile_pic?.data?.attributes.alternativeText ||
            "",
        },
      })) || []
  );
};

export default getStuff;
