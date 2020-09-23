import styled from "styled-components";

const StyledSection = styled.section`
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: calc(100vw - 144px);
	padding: 48px 72px;
	overflow: hidden;
	background-image: url("/images/ground.jpg");
	background-size: contain;
	background-color: rgba(255, 255, 255, 0.95);
	background-blend-mode: lighten;

	.background {
		align-self: center;
		position: absolute;
		background-color: var(--lightGreen);
		background-clip: content-box;
		width: calc(100vw - 144px);
		height: calc(100% - 96px);
		padding: 48px 72px;
		z-index: 1;
	}

	.images {
		z-index: 2;
		display: flex;

		& div {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80vw;
			width: 80vw;
			overflow: hidden;
			margin: 20px;
			& img {
				width: 100%;
			}
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
		background-image: url("/images/ground.jpg");
		background-size: contain;
		background-color: rgba(255, 255, 255, 0.95);
		background-blend-mode: lighten;

		.background {
			align-self: center;
			position: absolute;
			background-color: var(--lightGreen);
			background-clip: content-box;
			width: 100vw;
			height: 50%;
			z-index: 1;
		}

		.images {
			z-index: 2;
			display: flex;
			padding: 0 48px;

			& div {
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
		}
	}
`;

function DisplayImages(props) {
	console.log(props.images);
	const images = [
		props.images.firstImage,
		props.images.secondImage,
		props.images.thirdImage,
	];
	return (
		<StyledSection>
			<div className="background"></div>
			<div className="images">
				{props.images &&
					images.map((image, i) => {
						image = image.fields;
						return (
							<div>
								<picture key={i}>
									<source
										media="(min-width: 1000px)"
										srcSet={
											"https:" + image.file.url + "?w=800"
										}
									/>
									<source
										media="(min-width: 768px)"
										srcSet={
											"https:" + image.file.url + "?w=700"
										}
									/>
									<img
										src={
											"https:" + image.file.url + "?w=400"
										}
										alt={image.description}
									/>
								</picture>
							</div>
						);
					})}
			</div>
		</StyledSection>
	);
}

export default DisplayImages;