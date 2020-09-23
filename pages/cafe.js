import Layout from "../components/Layout";

function Cafe() {
	return (
		<Layout title="Café">
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
