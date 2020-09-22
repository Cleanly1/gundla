import styled from "styled-components";
import CTA from "../CTAbutton";

const StyledSection = styled.section`
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
		border-bottom: 2px solid var(--lightBrown);
		margin: 32px 0;
	}
`;

function Hero(props) {
	console.log(props);
	React.useEffect(() => {
		const eventInfoDiv = document.querySelector(".eventInfo");
		eventInfoDiv.innerHTML = props.eventText.text;
	});

	return (
		<StyledSection>
			<h1>Evenemang</h1>
			<div className="eventInfo"></div>
			<div className="events">
				{props.events.map((event, i) => {
					return <div key={i}></div>;
				})}
			</div>
			<CTA link="" text="se alla evenemang" />
		</StyledSection>
	);
}

export default Hero;
