import styled from "styled-components";

const ContactInfo = (props) => {
	console.log(props.text);

	const StyledDiv = styled.div`
		margin: 0 20px 0 20px;
		padding: 10px;
		border: 3px solid #eec996;

		& h1 {
			padding: 0 0 10px 0;
			border-bottom: 3px solid #eec996;
		}

		& p {
			padding: 10px 0 0 0;
		}

		& h2 {
			padding: 10px 0 0 0;
		}

		@media (min-width: 768px) {
			/* padding: 0 10px 0 10px; */
			max-width: 1000px;
			margin: 100px auto 0 auto;
		}
	`;

	const StyledImg = styled.div`
		margin: 0 0 60px 20px;

		& img {
			width: calc(100% - 20px);
		}

		@media (min-width: 768px) {
			/* padding: 0 10px 0 10px; */
			max-width: 1000px;
			margin: auto;

			& img {
				width: calc(100%);
				margin: 0 0 -4px 0;
			}
		}
	`;

	React.useEffect(() => {
		document.querySelector(".infoText").innerHTML = props.text;
	});

	return (
		<div>
			<StyledDiv>
				<h1>{props.title}</h1>
				<div className="infoText"></div>
			</StyledDiv>
			<StyledImg>
				<img src={`https:${props.image}`} alt="Contact Image" />
			</StyledImg>
		</div>
	);
};

export default ContactInfo;
