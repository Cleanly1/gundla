import Layout from "../components/layout";
import { fetchEntriesByID, richTextToHtml } from "../utils/contentfulPosts";

function Events(props) {
	console.log(props);

	React.useEffect(() => {
		document.querySelector(".richText").innerHTML = props.posts.text;
	});

	return (
		<Layout title="Events">
			<div className="richText"></div>
		</Layout>
	);
}

export default Events;

export async function getStaticProps() {
	const posts = await fetchEntriesByID("6sO9wSIadxSWFhbL9tXjlp");
	console.log(posts);
	posts.text = richTextToHtml(posts.text);

	return {
		props: {
			posts,
		},
	};
}
