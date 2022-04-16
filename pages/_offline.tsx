import SEO from "src/components/SEO";

const Offline = () => (
  <>
    <SEO
      title="Page Offline"
      path="/error"
      description="We can't seem to load this page right now... the sadness."
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
      We can&#39;t seem to load this page right now... the sadness.
    </p>
  </>
);

export default Offline;
