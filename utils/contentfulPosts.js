const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries(content_type) {
  const entries = await client.getEntries({
    content_type: content_type,
  });

  return entries.items;
}

export default { fetchEntries };
