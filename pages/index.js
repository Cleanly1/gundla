import { fetchEntries } from "../utils/contentfulPosts";
import Layout from "../components/layout";

function Index(props) {
	console.log(props);
	return <Layout title="Gundla">Index</Layout>;
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
