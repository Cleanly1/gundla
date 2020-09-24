import Layout from "../components/layout";
import { fetchEntriesByID, richTextToHtml } from "../utils/contentfulPosts";
import styled from "styled-components";

import TextSection from "../components/TextSection";
import Cta from "../components/CTAbutton";
import Hero from "../components/Hero";
import ContactForm from "../components/contactForm";

const RestyledHero = styled(Hero)`
	padding-bottom: 50vw;
	& .text {
		padding-bottom: 0px;
		margin-bottom: 0;

		& .openHours {
			position: relative;
			left: -24px;
			background-color: var(--lightGreen);
			width: calc(100vw - 84px);
			padding: 16px 24px;
			margin-top: 32px;
			font-family: var(--fontCon);
			color: var(--nearBlack);
			& p {
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 19px;
				margin: 8px 0;
			}

			& h4 {
				font-style: normal;
				font-weight: bold;
				font-size: 18px;
				line-height: 21px;
				letter-spacing: 0.08em;
				text-decoration-line: underline;
				text-transform: uppercase;
				margin-bottom: 4px;
			}
		}
	}
	& .images {
		top: 0;
	}
	@media (min-width: 1025px) {
		& .text {
			margin-bottom: 0;
			& .openHours {
				position: relative;
				left: calc(-5vw - 2px);
				top: 2vw;
				background-color: var(--lightGreen);
				width: calc(50vw - 16vw);
				padding: 16px 11vw 20px 5vw;
				margin-top: 32px;
				font-family: var(--fontCon);
				color: var(--nearBlack);
				& p {
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					line-height: 19px;
					margin: 8px 0;
				}

				& h4 {
					font-style: normal;
					font-weight: bold;
					font-size: 18px;
					line-height: 21px;
					letter-spacing: 0.08em;
					text-decoration-line: underline;
					text-transform: uppercase;
					margin-bottom: 12px;
				}
			}
		}
	}
`;

function Cafe(props) {
	React.useEffect(() => {
		document.querySelector(".richText").innerHTML = props.posts.heroText;
		document.querySelector(".openHours").innerHTML =
			"<h4>Öppettider</h4>" + props.hours.openHours;
	});
	return (
		<Layout title="Café" openHours={props.hours.openHours}>
			<RestyledHero
				title="CAFÉET & MATEN"
				bgColor="white"
				border="4px solid #BBCEB6"
				images={props.posts}
			>
				<h3>Caféet i stan men mitt i naturen!</h3>
				<div className="richText"></div>
				<h4 className="showOnDesktop">Välkomna till oss!</h4>
				<h4 className="hideOnDesktop">Hjärtligt Välkomna!</h4>
				<div className="openHours"></div>
			</RestyledHero>
			{/* <ContactForm
				bgColor="#BBCEB6"
				text={"hello"}
				title="Catering"
				image={props.posts.cateringImage.fields.file.url}
			></ContactForm> */}
		</Layout>
	);
}

export default Cafe;

export async function getStaticProps() {
	const posts = await fetchEntriesByID("4W7m9oltpX46OjXXZlz9wV");
	const hours = await fetchEntriesByID("Mj8bQjVAwHv8m3rWjPGrC");
	hours.openHours = richTextToHtml(hours.openHours);
	posts.heroText = richTextToHtml(posts.heroText);
	posts.cateringText = richTextToHtml(posts.cateringText);

	return {
		props: {
			hours,
			posts,
		},
	};
}
