import styled from "styled-components";
import CTA from "../CTAbutton";
import Link from "next/link";

const StyledSection = styled.section`
	display: flex;
	flex-flow: column nowrap;
	background-color: var(--lightBeige);
	padding: 32px 24px;
	margin: 0 16px;

	& h1 {
		font-family: var(--fontCon);
		font-weight: bold;
		font-size: 28px;
		line-height: 33px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--nearBlack);
		padding-bottom: 16px;
		margin-bottom: 8px;
		border-bottom: 2px solid var(--lightBrown);
	}

	& div {
		& p {
			font-family: var(--fontCon);
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
			color: var(--nearBlack);
		}
	}
	& .events {
		display: flex;
		flex-flow: column nowrap;
		border-bottom: 2px solid var(--lightBrown);
		margin: 12px 0 32px 0;

		& div {
			margin: 20px 0;

			& .image {
				margin: 0;
				& img {
					width: 100%;
				}
			}
			& h2 {
				font-family: var(--fontCon);
				font-weight: 700;
				font-size: 24px;
				line-height: 28px;
				letter-spacing: 0.08em;
				color: var(--orange);
				margin: 16px 0 8px 0;
				text-transform: uppercase;
			}

			& h3 {
				font-family: var(--fontCon);
				font-weight: 700;
				font-size: 16px;
				line-height: 19px;
				letter-spacing: 0.01em;
				color: var(--nearBlack);
			}

			& p {
				font-weight: normal;
				font-size: 16px;
				line-height: 24px;
				color: var(--nearBlack);
				margin: 16px 0;
				height: 15.5vh;
			}

			& a {
				font-family: var(--fontCon);
				font-weight: 700;
				font-size: 16px;
				line-height: 19px;
				letter-spacing: 0.08em;
				text-decoration-line: underline;
				text-transform: uppercase;
				color: var(--orange);
			}
		}
	}

	@media (min-width: 1025px) {
		justify-content: center;
		align-items: center;
		padding: 72px 51px 60px 51px;

		& h1 {
			margin-bottom: 16px;
			padding: none;
			border-bottom: none;
		}

		& div {
			& p {
				text-align: center;
				font-family: var(--fontCon);
				font-weight: 400;
				font-size: 24px;
				line-height: 36px;
				color: var(--nearBlack);
			}
		}
		& .events {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			margin: 72px 0 37px 0;
			width: 100%;

			& div {
				margin: 0 36px 60px 36px;
				width: calc(100% / 3);

				& .image {
					width: 100%;
					margin: 0;
					& img {
						width: 100%;
					}
				}

				& p {
					text-align: left;
					width: 100%;
				}
			}
		}
	}
`;

function PreviewEvents(props) {
	React.useEffect(() => {
		const eventInfoDiv = document.querySelector(".eventInfo");
		eventInfoDiv.innerHTML = props.eventText.text;
	});

	function truncate(str, n) {
		if (str.length <= n) {
			return str;
		}
		const subString = str.substr(0, n - 1);
		return subString.substr(0, subString.lastIndexOf(" ")) + "...";
	}

	return (
		<StyledSection>
			<h1>Evenemang</h1>
			<div className="eventInfo"></div>
			<div className="events">
				{props.events.map((event, i) => {
					const eventInfo = event.sys;
					event = event.fields;
					let image = event.image.fields;
					let desc = event.description;
					desc = truncate(desc, 140, true);
					return (
						<div key={i}>
							<div className="image">
								<picture>
									<source
										media="(min-width: 1000px)"
										srcSet={
											"https:" + image.file.url + "?w=800"
										}
									/>
									<source
										media="(min-width: 768px)"
										srcSet={
											"https:" + image.file.url + "?w=700"
										}
									/>
									<img
										src={
											"https:" + image.file.url + "?w=400"
										}
										alt={event.title}
									/>
								</picture>
							</div>
							<h2>{event.title}</h2>
							<h3>{event.date}</h3>
							<p>{desc}</p>
							<Link href={`/events/${eventInfo.id}`}>
								<a>Läs mer här</a>
							</Link>
						</div>
					);
				})}
			</div>
			<CTA link="" text="se alla evenemang" />
		</StyledSection>
	);
}

export default PreviewEvents;
