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

		& h1 {
			margin-top: 16px;
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
				<div>
					<img
						src="/icons/bike-icon.svg"
						alt="illustration of a bike"
					/>
				</div>
				<h1>LÄMNA BILEN HEMMA</h1>
				<p>
					Vi värnar om naturen, djuren och allt i vår närhet. Därför
					ser vi helst att ni som har möjlighet tar cykel eller går
					till oss. Vid rörelsehinder går det bra att kontakta oss
					innan.
				</p>
			</div>
			<div>
				<div>
					<img
						src="/icons/dog-icon.svg"
						alt="illustartion of a dog paw"
					/>
				</div>
				<h1>ALLA ÄR VÄLKOMNA</h1>
				<p>
					Hunden är ju människans bästa vän och vi är alla vänner. Vi
					ser därför till att även din hund får en bra upplevelse och
					är självklart också välkommen till oss.
				</p>
			</div>
			<div>
				<div>
					<img
						src="/icons/plant-icon.svg"
						alt="illustration of a hand holding a flower"
					/>
				</div>
				<h1>NJUT AV NATUREN</h1>
				<p>
					Vi försöker skapa en så naturlig miljö som möjligt med
					återvunna och organiska material. Vi hoppas att det känns.
				</p>
			</div>
		</InfoSection>
	);
}

export default Info;
