import styled from "styled-components";

const InfoSection = styled.section`
	display: flex;
	flex-flow: column nowrap;
	width: calc(100vw - 144px);
	padding: 16px 72px;
	overflow: hidden;
	background-image: url("/images/ground.jpg");
	background-size: contain;
	background-color: rgba(255, 255, 255, 0.95);
	background-blend-mode: lighten;

	& div {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		margin: 12px 0;
		padding: 16px 24px;

		& h1 {
			margin-top: 24px;
			font-family: var(--fontCon);
			font-weight: bold;
			font-size: 18px;
			line-height: 21px;
			text-align: center;
			letter-spacing: 0.08em;
			color: var(--nearBlack);
		}

		& p {
			margin-top: 8px;
			font-style: normal;
			font-size: 16px;
			line-height: 24px;
			text-align: center;
		}

		& div {
			width: 80px;
			height: 80px;
			background: gray;
		}
	}

	@media (min-width: 768px) {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
		padding: 144px 8vw 72px 5vw;
		width: 87vw;
		margin-bottom: 24px;

		& div {
			width: 34%;
			margin: 0 2vw;
			& div {
				width: 80px;
				height: 60px;
				background: gray;
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
				<div>
					<img src="" alt="" />
				</div>
				<h1>LÄMNA BILEN HEMMA</h1>
				<p>
					Då det är viktigt med natur och sånt så får du gärna cykla
					till oss. det finns heller ingen parkering så lycka till om
					du kör bil, idiot.
				</p>
			</div>
			<div>
				<div>
					<img src="" alt="" />
				</div>
				<h1>TA MED HUNDEN</h1>
				<p>
					Då det är viktigt med natur och sånt så får du gärna cykla
					till oss. det finns heller ingen parkering så lycka till om
					du kör bil, idiot.
				</p>
			</div>
			<div>
				<div>
					<img src="" alt="" />
				</div>
				<h1>NJUT AV NATUREN</h1>
				<p>
					Då det är viktigt med natur och sånt så får du gärna cykla
					till oss. det finns heller ingen parkering så lycka till om
					du kör bil, idiot.
				</p>
			</div>
		</InfoSection>
	);
}

export default Info;
