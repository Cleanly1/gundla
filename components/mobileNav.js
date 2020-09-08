import Link from "next/link";
import styled from "styled-components";

const NavMobile = styled.nav`
	display: none;
	flex-flow: row nowrap;
	justify-content: flex-end;
	background-color: gray;
	width: calc(100vw - 40px);
	height: 20px;
	padding: 10px 20px;

	.menuButton {
		width: 20px;
		height: 20px;
		border: none;
		background: none;
		outline: blue;
	}

	.show {
		overflow: hidden;
		left: 0px;
	}

	@media (max-width: 600px) {
		display: flex;
	}
`;

const LinkDiv = styled.div`
	display: none;
	position: fixed;
	flex-flow: column nowrap;
	align-items: flex-end;
	background-color: white;
	top: 0px;
	padding: 10px 20px;
	left: 100%;
	height: 100vh;
	width: calc(100vw - 40px);
	transition-duration: 1.5s;

	.showText {
		opacity: 1;
	}

	& a {
		opacity: 0;
		text-decoration: none;
		color: black;
		max-width: 50vw;
		font-size: 26px;
		margin: 0;
		transition-duration: 0.8s;
	}

	@media (max-width: 600px) {
		display: flex;
	}
`;

function MobileNav() {
	function handleClick(e) {
		const linkDiv = document.querySelector(LinkDiv);
		const links = document.querySelectorAll(".links");
		linkDiv.classList.toggle("show");
		for (let i = 0; i < links.length; i++) {
			setTimeout(() => {
				links[i].classList.toggle("showText");
			}, 1200);
		}
	}

	return (
		<>
			<NavMobile>
				<button className="menuButton" onClick={handleClick}>
					|||
				</button>
				<LinkDiv>
					<button className="menuButton" onClick={handleClick}>
						|||
					</button>
					<Link href="/">
						<a className="links">Hem</a>
					</Link>
					<Link href="about">
						<a className="links">Om oss</a>
					</Link>
					<Link href="contact">
						<a className="links">Kontakta oss</a>
					</Link>
					<Link href="events">
						<a className="links">Events</a>
					</Link>
					<Link href="menu">
						<a className="links">Meny</a>
					</Link>
				</LinkDiv>
			</NavMobile>
		</>
	);
}

export default MobileNav;
