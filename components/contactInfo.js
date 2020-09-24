import styled from "styled-components";

const ContactInfo = (props) => {
	const StyledDiv = styled.div`
		margin: 0 20px 0 20px;
		padding: 20px;
		border: 2px solid var(--lightOrange);
		border-radius: 2px;
		letter-spacing: 0.08em;
		& .info-text {
			padding: 20px 0 0 0;
		}

		& h1 {
			padding: 0 0 10px 0;
			border-bottom: 2px solid var(--lightOrange);
			font-size: 28px;
		}

		& p {
			padding: 10px 0 0 0;
			line-height: 24px;
		}

		& h2 {
			padding: 20px 0 0 0;
			font-size: 18px;
		}

		@media (min-width: 768px) {
			max-width: 1000px;
			margin: 100px auto 0 auto;
		}
	`;

	const StyledImg = styled.div`
		padding: 0 20px 30px 20px;
		margin: 0 0 20px 20px;

		& img {
			width: 100%;
		}

		@media (min-width: 768px) {
			max-width: 1000px;
			margin: auto;
		}
	`;

	React.useEffect(() => {
		document.querySelector(".info-text").innerHTML = props.text;
	});

	return (
		<div>
			<StyledDiv>
				<h1>{props.title}</h1>
				<div className="info-text"></div>
			</StyledDiv>
			<StyledImg>
				<img src={`https:${props.image}`} alt="Contact Image" />
			</StyledImg>
		</div>
	);
};

export default ContactInfo;
