import styled from "styled-components";

const ContactInfo = (props) => {
	const StyledDiv = styled.div`
		margin: 0 20px 0 20px;
		padding: 20px;
		border: 2px solid var(--lightOrange);
		border-radius: 2px;

		& .info-text {
			padding: 0px 0 0 0;
		}

		& h1 {
			padding: 0 0 10px 0;
			border-bottom: 2px solid var(--lightOrange);
			font-size: 28px;
			font-family: var(--fontCon);
			letter-spacing: 0.08em;
		}

		& p {
			padding: 10px 0 0 0;
			line-height: 24px;
		}

		& h2 {
			padding: 20px 0 0 0;
			font-size: 18px;
			font-family: var(--fontCon);
			letter-spacing: 0.08em;
		}

		@media (min-width: 768px) {
			max-width: 1000px;
			margin: 100px auto 0 auto;
		}
	`;

	return (
		<div>
			<StyledDiv>
				<h1>{props.title}</h1>
				{props.children}
			</StyledDiv>
		</div>
	);
};

export default ContactInfo;
