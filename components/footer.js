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
	font-size: 18px;
	line-height: 24px;
`;

const LogoDiv = styled.div`
	width: 56px;
	height: 56px;
	margin: 24px 0 21px 0;
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
`;

const SocialDiv = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	margin: 12px 0 8px 0;
	& img {
		height: 44px;
		width: 44px;
		margin: 12px;
	}
`;

function Footer() {
	return (
		<StyledFooter>
			<LogoDiv>
				<img src="/logosmall-logo.png" />
			</LogoDiv>
			<InfoDiv>
				<div>
					<h1>Öppettider</h1>
					<StyledP>Lör - Sön: 10 - 18</StyledP>
				</div>
				<div>
					<h1>Adress</h1>
					<StyledP>
						Gundla mosse <br /> 412 76 Göteborg
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
						<img src="/icons/instagram.png" />
					</a>
				</Link>
				<Link href="https://www.facebook.com/gundlagardscafe">
					<a>
						<img src="/icons/facebook.png" />
					</a>
				</Link>
			</SocialDiv>
		</StyledFooter>
	);
}

export default Footer;
