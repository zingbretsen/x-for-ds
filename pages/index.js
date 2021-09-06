import Layout from "@components/Layout";
import PostList from "@components/PostList";

import getPosts from "@utils/getPosts";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Welcome to X for DS!</h1>

        <p className="description">
          X for DS is a set of resources for Data Scientists that will help you
          learn about the tools and techniques that are necessary for Data
          Science work, but which you may not have been explicitly taught.
        </p>
        <main>
          <PostList posts={posts} />
        </main>
        <p>
          You can look at the repository for this project{" "}
          <a href="https://github.com/zingbretsen/x-for-ds">here</a>.
        </p>
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    return getPosts(context);
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
