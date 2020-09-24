import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background-color: var(--darkBrown);
	color: white;
	padding: 40px 16px 32px 16px;
	min-height: 40vh;
	overflow: hidden;

	& .copyMobile {
		margin: 40px 0 0 0;
		color: var(--white);
		opacity: 0.2;
	}

	& .copyDesktop {
		display: none;
		margin: 96px 0 0 0;
		color: var(--white);
		opacity: 0.2;
	}

	& .background {
		position: absolute;
		bottom: -35%;
		right: 20%;
		height: 100vh;
		opacity: 0.1;
		z-index: 1;

		& img {
			height: 100%;
		}
	}

	& button {
		background: none;
		border: none;
		color: var(--white);
		z-index: 5;

		&:hover {
			cursor: pointer;
		}

		&:active {
			border: none;
		}

		& h1 {
			font-family: var(--fontCon);

			font-style: normal;
			font-weight: bold;
			font-size: 18px;
			line-height: 21px;
			display: flex;
			align-items: center;
			text-align: center;
			letter-spacing: 0.08em;
			text-decoration-line: underline;
			text-transform: uppercase;
		}
	}

	@media (min-width: 1025px) {
		padding: 32px 72px 32px 72px;
		& .copyMobile {
			display: none;
		}

		& .copyDesktop {
			display: block;
			margin: 96px 0 0 0;
			color: var(--white);
			opacity: 0.2;
		}

		& .background {
			position: absolute;
			bottom: -35%;
			right: 66%;
			height: 100vh;
			opacity: 0.1;
			z-index: 1;

			& img {
				height: 100%;
			}
		}
	}
`;

const StyledP = styled.p`
	text-align: left;
	font-weight: 300;
	font-size: 1.2rem;
	font-size: 18px;
	line-height: 31px;
`;

const InfoDiv = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: flex-start;
	margin-top: 40px;
	width: calc(100vw - 32px);
	z-index: 5;

	& div {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: flex-start;
		margin: 10px 0;

		& a {
			color: white;
			font-style: normal;
			font-weight: normal;
			font-size: 18px;
			line-height: 31px;
		}

		& h1 {
			font-family: var(--fontCon);
			margin-bottom: 12px;
			text-transform: uppercase;
			font-size: 18px;
			line-height: 21px;
			letter-spacing: 0.08em;
			text-decoration-line: none;
		}
	}

	& .socials {
		& div {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: flex-start;
			margin: 0;
			& a {
				height: 48px;
				width: 48px;
				margin: 0;
				:first-child {
					margin: 0 32px 0 0;
				}
				& img {
					width: 100%;
				}
			}
		}
	}

	& .openHours {
		& div {
			margin: 0;
		}
		& h1 {
			margin-bottom: 12px;
		}
		& p {
			font-family: var(--fontCon);
			font-weight: 400;
			font-size: 18px;
			letter-spacing: 0.05em;
			margin: 0;
			line-height: 31px;
		}
	}

	@media (min-width: 1025px) {
		flex-flow: row nowrap;
		justify-content: space-between;
		margin-top: 40px;
		padding-right: 10vw;
		width: calc(100vw - 10vw - 144px);
	}
`;

function Footer(props) {
	function handleClick(e) {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}

	React.useEffect(() => {
		document.querySelector(".openHoursDiv").innerHTML = props.openHours;
	});
	return (
		<StyledFooter>
			<button onClick={handleClick}>
				<h1>Tillbaka till toppen</h1>
			</button>
			<InfoDiv>
				<div className="openHours">
					<h1>Öppettider</h1>
					<div className="openHoursDiv"></div>
				</div>
				<div>
					<h1>Adress</h1>
					<StyledP>
						Gundla mosse <br /> 412 76 Göteborg <br /> Sverige
					</StyledP>
				</div>
				<div>
					<h1>Kontakt</h1>
					<Link href="mailto:gundlagardscafé@gmail.com">
						<a>gundlagardscafé@gmail.com</a>
					</Link>
				</div>

				<div className="socials">
					<h1>Sociala medier</h1>
					<div>
						<Link href="https://www.instagram.com/gundlagardscafe/">
							<a>
								<img src="/icons/instagram.svg" />
							</a>
						</Link>
						<Link href="https://www.facebook.com/gundlagardscafe">
							<a>
								<img src="/icons/facebook.svg" />
							</a>
						</Link>
					</div>
				</div>
			</InfoDiv>
			<p className="copyDesktop">
				Gundla Gårdscafé ©2020 – All rights reserved
			</p>
			<p className="copyMobile">2020© Gundla Gårdscafé </p>
			<div className="background">
				<img src="/Logo-white.svg" alt="gundla logo" />
			</div>
		</StyledFooter>
	);
}

export default Footer;
