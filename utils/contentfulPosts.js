const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries() {
  const entries = await client.getEntries();

  return entries.items;
}

export default { fetchEntries };
