import { NextPage } from "next";
import SEO from "src/components/SEO";

const NotFoundPage: NextPage = () => (
  <>
    <SEO
      title="404: Not Found"
      path="/error"
      description="You just hit a route that doesn't exist... the sadness."
    />
    <h1
      style={{
        textAlign: "center",
        marginTop: "5rem",
      }}
    >
      404: Not Found
    </h1>
    <p
      style={{
        textAlign: "center",
      }}
    >
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
  </>
);

export default NotFoundPage;
