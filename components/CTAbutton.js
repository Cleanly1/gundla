import styled from "styled-components";
import Link from "next/link";

const Button = styled.button`
	background: rgba(0, 0, 0, 0);
	min-height: 5vh;
	min-width: 38.8vw;
	padding: 16px;
	box-sizing: border-box;
	text-transform: uppercase;
	color: ${(props) => props.borderColor || "var(--brown)"};
	border: 2px solid ${(props) => props.borderColor || "var(--brown)"};
	font-family: var(--fontCon);
	font-weight: 400;
	font-size: 16px;
	box-shadow: 2px 2px 4px rgba(57, 57, 57, 0.4);

	@media (min-width: 768px) {
		min-width: 20vw;
	}
`;

function Cta(props) {
	return (
		<Link href={props.link || ""}>
			<a>
				<Button borderColor={props.borderColor}>{props.text}</Button>
			</a>
		</Link>
	);
}

export default Cta;
