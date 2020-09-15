import styled from "styled-components";

const HeroContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: 100%;
	max-height: 142vh;
	margin-bottom: 42px;

	& .text {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: flex-start;
		padding: 32px 50px;
		padding-bottom: 30vh;
		background: ${(props) => props.bgColor || "#faf5ef"};
		color: var(--brown);

		& h1 {
			font-family: var(--fontCon);
			font-weight: 700;
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

		& .richText {
			margin-bottom: 24px;
			& p {
				font-size: 16px;
				line-height: 24px;
				color: var(--nearBlack);
				margin-bottom: 24px;
			}
		}

		& button {
			align-self: center;
		}
	}

	& .images {
		position: relative;
		top: -25vh;
		height: auto;
		& .squareImg {
			position: relative;
			right: -11.5vw;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			height: 80vw;
			width: 80vw;

			& img {
				width: 100%;
			}
		}

		& .reqImg {
			position: relative;
			top: -40vw;
			left: 0px;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			height: 60vw;
			width: 60vw;
			& img {
				width: 100%;
				transform: rotateY(180deg);
			}
		}
	}

	& .showOnDesktop {
		display: none;
	}

	@media (min-width: 768px) {
		flex-flow: row nowrap;
		margin: 72px calc(3.5vw - 16px);
		margin-bottom: 102px;
		max-height: 95vh;

		& .text {
			width: 40vw;
			height: auto;
			padding: 6vw 11vw 5vw 5vw;
			justify-content: flex-start;
			align-items: flex-start;

			& h1 {
				width: 100%;
				font-size: 40px;
				letter-spacing: 0.08em;
				line-height: 47px;
				padding-bottom: 32px;
				color: var(--nearBlack);
				border-bottom: 1px solid var(--brown);
			}

			& h3 {
				font-family: var(--fontCon);
				font-weight: 400;
				font-size: 18px;
				text-align: left;
				width: 100%;
				margin: 48px 0 32px 0;
				color: var(--nearBlack);

				&.showOnDesktop {
					display: initial;
					margin-top: 0;
				}
			}

			& p {
				font-size: 16px;
				line-height: 28px;
				color: var(--nearBlack);
				margin-bottom: 28px;

				:last-child {
					margin-bottom: 0;
				}
			}
		}

		& .images {
			position: static;
			padding-top: 50px;
			width: 45vw;
			& .squareImg {
				position: relative;
				right: 0;
				left: -50px;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				height: 37vw;
				width: 44vw;
			}

			& .reqImg {
				position: relative;
				top: -20vw;
				left: -100px;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				max-height: 26vw;
				width: 26vw;
			}
		}
	}
`;

function Hero(props) {
	console.log(props);
	const imageOne = props.images.heroImageOne.fields;
	const imageTwo = props.images.heroImageTwo.fields;

	return (
		<HeroContainer bgColor={props.bgColor}>
			<div className="text">
				<h1>{props.title}</h1>

				{props.children}
			</div>
			<div className="images">
				<div className="squareImg">
					<picture>
						<source
							media="(min-width: 1000px)"
							srcSet={"https:" + imageOne.file.url + "?w=800"}
						/>
						<source
							media="(min-width: 768px)"
							srcSet={"https:" + imageOne.file.url + "?w=700"}
						/>
						<img
							src={"https:" + imageOne.file.url + "?w=400"}
							alt={imageOne.description}
						/>
					</picture>
				</div>
				<div className="reqImg">
					<picture>
						<source
							media="(min-width: 1000px)"
							srcSet={"https:" + imageTwo.file.url + "?w=800"}
						/>
						<source
							media="(min-width: 768px)"
							srcSet={"https:" + imageTwo.file.url + "?w=700"}
						/>
						<img
							src={"https:" + imageTwo.file.url + "?w=400"}
							alt={imageTwo.description}
						/>
					</picture>
				</div>
			</div>
		</HeroContainer>
	);
}

export default Hero;
