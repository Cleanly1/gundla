import styled from "styled-components";
import Cta from "./CTAbutton";

const StyledSection = styled.section`
	display: flex;
	flex-flow: column nowrap;
	width: calc(100vw - 32px);
	padding: 0 16px;

	& .imagecontainer {
		position: relative;
		top: -24px;
		left: -24px;
		width: 80vw;
		height: 80vw;
		margin-bottom: 24px;
		background: ${(props) => props.bgImg || "var(--leafGreen)"};
		margin: 24px 24px 0 24px;
		z-index: 5;

		& .image {
			position: relative;
			top: 24px;
			left: 9%;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 85vw;
			height: 85vw;
			overflow: hidden;
			background: none;
			z-index: 5;

			& img {
				width: 100%;
			}
		}
	}
	& .textWrapper {
		display: flex;
		flex-flow: column nowrap;
		position: relative;
		top: -24px;
		background: ${(props) => props.bgColor || "var(--lightGreen)"};
		padding-top: 45px;
		z-index: 4;

		& .textContent {
			padding: 32px 24px 24px 24px;
			color: var(--nearBlack);

			& h1 {
				width: 100%;
				padding-bottom: 16px;
				font-family: var(--fontCon);
				font-weight: bold;
				font-size: 28px;
				line-height: 33px;
				letter-spacing: 0.08em;
				text-transform: uppercase;
				margin-bottom: 24px;
				border-bottom: 2px solid
					${(props) => props.bgImg || "var(--leafGreen)"};
			}

			& p {
				font-weight: normal;
				font-size: 16px;
				line-height: 24px;
				margin-bottom: 24px;

				:last-child {
					margin-bottom: 16px;
				}
			}
		}

		& button {
			width: 50%;
			align-self: center;
			margin: 0 auto 32px auto;
		}
	}

	@media (min-width: 768px) {
		flex-flow: row nowrap;
		padding: 0 48px;
		width: calc(100vw - 96px);
		background: none;
		& .wrapper {
			width: 0vw;
			& .imagecontainer {
				position: relative;
				top: 12px;
				left: 12px;
				width: 35vw;
				height: 35vw;
				margin-bottom: 24px;
				background: ${(props) => props.bgImg || "var(--leafGreen)"};

				& .image {
					position: relative;
					top: 24px;
					left: 24px;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 38vw;
					height: 38vw;
					overflow: hidden;

					& img {
						width: 100%;
					}
				}
			}
		}
		& .textWrapper {
			display: flex;
			flex-flow: column nowrap;
			width: 50vw;
			padding-top: 0;
			margin-left: 30vw;
			padding: 24px 24px 24px 15vw;
			& .textContent {
				padding: 72px 24px 24px 24px;

				& h1 {
					width: 100%;
					padding-bottom: 16px;
					font-family: var(--fontCon);
					font-weight: bold;
					text-transform: uppercase;
					margin-bottom: 48px;
				}

				& p {
					width: 100%;
					line-height: 28px;
					margin-bottom: 24px;
					:nth-last-child(2) {
						margin-bottom: 0;
					}
				}
			}

			& button {
				width: 50%;
				align-self: flex-start;
				margin: 0 0 32px 26px;
			}
		}
	}

	@media (min-width: 1024px) {
		& .textWrapper {
			& .textContent {
				& p {
					width: 90%;
				}
			}
			& button {
				width: 50%;
				align-self: flex-start;
				margin: 0 0 64px 26px;
			}
		}
	}
`;

function TextSection(props) {
	console.log(props);
	const imageInfo = props.image;
	return (
		<StyledSection bgColor={props.bgColor} bgImg={props.imgBG}>
			<div className="wrapper">
				<div className="imagecontainer">
					<div className="image">
						<picture>
							<source
								media="(min-width: 1000px)"
								srcSet={
									"https:" + imageInfo.file.url + "?w=800"
								}
							/>
							<source
								media="(min-width: 768px)"
								srcSet={
									"https:" + imageInfo.file.url + "?w=700"
								}
							/>
							<img
								src={"https:" + imageInfo.file.url + "?w=400"}
								alt={imageInfo.description}
							/>
						</picture>
					</div>
				</div>
			</div>
			<div className="textWrapper">{props.children}</div>
		</StyledSection>
	);
}

export default TextSection;
