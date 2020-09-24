import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
import ContactInfo from "../components/contactInfo";
import styled from "styled-components";

import { fetchEntriesByID, richTextToHtml } from "../utils/contentfulPosts";

const StyledBackground = styled.div`
	overflow: hidden;
	background-image: url("/ground.jpg");
	background-size: contain;
	background-color: rgba(255, 255, 255, 0.95);
	background-blend-mode: lighten;
	margin: 0 0 -10px 0;
`;

const StyledImg = styled.div`
	padding: 0 20px 30px 20px;
	margin: 0 0 20px 20px;

	& img {
		width: 100%;
	}

	@media (min-width: 768px) {
		max-width: 1000px;
		margin: auto;
	}
`;

function Contact(props) {
	return (
		<Layout title="Kontakt" openHours={props.hours.openHours}>
			<ContactInfo title={props.info.title} text={props.info.text} />
			<StyledBackground>
				<StyledImg>
					<img
						src={`https:${props.info.heroImage.fields.file.url}`}
						alt="Contact Image"
					/>
				</StyledImg>
				<ContactForm
					bgColor="#BBCEB6"
					text={props.form.text}
					title={props.form.title}
					image={props.form.image.fields.file.url}
				/>
			</StyledBackground>
		</Layout>
	);
}

export default Contact;

export async function getStaticProps() {
	const form = await fetchEntriesByID("5SYBcwk5y35Uy25UlOJGrg");
	const info = await fetchEntriesByID("3emPt8YihNO09AU8YhlKiZ");
	const hours = await fetchEntriesByID("Mj8bQjVAwHv8m3rWjPGrC");

	form.text = richTextToHtml(form.text);
	info.text = richTextToHtml(info.text);
	hours.openHours = richTextToHtml(hours.openHours);

	return {
		props: {
			form,
			info,
			hours,
		},
	};
}
