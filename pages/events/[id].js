import Layout from "../../components/Layout";
import {
	fetchEntriesByID,
	richTextToHtml,
	fetchEntriesByType,
} from "../../utils/contentfulPosts";

function Event(props) {
	console.log(props);
	return (
		<Layout title={props.name} openHours={props.hours.openHours}>
			<div>
				<h1>{props.entry.title}</h1>
			</div>
		</Layout>
	);
}

export default Event;

export async function getStaticPaths() {
	const entries = await fetchEntriesByType("events");
	let paths = [];

	await entries.forEach((entry) => {
		paths.push({ params: { id: entry.sys.id } });
	});
	console.log(paths);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const entry = await fetchEntriesByID(params.id);
	const hours = await fetchEntriesByID("Mj8bQjVAwHv8m3rWjPGrC");
	hours.openHours = richTextToHtml(hours.openHours);

	return {
		props: {
			entry,
			hours,
		},
	};
}
