import { strapiApiUrl } from "@/config/env";

export const fetchData = async <T>(url: string, tags: string[]) => {
  try {
    const data = await fetch(`${strapiApiUrl}${url}`, { next: { tags: tags } });

    if (data.status === 200) {
      const response = (await data.json()) as T;
      return response;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
