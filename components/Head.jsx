import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Alvaro Alonso, an Engineer specialized in Data Science, with a comprehensive approach ranging from business requirements to technical solutions."
      />
      <meta
        name="keywords"
        content="alvaro alonso, data scientist, portfolio, vscode-portfolio, ai, ai developer, ml engineer"
      />
      <meta property="og:title" content="Alvaro Alonso's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Alvaro Alonso Portfolio',
};
