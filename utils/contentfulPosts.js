import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const client = require("contentful").createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntriesByType(type) {
	const entries = await client.getEntries({
		content_type: type,
	});

	return entries.items;
}

export async function fetchPreviewEvents() {
	const entries = await client.getEntries({
		content_type: "events",
		order: "sys.createdAt",
		include: 3,
	});

	return entries.items;
}

export async function fetchEntry(name) {
	const entries = await client.getEntries({ content_type: name });

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

export default {
	fetchEntriesByID,
	fetchEntry,
	richTextToHtml,
	fetchPreviewEvents,
};
