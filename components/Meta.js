import Head from "next/head";

const Meta = ({ title, desp, keywords }) => {
  const logo = `https://i.ibb.co/StVKHKz/A-removebg-preview.png`;
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href={logo} type="image/x-icon" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="description" content={desp}></meta>
      <meta name="keywords" content={keywords}></meta>
    </Head>
  );
};

// Meta.defaultProps = {
//   title: "default title",
//   keywords: "defaul keywords",
//   desp: "beupdate default description",
// };

export default Meta;
