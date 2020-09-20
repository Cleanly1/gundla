import Link from "next/link";
import styled from "styled-components";
import MenuButton from "./menuButton";

const PopupMobile = styled.nav`
	display: flex;
	position: fixed;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
	background-color: var(--lightBrown);
	width: calc(100vw - 20px);
	padding: 10px;
	left: 0;
	bottom: -12vh;
	transition: box-shadow 1s ease, bottom 1s ease;
	z-index: 8;

	& div {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		min-width: 25%;

		& .openHours {
			position: absolute;
			display: flex;
			opacity: 1;
			bottom: 11vh;
			justify-content: center;
			padding: 32px 20vw;
			background-color: var(--lightOrange);
			clip-path: polygon(
				100% 0,
				100% 92%,
				55% 92%,
				50% 100%,
				45% 92%,
				0 92%,
				0 0
			);

			border-radius: 2px;
			align-items: center;

			& p {
				font-family: var(--fontCon);
				font-weight: normal;
				font-size: 16px;
				line-height: 19px;
				text-align: center;
				color: var(--nearBlack);
				margin: 4px;
			}
		}

		& p {
			color: var(--nearBlack);
			font-family: var(--fontCon);
			font-weight: normal;
			font-size: 16px;
			line-height: 19px;
			text-align: center;
			letter-spacing: 0.05em;
			text-transform: uppercase;
		}

		& a {
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			text-decoration: none;
			width: 100%;
			color: var(--nearBlack);
			& img {
				margin-bottom: 8px;
			}
		}
		& img {
			margin-bottom: 8px;
		}
	}

	&.scrolled {
		box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
	}

	&.show {
		bottom: 0;
	}

	@media (min-width: 600px) {
		display: none;
	}
`;

function Popup(props) {
	function handleScroll(e) {
		const nav = document.querySelector(PopupMobile);
		if (scrollY === 0 && !nav.classList.contains("show")) {
			nav.classList.add("show");
		} else if (scrollY > 0 && nav.classList.contains("show")) {
			nav.classList.remove("show");
		}
	}
	function handleClick(e) {
		const openHoursDiv = document.querySelector(".openHoursText");
		console.log(openHoursDiv);
	}

	React.useEffect(() => {
		handleScroll();
		const openHoursDiv = document.querySelector(".openHoursText");
		openHoursDiv.innerHTML = props.openHours;
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<PopupMobile>
			<div>
				<Link href="mailto:gundlagardscafé@gmail.com">
					<a>
						<img src="/icons/email-icon.svg" alt="" />
						<p>Email</p>
					</a>
				</Link>
			</div>

			<div onClick={handleClick}>
				<div className="openHours">
					<div className="openHoursText"></div>
				</div>
				<img src="/icons/clock-icon.svg" alt="" />
				<p>Öppetider</p>
			</div>
			<div>
				<Link href="https://goo.gl/maps/pj7To1ADqhL6j3cK8">
					<a>
						<img src="/icons/map-icon.svg" alt="" />
						<p>Karta</p>
					</a>
				</Link>
			</div>
		</PopupMobile>
	);
}

export default Popup;
