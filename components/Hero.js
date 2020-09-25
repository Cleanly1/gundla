import styled from "styled-components";

const HeroContainer = styled.div`
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	width: calc(100vw - 32px);
	max-height: 142vh;
	padding: 0 16px;
	padding-top: 24px;
	margin-bottom: 42px;

	& .background {
		position: absolute;
		top: 0;
		left: 0px;
		width: 100vw;
		height: 105%;
		background-image: url("/ground.jpg");
		background-size: contain;
		background-color: rgba(255, 255, 255, 0.95);
		background-blend-mode: lighten;
		z-index: 0;
	}

	& .text {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: flex-start;
		padding: 32px 24px;
		padding-bottom: 10vh;
		margin-bottom: 20vh;
		background: ${(props) => props.bgColor || "#faf5ef"};
		border: ${(props) => props.border || "none"};
		border-radius: 2px;
		color: var(--nearBlack);
		z-index: 4;

		& .richText {
			width: 100%;
		}

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
			z-index: 5;
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
			z-index: 5;
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
			z-index: 5;
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
		font-weight: normal;
		color: var(--nearBlack);
	}
	& .hideOnDesktop {
		font-family: var(--fontCon);
		font-size: 20px;
		line-height: 23px;
		font-weight: normal;
		color: var(--nearBlack);
		margin: 0;
	}

	@media (min-width: 1025px) {
		flex-flow: row nowrap;
		margin: 72px 0 0 0;
		padding: 0 48px;
		width: calc(100vw - 96px);
		max-height: 95vh;

		& .background {
			display: none;
		}

		& .text {
			width: calc(50vw - 16vw);
			height: auto;
			padding: 6vw 11vw 5vw 5vw;
			margin: 0;
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
				& .hideOnDesktop {
					display: none;
				}
			}

			& p {
				font-size: 16px;
				line-height: 28px;
				color: var(--nearBlack);
				margin-bottom: 28px;
				width: 100%;

				:last-child {
					margin-bottom: 0;
				}
			}
			& button {
				align-self: flex-start;
			}
		}

		& .images {
			position: relative;
			width: 33vw;
			height: 95vh;
			top: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			& .logo {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				top: 34%;
				left: -30%;
				height: 15vw;
				width: 15vw;
				& img {
					width: 100%;
				}
			}
			& .squareImg {
				position: absolute;
				top: 4vh;
				left: -36px;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				height: 41vw;
				width: 46vw;
				& img {
					position: relative;
					top: 50px;
				}
			}

			& .reqImg {
				position: absolute;
				top: 50%;
				left: -30%;
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

	return (
		<HeroContainer
			bgColor={props.bgColor}
			border={props.border}
			className={props.className}
		>
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
			<div className="background"></div>
		</HeroContainer>
	);
}

export default Hero;
