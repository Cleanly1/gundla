import styled from "styled-components";

const StyledSection = styled.section`
	display: flex;
	flex-flow: column nowrap;
	width: calc(100vw - 32px);
	padding: 0 16px;
	background-image: url("/ground.jpg");
	background-size: contain;
	background-color: rgba(255, 255, 255, 0.95);
	background-blend-mode: lighten;

	& .imagecontainer {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 80vw;
		height: 100vw;
		margin-bottom: 24px;
		margin: 24px 24px 0 24px;
		border-radius: 2px;
		z-index: 5;

		& .image {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 80vw;
			height: 100%;
			overflow: hidden;
			background: none;
			border-radius: 2px;
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
		background: ${(props) => props.bgColor || "var(--lightGreen)"};
		padding: 32px 24px;
		z-index: 4;

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
			border-bottom: 2px solid rgba(77, 77, 77, 0.5);
		}
		& p {
			font-family: var(--fontCon);
			font-style: normal;
			font-weight: normal;
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 24px;
			padding-bottom: 16px;
			border-bottom: 2px solid rgba(77, 77, 77, 0.5);
		}

		& .findUsText {
			color: var(--nearBlack);

			& h3 {
				font-family: var(--fontCon);
				font-style: normal;
				font-weight: bold;
				font-size: 18px;
				line-height: 21px;
				letter-spacing: 0.08em;
				margin-bottom: 8px;
				color: var(--nearBlack);
			}

			& p {
				font-weight: normal;
				font-size: 16px;
				line-height: 24px;
				padding-bottom: 0;
				border-bottom: none;

				:last-child {
					margin-bottom: 0;
				}
				:nth-last-child(2) {
					margin-bottom: 0;
				}
				:nth-last-child(3) {
					margin-bottom: 0;
				}
			}
		}

		& button {
			width: 50%;
			align-self: center;
			margin: 0 auto 32px auto;
		}
	}

	@media (min-width: 769px) {
		& .imagecontainer {
			position: relative;
			width: 60vw;
			height: 60vw;
			z-index: 5;

			& .image {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 65vw;
				height: 65vw;
				overflow: hidden;
				background: none;
				z-index: 5;

				& img {
					width: 100%;
				}
			}
		}
		& .textWrapper {
			padding-top: 75px;
			& .findUsText {
				& p {
					width: 80%;
				}
			}
		}
	}

	@media (min-width: 1025px) {
		flex-flow: row nowrap;
		padding: 72px 48px;
		width: calc(100vw - 96px);

		& .wrapper {
			width: 40vw;
			& .imagecontainer {
				position: relative;
				width: 43vw;
				height: 95%;

				& .image {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 40vw;
					height: 100%;
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
			width: calc(50vw - 168px);
			padding-top: 0;
			margin-left: 0;
			padding: 72px 72px 72px 96px;
			& .findUsText {
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
					:last-child {
						margin-bottom: 0;
					}
					:nth-last-child(2) {
						margin-bottom: 0;
					}
					:nth-last-child(3) {
						margin-bottom: 0;
					}
				}
			}
		}
	}
`;

function FindUsSection(props) {
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
									"https:" + imageInfo.file.url + "?w=600"
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

export default FindUsSection;
