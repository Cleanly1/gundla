import styled from "styled-components";
import Link from "next/link";

const StyledSection = styled.section`
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	background-image: url("/ground.jpg");
	background-size: contain;
	background-color: rgba(255, 255, 255, 0.95);
	background-blend-mode: lighten;
	margin-top: -20px;

	& .socialText {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		padding: 48px 16px 24px 16px;
		& h1 {
			font-family: var(--fontCon);
			font-weight: 700;
			font-size: 28px;
			line-height: 33px;
			text-align: center;
			letter-spacing: 0.08em;
			text-transform: uppercase;
			margin-bottom: 32px;
		}

		& p {
			width: 100%;
			font-size: 16px;
			line-height: 24px;
			text-align: center;
		}
	}

	.images {
		z-index: 2;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		padding-top: 96px;
		width: calc(100vw - 144px);
		padding: 48px 72px;
		position: relative;
		& a {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80vw;
			width: 80vw;
			overflow: hidden;
			margin: 20px;
			z-index: 2;
			& img {
				width: 100%;
			}
		}

		.background {
			align-self: center;
			position: absolute;
			background-color: var(--lightGreen);
			background-clip: content-box;
			top: 0px;
			width: calc(100vw - 144px);
			height: 95%;
			z-index: 1;
		}
	}

	@media (min-width: 1025px) {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		width: calc(100vw - 144px);
		padding: 48px 72px;
		overflow: hidden;

		.images {
			z-index: 2;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;
			padding: 32px 0;

			& a {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 28vw;
				width: 28vw;
				overflow: hidden;
				margin: 24px;
				& img {
					width: 100%;
				}
			}
			.background {
				align-self: center;
				position: absolute;
				left: -72px;
				background-color: var(--lightGreen);
				background-clip: content-box;
				width: 100vw;
				height: 50%;
				z-index: 1;
			}
		}
	}
`;

function SocialSection(props) {
	console.log(props.images);
	const images = [props.images.firstImage, props.images.secondImage];
	return (
		<StyledSection>
			<div className="socialText">{props.children}</div>
			<div className="images">
				{props.images &&
					images.map((image, i) => {
						image = image.fields;
						const href = i == 1 ? "facebook.com" : "instagram.com";
						return (
							<Link key={i} href={href}>
								<a>
									<picture>
										<source
											media="(min-width: 1000px)"
											srcSet={
												"https:" +
												image.file.url +
												"?w=800"
											}
										/>
										<source
											media="(min-width: 768px)"
											srcSet={
												"https:" +
												image.file.url +
												"?w=700"
											}
										/>
										<img
											src={
												"https:" +
												image.file.url +
												"?w=400"
											}
											alt={image.description}
										/>
									</picture>
								</a>
							</Link>
						);
					})}
				<div className="background"></div>
			</div>
		</StyledSection>
	);
}

export default SocialSection;
