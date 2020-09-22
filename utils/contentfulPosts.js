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
		return entry.fields;
	});

	return entries;
}

export function richTextToHtml(text) {
	return documentToHtmlString(text);
}

export default { fetchEntries, fetchEntriesByID, richTextToHtml };
