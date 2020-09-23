import Layout from "../components/layout";
import {
	fetchEntriesByID,
	fetchEntry,
	richTextToHtml,
} from "../utils/contentfulPosts";
import styled from "styled-components";

function Events(props) {
	React.useEffect(() => {
		document.querySelector(".event").innerHTML = props.event.text;
	});

	const StyledBanner = styled.div`
		background: #dd932d;
		padding: 10px;
		text-align: center;

		@media (min-width: 768px) {
			margin: 10px 0 0 0;
		}
	`;

	const StyledEvents = styled.div`
		margin: 20px 10px 10px 10px;
		background: #f9f4ed;
		padding: 10px;
		text-align: center;

		& h1 {
			padding: 10px;
		}

		& p {
			padding: 10px;
		}
	`;

	const StyledEvent = styled.div`
		padding: 20px;

		& h2 {
			color: #dd932d;
			padding: 10px 0 0 0;
		}

		& img {
			width: 100%;
			border-top: 2px solid #f9f4ed;
			padding: 20px 0 0 0;
		}

		& .bold {
			padding: 10px 0;
			font-weight: bold;
		}

		@media (min-width: 768px) {
			max-width: 1000px;
			margin: auto;
		}
	`;

	return (
		<Layout title="Events" openHours={props.hours.openHours}>
			<StyledBanner>
				<h2>{props.event.info}</h2>
			</StyledBanner>
			<StyledEvents>
				<h1>{props.event.title}</h1>
				<div className="event"></div>
			</StyledEvents>
			{props.events.map((event) => (
				<StyledEvent>
					<img
						src={`https:${event.fields.image.fields.file.url}`}
						alt={event.fields.image.fields.title}
					/>
					<h2>{event.fields.title}</h2>
					<p className="bold">{event.fields.date}</p>
					<p>{event.fields.description}</p>
					<p className="bold">{event.fields.ticket}</p>
				</StyledEvent>
			))}
		</Layout>
	);
}

export default Events;

export async function getStaticProps() {
	const event = await fetchEntriesByID("6sO9wSIadxSWFhbL9tXjlp");
	const events = await fetchEntry("events");
	const hours = await fetchEntriesByID("Mj8bQjVAwHv8m3rWjPGrC");
	// events.text = richTextToHtml(events.text);
	event.text = richTextToHtml(event.text);
	hours.openHours = richTextToHtml(hours.openHours);

	return {
		props: {
			event,
			events,
			hours,
		},
	};
}
