import styled from "styled-components";

const StyledButton = styled.button`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-end;
	justify-content: space-evenly;
	right: 24px;
	width: 44px;
	height: 44px;
	border: none;
	background: none;
	outline: blue;
	z-index: 10;
	transition: 0.5s;
	transition-timing-function: ease-in-out;
	.bar1,
	.bar2,
	.bar3 {
		width: 38px;
		height: 0px;
		margin: 4px 0;
		background-color: var(--brown);
		border: 2px solid var(--brown);
		border-radius: 20px;
		transition: 0.6s;
		transition-timing-function: ease-in-out;
	}
	.bar2 {
		width: 30px;
	}

	/* Rotate first bar */
	&.change .bar1 {
		z-index: 1;
		transform: rotate(-45deg) translate(-10px, 10px);
	}

	/* Fade out the second bar */
	&.change .bar2 {
		opacity: 0;
		transform: translateX(100px);
	}

	/* Rotate last bar */
	&.change .bar3 {
		z-index: 1;
		transform: rotate(45deg) translate(-10px, -10px);
	}

	&.change {
		right: 12px;
	}
	.change body {
		overflow: none;
	}
`;

function MenuButton(props) {
	return (
		<StyledButton className="menuButton" onClick={props.handleClick}>
			<div className="bar1"></div>
			<div className="bar2"></div>
			<div className="bar3"></div>
		</StyledButton>
	);
}

export default MenuButton;
