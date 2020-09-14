import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background-color: var(--darkBrown);
	color: white;
	padding: 16px;
	min-height: 40vh;
`;

const StyledP = styled.p`
	text-align: center;
	margin: 8px 0 0 0;
	font-weight: 300;
	font-size: 1rem;
	line-height: 24px;
`;

const LogoDiv = styled.div`
	width: 58px;
	height: 58px;
	margin: 24px 0 21px 0;
	& img {
		height: 58px;
	}

	@media (min-width: 768px) {
		width: 146px;
		height: 146px;
		order: 1;
		& img {
			height: 11vw;
		}
	}
`;

const InfoDiv = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	border-bottom: 1px solid white;

	& div {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		margin: 19px 0;

		& ul {
			display: flex;
			flex-flow: column nowrap;
			text-align: center;
			margin: 5px;

			& a {
				color: white;
				margin: 5px;
			}
		}

		& h1 {
			letter-spacing: 0.1em;
			text-transform: uppercase;
			font-size: 20px;
		}
	}

	@media (min-width: 768px) {
		flex-flow: row nowrap;
		justify-content: space-evenly;
		padding: 72px 0 64px 0;

		& div {
			width: 20vw;
			height: 106px;
			justify-content: flex-start;

			:first-child {
				height: 146px;
			}
			:last-child {
				order: 2;
			}
			:nth-last-child(2) {
				order: 2;
			}
		}
	}
`;

const SocialDiv = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	margin: 12px 0 8px 0;

	& a {
		height: 44px;
		width: 44px;
		margin: 12px;
		& img {
			height: 44px;
			width: 44px;
		}
	}

	@media (min-width: 768px) {
		margin: 30px 0 34px 0;

		& a {
			margin: 0 5px;
		}
	}
`;

function Footer() {
	return (
		<StyledFooter>
			<InfoDiv>
				<LogoDiv>
					<img src="/Logo-white.svg" />
				</LogoDiv>
				<div>
					<h1>Öppettider</h1>
					<StyledP>Lör - Sön: 10 - 18</StyledP>
				</div>
				<div>
					<h1>Adress</h1>
					<StyledP>
						Gundla mosse <br /> 412 76 Göteborg <br /> Sverige
					</StyledP>
				</div>
				<div>
					<h1>Kontakt</h1>
					<StyledP>gundlagardscafé@gmail.com</StyledP>
				</div>
				<div>
					<h1>Länkar</h1>
					<ul>
						<Link href="">
							<a>Catering</a>
						</Link>
						<Link href="">
							<a>Hyr vår plats</a>
						</Link>
						<Link href="">
							<a>Hitta hit</a>
						</Link>
					</ul>
				</div>
			</InfoDiv>
			<SocialDiv>
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
			</SocialDiv>
		</StyledFooter>
	);
}

export default Footer;
