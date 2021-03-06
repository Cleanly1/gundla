import React, { useState } from "react";
import styled from "styled-components";
import Cta from "../components/CTAbutton";

const ContactForm = (props) => {
	const [status, setStatus] = useState(null);

	const submitForm = (event) => {
		event.preventDefault();

		const form = event.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();

		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setStatus("Tack för ditt mail!");
			} else {
				setStatus("Något gick fel försök igen.");
			}
		};
		xhr.send(data);
	};

	const StyledImg = styled.div`
		margin: 0 0 -4px 30px;

		& img {
			width: calc(100% - 30px);
		}

		@media (min-width: 768px) {
			max-width: 1000px;
			margin: auto;

			& img {
				width: calc(100%);
				margin: 0 0 -4px 0;
			}
		}
	`;

	const StyledForm = styled.div`
		background: ${props.bgColor || "#BBCEB6"};
		margin: 0 20px 40px 20px;
		padding: 20px;
		border-radius: 2px;

		& .bold-form {
			font-weight: bold;
			padding: 40px 0 20px 0;
			font-family: var(--fontCon);
			letter-spacing: 0.08em;
		}

		& h2 {
			padding: 10px 0 10px 0;
			border-bottom: 2px solid ${props.lineColor || "#BBCEB6"};
			font-family: var(--fontCon);
			font-size: 28px;
			letter-spacing: 0.08em;
		}

		& .contact-text p {
			padding: 10px 0 10px 0;
			line-height: 24px;
		}

		& input {
			height: 35px;
			font-size: 100%;
			font-family: inherit;
			background: white;
			border: none;
			border-radius: 2px;
			outline: none;
			width: calc(100% - 10px);
			margin: 0 0 10px 0;
			padding: 5px;
			color: var(--nearBlack);
		}

		& textarea {
			height: 80px;
			font-size: 100%;
			font-family: inherit;
			background: white;
			border: none;
			border-radius: 2px;
			outline: none;
			width: calc(100% - 10px);
			margin: 0 0 10px 0;
			padding: 5px;
			color: var(--nearBlack);
			resize: none;
		}

		& label {
			display: block;
			padding: 0 0 2px 0;
			font-family: var(--fontCon);
		}

		& .submit-form {
			font-size: 100%;
			font-family: inherit;
			background: white;
			border: 2px solid var(--nearBlack);
			border-radius: 2px;
			padding: 10px 0 0 0;
			height: 40px;
			width: 250px;
			margin: auto;
			cursor: pointer;
			background: var(--lightBeige);
		}

		& input[type="submit"] {
			font-weight: bold;
			font-size: 16px;
			text-align: center;
			font-family: var(--fontCon);
			background: var(--lightBeige);
			padding: 0 0 4px 16px;
		}

		@media (min-width: 768px) {
			margin: auto;
			max-width: 1000px;
			& .submit {
				width: 500px;
			}
		}
	`;

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

		:hover {
			background-color: var(--lightGreen);
			box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.25),
				2px 2px 4px rgba(57, 57, 57, 0.2);
		}

		@media (min-width: 768px) {
			min-width: 20vw;
		}
	`;

	const StyledButton = styled.div`
		width: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	`;

	return (
		<div>
			<StyledImg>
				<img src={`https:${props.image}`} alt="Contact Image" />
			</StyledImg>
			<StyledForm>
				<h2>{props.title}</h2>
				{props.children}
				<form
					onSubmit={submitForm}
					action="https://formspree.io/xeqpjklr"
					method="POST"
				>
					<p className="bold-form">{props.formTitle}</p>

					<label>Namn</label>
					<input type="name" name="name" />

					<label>Epost</label>
					<input type="email" name="email" />

					<label>Ämne</label>
					<input type="title" name="title" />

					<label>Önskat datum</label>
					<input type="title" name="date" />

					<label>Meddelande</label>
					<textarea type="text" name="text" />

					<StyledButton>
						<div>
							<Button type="submit">SKICKA FÖRFRÅGAN</Button>
						</div>
					</StyledButton>

					{status && <p className="status">{status}</p>}
				</form>
			</StyledForm>
		</div>
	);
};

export default ContactForm;
