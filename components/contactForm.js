import React, { useState } from "react";
import styled from "styled-components";

const ContactForm = (props) => {
	console.log(props.text);
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
		margin: 0 0 -4px 20px;

		& img {
			width: calc(100% - 20px);
		}

		@media (min-width: 768px) {
			/* padding: 0 10px 0 10px; */
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
		/* width: 100%; */
		margin: 0 10px 0 10px;
		padding: 10px;

		& h2 {
			padding: 0 0 10px 0;
			border-bottom: 2px solid #4d4d4d;
		}

		& .text p {
			padding: 10px 0 10px 0;
		}
		& input {
			height: 35px;
			font-size: 100%;
			font-family: inherit;
			background: white;
			border: none;
			border-radius: 2px;
			outline: none;
			width: 100%;
			margin: 0 0 10px 0;
		}
		& textarea {
			height: 80px;
			font-size: 100%;
			font-family: inherit;
			background: white;
			border: none;
			border-radius: 2px;
			outline: none;
			width: 100%;
			margin: 0 0 10px 0;
		}
		& label {
			display: block;
		}

		& .submit {
			font-size: 100%;
			font-family: inherit;
			background: white;
			border: 1px solid #4d4d4d;
			border-radius: 0px;
			padding: 5px;
			width: 100%;
			cursor: pointer;
		}

		@media (min-width: 768px) {
			margin: auto;
			max-width: 1000px;
		}
	`;

	React.useEffect(() => {
		document.querySelector(".text").innerHTML = props.text;
	});

	return (
		<div>
			<StyledImg>
				<img src={`https:${props.image}`} alt="Contact Image" />
			</StyledImg>
			<StyledForm>
				<h2>{props.title}</h2>
				<div className="text"></div>
				<form
					onSubmit={submitForm}
					action="https://formspree.io/xeqpjklr"
					method="POST"
				>
					<label>Namn</label>
					<input type="name" name="name" />

					<label>Epost</label>
					<input type="email" name="email" />

					<label>Ämne</label>
					<input type="title" name="title" />

					<label>Önskat datum</label>
					<input type="title" name="title" />

					<label>Meddelande</label>
					<textarea type="text" name="text" />

					<input
						type="submit"
						class="submit"
						value="SKICKA FÖRFRÅGAN"
					></input>

					{status && <p className="status">{status}</p>}
				</form>
			</StyledForm>
		</div>
	);
};

export default ContactForm;
