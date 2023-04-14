import Head from "next/head";
import favicon from "../public/favicon.ico";
function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>Armaan | Full Stack Developer</title>
    </Head>
  );
}

Meta.defaultProps = {
  keywords:
    "web dev, web development, web development articles, web development blogs, web development portfolio, portfolio website",
  description:
    "It is a web development portfolio project made by a full stack developer.",
};

export default Meta;