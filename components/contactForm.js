import React, { useState } from "react";
import styled from "styled-components";

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
			height: 45px;
			width: 300px;
			margin: auto;
			cursor: pointer;
		}

		& input[type="submit"] {
			font-weight: bold;
			font-size: 20px;
			text-align: center;
			font-family: var(--fontCon);
		}

		@media (min-width: 768px) {
			margin: auto;
			max-width: 1000px;
			& .submit {
				width: 500px;
			}
		}
	`;

	React.useEffect(() => {
		document.querySelector(".contact-text").innerHTML = props.text;
	});

	return (
		<div>
			<StyledImg>
				<img src={`https:${props.image}`} alt="Contact Image" />
			</StyledImg>
			<StyledForm>
				<h2>{props.title}</h2>
				<div className="contact-text"></div>
				<form
					onSubmit={submitForm}
					action="https://formspree.io/xeqpjklr"
					method="POST"
				>
					<p className="bold-form">FÖRFRÅGAN</p>

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

					<div className="submit-form">
						<input type="submit" value="SKICKA FÖRFRÅGAN"></input>
					</div>

					{status && <p className="status">{status}</p>}
				</form>
			</StyledForm>
		</div>
	);
};

export default ContactForm;
