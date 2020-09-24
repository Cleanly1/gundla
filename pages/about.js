import Layout from "../components/layout";
import { fetchEntriesByID, richTextToHtml } from "../utils/contentfulPosts";

import TextSection from "../components/TextSection";
import Cta from "../components/CTAbutton";
import Hero from "../components/Hero";
import FindUsSection from "../components/FindUsSection";
import SocialSection from "../components/SocialSection";

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
				bgColor="white"
				border="4px solid #BBCEB6"
				images={props.posts}
			>
				<h3>Caféet i stan men mitt i naturen!</h3>
				<div className="richText"></div>
				<h4 className="showOnDesktop">Välkomna till oss!</h4>
				<h4 className="hideOnDesktop">Hjärtligt Välkomna!</h4>
			</Hero>

			<SocialSection images={props.displayImages}>
				<h1>SOCIALA MEDIER</h1>
				<p>
					Våra sociala medier är ett enkelt sätt för oss att
					kommunicera och för er kunder att få aktuella uppdateringar
					rakt i er telefon.
				</p>
			</SocialSection>

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
	const displayImages = await fetchEntriesByID("1OnhRSfAyKpew577otK4bT");
	hours.openHours = richTextToHtml(hours.openHours);
	posts.heroText = richTextToHtml(posts.heroText);
	posts.infoText = richTextToHtml(posts.infoText);
	posts.findUs = richTextToHtml(posts.findUs);

	return {
		props: {
			posts,
			hours,
			displayImages,
		},
	};
}
