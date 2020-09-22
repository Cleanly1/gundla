import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
import ContactInfo from "../components/contactInfo";

import { fetchEntriesByID, richTextToHtml } from "../utils/contentfulPosts";

function Contact(props) {
	// console.log(props.posts.image.fields.file.url);
	console.log(props.form.text);
	console.log(props.info.text);

	// React.useEffect(() => {
	// 	document.querySelector(".richText").innerHTML = props.posts.text;
	// });

	return (
		<Layout title="Kontakt">
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
	// console.log(form);
	form.text = richTextToHtml(form.text);
	info.text = richTextToHtml(info.text);

	return {
		props: {
			form,
			info,
		},
	};
}
