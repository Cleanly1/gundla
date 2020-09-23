import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
	display: flex;
	flex-flow: column nowrap;
	text-transform: uppercase;
	background-color: white;
	color: var(--brown);
	height: 200px;

	& .header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		margin: 26px 0 20px 0;

		& h1 {
			font-family: var(--topFont);
			font-size: 32px;
			font-weight: 500;
			margin: 0 24px;
		}

		& img {
			height: 96px;
		}
	}

	& .navbar {
		display: flex;
		position: sticky;
		justify-content: space-around;
		width: 100%;
		background: white;
		padding: 15px 0 13px 0;
		& a {
			font-family: var(--fontCon);
			font-weight: bold;
			font-size: 20px;
			line-height: 23px;
			letter-spacing: 0.1em;
			text-decoration: none;
			color: var(--brown);
			padding: 5px;
			margin: 0 10px;

			:hover {
				color: var(--orange);
			}
		}

		& .active {
			color: var(--orange);
			border-bottom: 2px solid var(--orange);
		}

		&.scrolled {
			position: fixed;
			top: 0;
			box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
			z-index: 100;
		}
	}

	@media (max-width: 600px) {
		display: none;
	}
`;

function Navigation() {
	function handleNavigation(location) {
		const desktopLinks = document.querySelectorAll(".navbar a");
		desktopLinks.forEach((link) => {
			if (link.pathname === location.pathname) {
				link.classList.add("active");
			}
		});
	}

	function handleScroll(e) {
		const navbar = document.querySelector(".navbar");
		const navPos = navbar.getBoundingClientRect();

		if (navPos.y < 0) {
			navbar.classList.add("scrolled");
		}
		if (scrollY <= 142) {
			navbar.classList.remove("scrolled");
		}
	}

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		handleNavigation(window.location);
		return () => window.removeEventListener("scroll", handleScroll);
	});
	return (
		<Nav>
			<div className="header">
				<h1>Gundla</h1>
				<img src="/Logo.svg" alt="Gundla Gårdscafé logga" />
				<h1>Gårdscafé</h1>
			</div>
			<div className="navbar">
				<Link href="/">
					<a>Startsida</a>
				</Link>
				<Link href="cafe">
					<a>Café</a>
				</Link>
				<Link href="about">
					<a>Om oss</a>
				</Link>
				<Link href="contact">
					<a>Kontakt</a>
				</Link>
				<Link href="events">
					<a>Evenemang</a>
				</Link>
			</div>
		</Nav>
	);
}

export default Navigation;
