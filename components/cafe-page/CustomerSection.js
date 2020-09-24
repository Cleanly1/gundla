import styled from "styled-components";

const InfoSection = styled.section`
	display: flex;
	flex-flow: column nowrap;
	width: calc(100vw - 32px);
	padding: 16px 16px;
	overflow: hidden;
	background-image: url("/ground.jpg");
	background-size: contain;
	background-color: rgba(255, 255, 255, 0.95);
	background-blend-mode: lighten;

	& div {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;

		margin: 12px 0;
		padding: 16px 35px;

		& h6 {
			font-weight: normal;
			font-size: 16px;
			line-height: 24px;
			text-align: center;
			color: var(--nearBlack);
			margin-top: 8px;
		}

		& p {
			margin-top: 8px;
			font-style: normal;
			font-weight: 500;
			font-size: 20px;
			line-height: 28px;
			text-align: center;
		}
	}

	@media (min-width: 768px) {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
		padding: 148px 8vw 72px 5vw;
		width: 87vw;
		margin-bottom: 24px;

		& div {
			width: 35%;
			margin: 0 2vw;
			& div {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 50%;
				height: 93px;
				margin: 0;
				padding: 0;
				padding-bottom: 13px;
				border-bottom: 2px solid var(--lightGreen);
			}

			& p {
				width: 100%;
			}
		}
	}
`;

function Info() {
	return (
		<InfoSection>
			<div>
				<p>
					”Fin miljö, god vegansallad. Mycket uppskattat att man
					uppmuntras att lämna bilen hemma”
				</p>
				<h6>– Jesper Johansson</h6>
			</div>
			<div>
				<p>”Fantastisk plats, intressant mat.”</p>
				<h6>– Jakub Mucha</h6>
			</div>
			<div>
				<p>
					”Som en oas i det redan lungna delsjön. God fika, trevlig
					personal och fantastisk miljö.”
				</p>
				<h6>– Lukas Sanden</h6>
			</div>
		</InfoSection>
	);
}

export default Info;
