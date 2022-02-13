import Head from "next/head";

interface SEOProps {
  title: string;
  path: string;
  description?: string;
  image?: string;
}
const SEO: React.FC<SEOProps> = ({ path, title, description, image }) => {
  return (
    <Head>
      {/* google indexing data */}

      <title>ACM at UCSD</title>
      <meta
        name="description"
        content="Join the club. ACM at UCSD is an inclusive community of students passionate about technology. 1000+ UCSD members. 120+ annual events. 850+ cups of boba served."
      />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* link sharing data */}

      {/* page url to be used as permanent id */}
      <meta property="og:url" content={`https://acmucsd.com${path}`} />
      {/* type of content */}
      <meta property="og:type" content="website" />
      {/* actual website title */}
      <meta property="og:site_name" content={"ACM at UCSD"} />
      {/* title to display for the specific link being shared */}
      <meta property="og:title" content={title} />
      {/* preview image */}
      <meta property="og:image" content={image} />
      {/* preview description text */}
      <meta property="og:description" content={description} />

      {/* <meta property="twitter:card" content="summary" />
     <meta property="twitter:creator" content={config.social.twitter} />
     <meta property="twitter:title" content={title} />
     <meta property="twitter:description" content={description} /> */}
    </Head>
  );
};

export default SEO;
