import Layout from "../components/layout";
import {
	fetchEntriesByID,
	richTextToHtml,
	fetchEntry,
} from "../utils/contentfulPosts";
import styled from "styled-components";

function Events(props) {
	console.log(props.events[0].fields);
	// console.log(props.event);

	React.useEffect(() => {
		document.querySelector(".richText").innerHTML = props.event.text;
	});

	return (
		<Layout title="Events">
			<div>{props.event.info}</div>
			<h1>{props.event.title}</h1>
			<div className="richText"></div>
			{props.events.map((event) => (
				<div>
					<h2>{event.fields.title}</h2>
					<img
						src={`https:${event.fields.image.fields.file.url}`}
						alt=""
					/>
					<p>{event.fields.date}</p>
					<p>{event.fields.description}</p>
					<p>{event.fields.ticket}</p>
				</div>
			))}
		</Layout>
	);
}

{
	/* <div>
				<h2>{props.events[0].fields.title}</h2>
				<img
					src={`https:${props.events[0].fields.image.fields.file.url}`}
					alt=""
				/>
				<p>{props.events[0].fields.date}</p>
				<p>{props.events[0].fields.description}</p>
				<p>{props.events[0].fields.ticket}</p>
			</div> */
}

export default Events;

export async function getStaticProps() {
	const event = await fetchEntriesByID("6sO9wSIadxSWFhbL9tXjlp");
	event.text = richTextToHtml(event.text);

	const events = await fetchEntry("events");
	// events.text = richTextToHtml(events.text);

	return {
		props: {
			event,
			events,
		},
	};
}
