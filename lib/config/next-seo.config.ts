import { DefaultSeoProps } from "next-seo";

import { SITE_TITLE, SEO_IMG_DEFAULT, SEO_IMG_OGIMG } from "@lib/config/constants";

import { HeadSeoProps } from "@components/seo/head-seo";

const seoImages = {
  default: SEO_IMG_DEFAULT,
  ogImage: SEO_IMG_OGIMG,
};

export const getSeoImage = (key: keyof typeof seoImages): string => {
  return seoImages[key];
};

export const seoConfig: {
  headSeo: Required<Pick<HeadSeoProps, "siteName">>;
  defaultNextSeo: DefaultSeoProps;
} = {
  headSeo: {
    siteName: { SITE_TITLE },
  },
  defaultNextSeo: {
    twitter: {
      handle: "@hibox",
      site: "@hibox",
      cardType: "summary_large_image",
    },
  },
} as const;
