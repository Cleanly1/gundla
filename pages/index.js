import { fetchEntries } from "../utils/contentfulPosts";

function Index(props) {
  console.log(props);
  return <div>Index</div>;
}

export default Index;

export async function getStaticProps() {
  const res = await fetchEntries();

  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
