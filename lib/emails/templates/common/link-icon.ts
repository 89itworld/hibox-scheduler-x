import { IS_PRODUCTION, BASE_URL } from "@lib/config/constants";

export const linkIcon = (): string => {
  return IS_PRODUCTION ? BASE_URL + "/emails/linkIcon.png" : "https://app.hibox.co/emails/linkIcon.png";
};
