import Link from "next/link";
import styled from "styled-components";
import MenuButton from "./HamburgerMenu";

const NavMobile = styled.nav`
	display: none;
	position: fixed;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	background-color: white;
	width: 100vw;
	height: 13vh;
	transition: box-shadow 1s ease;
	z-index: 100;

	&.scrolled {
		box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
	}
	& .menuButton {
		position: absolute;
	}

	& .imageDiv {
		height: 10vh;
		& img {
			height: 100%;
		}
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
	display: flex;
	position: fixed;
	flex-flow: column nowrap;
	align-items: center;
	background-color: white;
	top: 0px;
	padding: 96px 16px 72px 16px;
	left: 100%;
	height: calc(100vh - 168px);
	width: calc(100vw - 32px);
	transition-duration: 1s;
	z-index: 9;

	.menuButton {
		position: static;
	}

	a {
		font-family: var(--fontCon);
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 33px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		opacity: 0;
		text-decoration: none;
		color: var(--darkBrown);
		max-width: 50vw;
		margin: 12px 0;
		transition-duration: 0.8s;

		&:last-child {
			margin-bottom: 82px;
		}

		&:hover {
			color: var(--orange);
			border-bottom: 1px solid var(--orange);
			transition-duration: 0.2s;
		}
	}
	& .active {
		color: var(--orange);
		border-bottom: 2px solid var(--orange);
	}

	.imageDiv {
		margin: 58px;
		height: 11vh;
		opacity: 0;
		transition-duration: 0.8s;

		img {
			height: 100%;
		}
	}

	.showText {
		opacity: 1;
	}
`;

function MobileNav() {
	function handleClick(e) {
		const buttons = document.querySelectorAll(".menuButton");
		const linkDiv = document.querySelector(LinkDiv);
		const links = document.querySelectorAll(".links");
		const logo = document.querySelector(`${LinkDiv} .imageDiv`);
		linkDiv.classList.toggle("show");

		buttons.forEach((button) => {
			button.classList.toggle("change");
		});
		setTimeout(() => {
			logo.classList.toggle("showText");
			for (let i = 0; i < links.length; i++) {
				links[i].classList.toggle("showText");
			}
		}, 800);
	}
	function handleNavigation(location) {
		const desktopLinks = document.querySelectorAll(".links");
		desktopLinks.forEach((link) => {
			if (link.pathname === location.pathname) {
				link.classList.add("active");
			}
		});
	}

	function handleScroll(e) {
		const nav = document.querySelector(NavMobile);
		if (scrollY > 0 && !nav.classList.contains("scrolled")) {
			nav.classList.add("scrolled");
		} else if (scrollY === 0) {
			nav.classList.remove("scrolled");
		}
	}

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		handleNavigation(window.location);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<NavMobile>
			<div className="imageDiv">
				<img src="/Logo.svg" />
			</div>
			<MenuButton handleClick={handleClick} />
			<LinkDiv>
				<Link href="/">
					<a className="links">Hem</a>
				</Link>
				<Link href="cafe">
					<a className="links">Café</a>
				</Link>
				<Link href="about">
					<a className="links">Om oss</a>
				</Link>
				<Link href="contact">
					<a className="links">Kontakt</a>
				</Link>
				<Link href="events">
					<a className="links">Evenemang</a>
				</Link>
				<div className="imageDiv ">
					<img src="/Logo.svg" />
				</div>
			</LinkDiv>
		</NavMobile>
	);
}

export default MobileNav;
