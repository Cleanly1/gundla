import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
// import ContactForm from "../components/cFormTest";

import { fetchEntriesByID, richTextToHtml } from "../utils/contentfulPosts";

function Contact(props) {
	// console.log(props.posts.image.fields.file.url);

	// React.useEffect(() => {
	// 	document.querySelector(".richText").innerHTML = props.posts.text;
	// });

	return (
		<Layout title="Kontakt">
			<ContactForm
				bgColor="#BBCEB6"
				text={props.posts.text}
				title={props.posts.title}
				image={props.posts.image.fields.file.url}
			/>
		</Layout>
	);
}

export default Contact;

export async function getStaticProps() {
	const posts = await fetchEntriesByID("5SYBcwk5y35Uy25UlOJGrg");
	console.log(posts);
	posts.text = richTextToHtml(posts.text);

	return {
		props: {
			posts,
		},
	};
}
