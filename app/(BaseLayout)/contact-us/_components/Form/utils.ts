import { FormData } from "./types";

export const submitMessage = async (data: FormData) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return response;
};
