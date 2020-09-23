import Layout from "../components/Layout";
import { fetchEntriesByID, richTextToHtml } from "../utils/contentfulPosts";

import TextSection from "../components/TextSection";
import Cta from "../components/CTAbutton";

function About(props) {
	return (
		<Layout title="Om oss" openHours={props.hours.openHours}>
			{/* <TextSection bgColor="#EEC996" imgBG="#DD932D">
				<div className="textContent"></div>
				<Cta text="läs mer" link="/about" borderColor="#769D6C" />
			</TextSection> */}
		</Layout>
	);
}

export default About;

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
