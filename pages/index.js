import { fetchEntries } from "../utils/contentfulPosts";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Cta from "../components/CTAbutton";
import Info from "../components/homeInfo";

function Index(props) {
	console.log(props);
	return (
		<Layout title="Gundla">
			<Hero
				title="GUNDLA GÅRDSCAFÈ"
				bgColor="#faf5ef"
				images={props.posts[0]}
			>
				<h3>Caféet i stan men mitt i naturen!</h3>
				<p>
					Vi är ett utomhuscafé i kanten av Delsjö Naturreservat som
					utöver smarrig fika och mättande soppor, erbjuder en härlig
					och avslappnad miljö bort från stress och oro. Här ersätter
					vi stadens brus med trädens härliga sus.
				</p>
				<p>Du klär dig efter väder och cyklar eller promenerar hit. </p>
				<p>
					I höst samt vinter kommer vi tända brasor du kan värma dig
					vid och vi har många platser under tak när regnet öser ner.{" "}
				</p>
				<h3 className="showOnDesktop">Välkomna till oss</h3>
				<Cta text="Läs mer" borderColor="#014335" />
			</Hero>

			<Info />
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
