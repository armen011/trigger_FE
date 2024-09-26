import { feedMap } from "./getFeed";

export type StrapiPluralResponseType<T> = {
  data: [
    {
      id: number;
      attributes: {
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      } & T;
    }
  ];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiImageType = {
  attributes: {
    alternativeText: ResponseString;
    width: number;
    height: number;
    url: string;
  };
};

export type FeedKeyType = keyof typeof feedMap;

export type ResponseString = string | null | undefined;

export type StrapiSingleResponseType<T> = {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    } & T;
  };
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
