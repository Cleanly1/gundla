import {
	fetchEntriesByID,
	richTextToHtml,
	fetchPreviewEvents,
} from "../utils/contentfulPosts";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Cta from "../components/CTAbutton";
import Info from "../components/home-page/HomeInfo";
import About from "../components/TextSection";
import PreviewEvents from "../components/home-page/Events";
import DisplayImages from "../components/DisplayImages";

function Index(props) {
	React.useEffect(() => {
		document.querySelector(".richText").innerHTML = props.posts.heroText;
		document.querySelector(".textContent").innerHTML = props.posts.aboutUs;
	});

	return (
		<Layout title="Gundla" openHours={props.hours.openHours}>
			<Hero
				title="GUNDLA GÅRDSCAFÈ"
				bgColor="#faf5ef"
				images={props.posts}
			>
				<h3>Caféet i stan men mitt i naturen!</h3>
				<div className="richText"></div>
				<h3 className="showOnDesktop">Välkomna till oss</h3>
				<Cta text="Läs mer" borderColor="#014335" />
			</Hero>

			<Info />
			<About
				image={props.posts.aboutImage.fields}
				bgColor="#BBCEB6"
				imgBG="#769D6C"
			>
				<div className="textContent"></div>
				<Cta text="läs mer" link="/about" borderColor="#769D6C" />
			</About>
			<PreviewEvents
				events={props.events}
				eventText={props.eventsInfo}
			></PreviewEvents>
			<DisplayImages images={props.displayImages} />
		</Layout>
	);
}

export default Index;

export async function getStaticProps() {
	const posts = await fetchEntriesByID("1a0T4pkbMELb4s1r6SmKOY");
	const hours = await fetchEntriesByID("Mj8bQjVAwHv8m3rWjPGrC");
	const eventsInfo = await fetchEntriesByID("6sO9wSIadxSWFhbL9tXjlp");
	const displayImages = await fetchEntriesByID("1OnhRSfAyKpew577otK4bT");
	const events = await fetchPreviewEvents();
	eventsInfo.text = richTextToHtml(eventsInfo.text);
	hours.openHours = richTextToHtml(hours.openHours);
	posts.heroText = richTextToHtml(posts.heroText);
	posts.aboutUs = richTextToHtml(posts.aboutUs);

	return {
		props: {
			posts,
			hours,
			eventsInfo,
			events,
			displayImages,
		},
	};
}
