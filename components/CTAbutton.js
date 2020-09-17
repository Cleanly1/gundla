import styled from "styled-components";
import Link from "next/link";

const Button = styled.button`
	background: #f9f4ed;
	border: 2px solid #4d4d4d;
	min-height: 5vh;
	min-width: 232px;
	padding: 16px;
	box-sizing: border-box;
	text-transform: uppercase;
	color: var(--nearBlack);
	font-family: var(--fontCon);
	font-weight: 700;
	font-size: 16px;
	border-radius: 2px;
	box-shadow: 2px 2px 4px rgba(77, 77, 77, 0.25);

	@media (min-width: 768px) {
		min-width: 20vw;
	}
`;

function Cta(props) {
	return (
		<Link href={props.link || ""}>
			<Button>
				<a>{props.text}</a>
			</Button>
		</Link>
	);
}

export default Cta;
