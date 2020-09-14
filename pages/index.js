import { fetchEntries } from "../utils/contentfulPosts";
import Layout from "../components/layout";
import Hero from "../components/hero";

function Index(props) {
	console.log(props);
	return (
		<Layout title="Gundla">
			<Hero bgColor="#faf5ef" />
		</Layout>
	);
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
