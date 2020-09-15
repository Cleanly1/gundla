import { fetchEntriesByType } from "../utils/contentfulPosts";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Cta from "../components/CTAbutton";
import Info from "../components/home-page/homeInfo";
import About from "../components/home-page/aboutUs";

function Index(props) {
	console.log(props);

	React.useEffect(() => {
		document.querySelector(".richText").innerHTML = props.posts.heroText;
		document.querySelector(".aboutText").innerHTML = props.posts.aboutUs;
	});

	return (
		<Layout title="Gundla">
			<Hero
				title="GUNDLA GÅRDSCAFÈ"
				bgColor="#faf5ef"
				images={props.posts}
			>
				<h3>Caféet i stan men mitt i naturen!</h3>
				<div className="richText">.</div>
				<h3 className="showOnDesktop">Välkomna till oss</h3>
				<Cta text="Läs mer" borderColor="#014335" />
			</Hero>

			<Info />
			<About image={props.posts.aboutImage.fields}>
				<div className="aboutText"></div>
				<Cta text="läs mer" link="/about" borderColor="#769D6C" />
			</About>
		</Layout>
	);
}

export default Index;

export async function getStaticProps() {
	const posts = await fetchEntriesByType("1a0T4pkbMELb4s1r6SmKOY");
	console.log(posts);

	return {
		props: {
			posts,
		},
	};
}
