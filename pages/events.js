import Layout from "../components/layout";
import DisplayImages from "../components/DisplayImages";
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
		background: var(--orange);
		padding: 10px;
		text-align: center;
		letter-spacing: 0.08em;

		@media (min-width: 768px) {
			margin: 10px 0 0 0;
		}
	`;

	const StyledEvents = styled.div`
		margin: 20px 10px 10px 10px;
		background: var(--lightBeige);
		padding: 10px;
		text-align: center;
		letter-spacing: 0.08em;

		& h1 {
			padding: 10px;
		}

		& p {
			padding: 10px;
		}
	`;

	const StyledEvent = styled.div`
		padding: 20px 20px 0 20px;
		letter-spacing: 0.08em;

		& h2 {
			color: #dd932d;
			padding: 10px 0 0 0;
		}

		& img {
			width: 100%;
			border-top: 2px solid var(--lightBeige);

			padding: 20px 0 0 0;
		}

		& .bold {
			padding: 20px 0;
			font-weight: bold;
		}

		@media (min-width: 768px) {
			max-width: 1000px;
			margin: auto;
		}
	`;

	const StyledButton = styled.div`
		width: 100%;
		margin: 20px auto 0 auto;
		letter-spacing: 0.08em;

		& .more-events {
			font-size: 100%;
			font-family: inherit;
			background: var(--lightBeige);
			border: 2px solid var(--nearBlack);
			border-radius: 2px;
			padding: 5px 0 0 0;
			height: 40px;
			width: 300px;
			margin: auto;
			cursor: pointer;
		}

		& .more-events p {
			text-align: center;
			font-size: 20px;
			font-weight: bold;
			margin-top: 5px;
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
			<StyledButton>
				<div className="more-events">
					<p>SE FLER EVENEMANG</p>
				</div>
			</StyledButton>
			<DisplayImages images={props.displayImages} />
		</Layout>
	);
}

export default Events;

export async function getStaticProps() {
	const event = await fetchEntriesByID("6sO9wSIadxSWFhbL9tXjlp");
	const events = await fetchEntry("events");
	const hours = await fetchEntriesByID("Mj8bQjVAwHv8m3rWjPGrC");
	const displayImages = await fetchEntriesByID("2QLm8CE0m0k2N2w8rAjJ0n");

	event.text = richTextToHtml(event.text);
	hours.openHours = richTextToHtml(hours.openHours);

	return {
		props: {
			event,
			events,
			hours,
			displayImages,
		},
	};
}
