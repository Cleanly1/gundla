import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const client = require("contentful").createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries() {
	const entries = await client.getEntries();

	return entries.items;
}

export async function fetchEntriesByID(ID) {
	const entries = await client.getEntry(ID).then((entry) => {
		console.log(entry.fields);
		const rawRichTextField = entry.fields.heroText;
		const aboutUs = entry.fields.aboutUs;
		entry.fields.heroText = documentToHtmlString(rawRichTextField);
		entry.fields.aboutUs = documentToHtmlString(aboutUs);
		return entry.fields;
	});

	return entries;
}

export default { fetchEntries, fetchEntriesByID };
