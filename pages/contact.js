import Layout from "../components/Layout";
import ContactForm from "../components/contactForm";
import ContactInfo from "../components/contactInfo";


import { fetchEntriesByID, richTextToHtml } from "../utils/contentfulPosts";

function Contact(props) {
	return (
		<Layout title="Kontakt" openHours={props.hours.openHours}>
			<ContactInfo
				title={props.info.title}
				text={props.info.text}
				image={props.info.heroImage.fields.file.url}
			/>
			<ContactForm
				bgColor="#BBCEB6"
				text={props.form.text}
				title={props.form.title}
				image={props.form.image.fields.file.url}
			/>
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
