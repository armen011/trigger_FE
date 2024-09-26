import { fetchData } from "./api";
import { StrapiPluralResponseType } from "./types";

type ReviewResponseType = {
  review_text: string;
  reviewer: string;
  reviewer_position?: string | null | undefined;
};
export type ReviewType = {
  review: string;
  reviewer: string;
  reviewerPosition: string | undefined;
};

const getReviews = async (): Promise<ReviewType[]> => {
  const data = await fetchData<StrapiPluralResponseType<ReviewResponseType>>(
    `/reviews`,
    ["reviews"]
  );

  return (
    data?.data
      .sort(
        (
          { attributes: { updatedAt: prevUpdatedAt } },
          { attributes: { updatedAt: nextUpdatedAt } }
        ) => {
          if (prevUpdatedAt < nextUpdatedAt) {
            return 1;
          }
          if (prevUpdatedAt > nextUpdatedAt) {
            return -1;
          }
          return 0;
        }
      )
      .map(
        ({
          attributes: { review_text: review, reviewer, reviewer_position },
        }) => ({
          review,
          reviewer,
          reviewerPosition: reviewer_position || "",
        })
      ) || []
  );
};

export default getReviews;
