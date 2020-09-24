import Layout from "../components/layout";
import { fetchEntriesByID, richTextToHtml } from "../utils/contentfulPosts";

import TextSection from "../components/TextSection";
import Cta from "../components/CTAbutton";
import Hero from "../components/Hero";
import FindUsSection from "../components/FindUsSection";

function About(props) {
	const title = "OM OSS";
	console.log(props);
	React.useEffect(() => {
		document.querySelector(".richText").innerHTML = props.posts.heroText;
		document.querySelector(".textContent").innerHTML = props.posts.infoText;
		document.querySelector(".findUsText").innerHTML = props.posts.findUs;
	});
	return (
		<Layout title={title} openHours={props.hours.openHours}>
			<Hero
				title={title}
				bgColor="none"
				border="4px solid #BBCEB6"
				images={props.posts}
			>
				<h3>Caféet i stan men mitt i naturen!</h3>
				<div className="richText"></div>
				<h3 className="showOnDesktop">Välkomna till oss!</h3>
			</Hero>
			<TextSection
				bgColor="#EEC996"
				imgBG="#DD932D"
				image={props.posts.infoImage.fields}
			>
				<div className="textContent"></div>
				<Cta
					text="Till evenemang"
					link="/about"
					borderColor="#769D6C"
				/>
			</TextSection>
			<FindUsSection
				bgColor="#E3DCD5"
				image={props.posts.findUsImage.fields}
			>
				<h1>Hitta Hit</h1>
				<p>
					Gundla Gårdscafé hittar ni i natursköna Delsjön. Vi är ett
					perfekt stopp på din långa promenad, efter badet, på
					cykelturen eller efter golfrundan.Alla är välkomna!
				</p>
				<div className="findUsText"></div>
			</FindUsSection>
		</Layout>
	);
}

export default About;

export async function getStaticProps() {
	const posts = await fetchEntriesByID("7zT6WMFbJ7BMNTst6IwTy9");
	const hours = await fetchEntriesByID("Mj8bQjVAwHv8m3rWjPGrC");
	hours.openHours = richTextToHtml(hours.openHours);
	posts.heroText = richTextToHtml(posts.heroText);
	posts.infoText = richTextToHtml(posts.infoText);
	posts.findUs = richTextToHtml(posts.findUs);

	return {
		props: {
			posts,
			hours,
		},
	};
}
