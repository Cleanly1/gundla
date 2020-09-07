import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
	display: flex;
	flex-flow: row nowrap;
	background-color: gray;
	padding: 5px;

	& a {
		text-decoration: none;
		color: black;
		margin: 0 10px;
	}

	@media (max-width: 600px) {
		display: none;
	}
`;

function Navigation() {
	return (
		<Nav>
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
		</Nav>
	);
}

export default Navigation;
