import styled from "styled-components";

const HeroContainer = styled.div`
	height: auto;

	& .text {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		padding: 32px 50px;
		background: ${(props) => props.bgColor || "#faf5ef"};
		color: var(--brown);

		& h1 {
			font-family: var(--fontCon);
			font-weight: 400;
			font-size: 28px;
			letter-spacing: 0.08em;
			padding-bottom: 16px;
			border-bottom: 1px solid var(--brown);
		}

		& h3 {
			font-family: var(--fontCon);
			font-weight: 400;
			font-size: 18px;
			text-align: left;
			width: 100%;
			margin: 24px 0;
			color: var(--nearBlack);
		}

		& p {
			font-size: 16px;
			line-height: 24px;
			color: var(--nearBlack);
			margin-bottom: 24px;
		}
	}
`;

function Hero(props) {
	return (
		<HeroContainer bgColor={props.bgColor}>
			<div className="text">
				<h1>GUNDLA GÅRDSCAFÈ</h1>
				<h3>Caféet i stan men mitt i naturen!</h3>
				<p>
					Vi är ett utomhuscafé i kanten av Delsjö Naturreservat som
					utöver smarrig fika och mättande soppor, erbjuder en härlig
					och avslappnad miljö bort från stress och oro. Här ersätter
					vi stadens brus med trädens härliga sus.
				</p>
				<p>Du klär dig efter väder och cyklar eller promenerar hit. </p>
				<p>
					I höst samt vinter kommer vi tända brasor du kan värma dig
					vid och vi har många platser under tak när regnet öser ner.{" "}
				</p>
			</div>
			<div></div>
		</HeroContainer>
	);
}

export default Hero;
