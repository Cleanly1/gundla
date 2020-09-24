import styled from "styled-components";

const HeroContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: calc(100vw - 32px);
	max-height: 142vh;
	padding: 0 16px;
	margin-bottom: 42px;

	& .text {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: flex-start;
		padding: 32px 50px;
		padding-bottom: 30vh;
		background: ${(props) => props.bgColor || "#faf5ef"};
		border: ${(props) => props.border || "none"};
		border-radius: 2px;
		color: var(--nearBlack);

		& h1 {
			font-family: var(--fontCon);
			font-weight: 700;
			width: 100%;
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
		}

		& .richText {
			margin-bottom: 24px;
			& p {
				font-size: 16px;
				line-height: 24px;
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
		height: 40vw;
		& .logo {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			bottom: 59vh;
			height: 30vw;
			width: 30vw;
			& img {
				width: 100%;
			}
		}
		& .squareImg {
			position: relative;
			right: -11.5vw;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			height: 80vw;
			width: 80vw;
			border-radius: 2px;
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
			height: 50vw;
			width: 80vw;
			border-radius: 2px;
			& img {
				width: 100%;
			}
		}
	}

	& .showOnDesktop {
		display: none;
		font-family: var(--fontCon);
		font-size: 24px;
		line-height: 28px;
		color: var(--nearBlack);
	}

	@media (min-width: 1025px) {
		flex-flow: row nowrap;
		margin: 72px 0 0 0;
		padding: 0 48px;
		width: calc(100vw - 96px);
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
			& button {
				align-self: flex-start;
			}
		}

		& .images {
			position: static;
			width: 45vw;
			height: 10px;
			& .logo {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				bottom: 84vh;
				right: 8vw;
				height: 15vw;
				width: 15vw;
				& img {
					width: 100%;
				}
			}
			& .squareImg {
				position: relative;
				top: 4vh;
				left: -4vw;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				height: 38vw;
				width: 43vw;
				& img {
					position: relative;
					top: 50px;
				}
			}

			& .reqImg {
				position: relative;
				top: -10vw;
				left: -9vw;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				max-height: 25vw;
				width: 40vw;
			}
		}
	}
`;

function Hero(props) {
	const imageOne = props.images.heroImageOne.fields;
	const imageTwo = props.images.heroImageTwo.fields;
	console.log(props);

	return (
		<HeroContainer bgColor={props.bgColor} border={props.border}>
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
				<div className="logo">
					<img src="/Logo-beige.svg" alt="Gundla logo" />
				</div>
			</div>
		</HeroContainer>
	);
}

export default Hero;
