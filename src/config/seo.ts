import { DefaultSeoProps } from "next-seo";

export const baseUrl = "https://google-clone-martstech.vercel.app";

export const defaultSEO: DefaultSeoProps = {
  title: "Google Clone",
  description:
    "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Google Clone",
    images: [
      {
        url: `${baseUrl}/meta/og-image.png`,
        alt: "Google Clone",
      },
    ],
  },
};
