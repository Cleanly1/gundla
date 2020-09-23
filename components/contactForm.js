import React, { useState } from "react";
import styled from "styled-components";

const ContactForm = (props) => {
	// console.log(props.contactText);
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
		margin: 0 20px 0 20px;
		padding: 10px;
		border-radius: 2px;

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
			resize: none;
		}

		& label {
			display: block;
		}

		& .submit {
			font-size: 100%;
			font-family: inherit;
			background: white;
			border: 2px solid #4d4d4d;
			border-radius: 0px;
			padding: 5px 0 0 0;
			height: 40px;
			width: 300px;
			margin: auto;
			cursor: pointer;
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

					<div className="submit">
						<input type="submit" value="SKICKA FÖRFRÅGAN"></input>
					</div>

					{status && <p className="status">{status}</p>}
				</form>
			</StyledForm>
		</div>
	);
};

export default ContactForm;
