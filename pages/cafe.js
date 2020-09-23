import Layout from "../components/layout";
import { fetchEntriesByID, richTextToHtml } from "../utils/contentfulPosts";

function Cafe(props) {
	return (
		<Layout title="Café" openHours={props.hours.openHours}>
			<div></div>
		</Layout>
	);
}

export default Cafe;

export async function getStaticProps() {
	// const posts = await fetchEntriesByID("1a0T4pkbMELb4s1r6SmKOY");
	const hours = await fetchEntriesByID("Mj8bQjVAwHv8m3rWjPGrC");
	hours.openHours = richTextToHtml(hours.openHours);
	// posts.heroText = richTextToHtml(posts.heroText);
	// posts.aboutUs = richTextToHtml(posts.aboutUs);

	return {
		props: {
			hours,
		},
	};
}
