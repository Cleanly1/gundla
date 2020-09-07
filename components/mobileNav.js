import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
	display: none;
	flex-flow: row nowrap;
	background-color: gray;
	padding: 5px;

	& a {
		text-decoration: none;
		color: black;
		margin: 0 10px;
	}

	& div {
		display: none;
		position: absolute;
		flex-flow: column nowrap;
		background-color: grey;
		top: 0;
		left: 100vw;
		height: 100vh;
		width: 100vw;
	}

	@media (max-width: 600px) {
		display: flex;

		& div {
			display: flex;
		}
	}
`;

function MobileNav() {
	return (
		<Nav>
			<button>|||</button>
			<div>
				<Link href="/">
					<a>Hem</a>
				</Link>
				<Link href="about">
					<a>Om oss</a>
				</Link>
				<Link href="contact">
					<a>Kontakta oss</a>
				</Link>
				<Link href="events">
					<a>Events</a>
				</Link>
				<Link href="menu">
					<a>Meny</a>
				</Link>
			</div>
		</Nav>
	);
}

export default MobileNav;
