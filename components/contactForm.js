import React, { useState } from "react";
import styled from "styled-components";

const ContactForm = (props) => {
	console.log(props);
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

	const Styled = styled.div`
		background: ${props.bgColor || "#BBCEB6"};
		/* width: 100%; */
		margin: 0 10px 0 10px;
		padding: 10px;
		& img {
			width: 100%;
		}

		& h2 {
			border-bottom: 2px solid #4d4d4d;
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
	`;

	React.useEffect(() => {
		document.querySelector(".text").innerHTML = props.text;
	});

	return (
		<Styled>
			<img src={`https:${props.image}`} alt="" srcset="" />
			<h2>{props.title}</h2>
			<p className="text">{props.text}</p>
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
		</Styled>
	);
};

export default ContactForm;
