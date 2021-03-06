import Layout from "../components/layout";
import DisplayImages from "../components/DisplayImages";
import {
	fetchEntriesByID,
	fetchEntry,
	richTextToHtml,
} from "../utils/contentfulPosts";
import styled from "styled-components";
import Cta from "../components/CTAbutton";

function Events(props) {
	React.useEffect(() => {
		document.querySelector(".event").innerHTML = props.event.text;
	});

	const StyledBanner = styled.div`
		background: var(--orange);
		padding: 10px;
		text-align: center;
		letter-spacing: 0.08em;
		margin: 10px 0 0 0;

		& h2 {
			font-size: 18px;
		}
	`;

	const StyledEvents = styled.div`
		margin: 20px 10px 10px 10px;
		background: var(--lightBeige);
		padding: 20px;

		& h1 {
			font-size: 28px;
			letter-spacing: 0.08em;
			font-family: var(--fontCon);
			border-bottom: 2px solid var(--lightBrown);
			padding: 0 0 20px 0;
		}

		& p {
			padding: 20px 0 10px 0;
			font-family: var(--fontCon);
			line-height: 24px;
		}
	`;

	const StyledEvent = styled.div`
		padding: 20px 20px 0 20px;

		& p {
			line-height: 24px;
		}

		& h2 {
			color: #dd932d;
			padding: 10px 0 0 0;
			letter-spacing: 0.08em;
			font-family: var(--fontCon);
		}

		& img {
			width: 100%;
			border-top: 2px solid var(--lightBeige);
			padding: 20px 0 0 0;
		}

		& .bold {
			padding: 20px 0;
			font-weight: bold;
			font-family: var(--fontCon);
		}

		& .bold.first {
			padding: 7px 0;
		}

		@media (min-width: 768px) {
			max-width: 1000px;
			margin: auto;
		}
	`;

	const StyledButton = styled.div`
		width: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
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
					<p className="bold first">{event.fields.date}</p>
					<p>{event.fields.description}</p>
					<p className="bold">{event.fields.ticket}</p>
				</StyledEvent>
			))}
			<StyledButton>
				<div>
					<Cta
						text="SE FLER EVENEMANG"
						link="/events"
						borderColor="#769D6C"
					/>
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
