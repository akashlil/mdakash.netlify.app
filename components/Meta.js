import Head from "next/head";

const Meta = ({ title, desp, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="description" content={desp}></meta>
      <meta name="keywords" content={keywords}></meta>
    </Head>
  );
};

Meta.defaultProps = {
  title: "default title",
  keywords: "defaul keywords",
  desp: "beupdate default description",
};

export default Meta;
