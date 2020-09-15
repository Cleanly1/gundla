import React, { useState } from "react";

const ContactForm = () => {
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

	return (
		<div>
			<form
				onSubmit={submitForm}
				action="https://formspree.io/xeqpjklr"
				method="POST"
			>
				<label>Email:</label>
				<input type="email" name="email" />
				<label>Type:</label>
				<select name="type" required>
					<option value="event">Event</option>
					<option value="info">Info</option>
				</select>
				<label>Message:</label>
				<input type="text" name="message" />
				<input type="submit" value="Submit"></input>
			</form>

			{status && <p className="status">{status}</p>}
		</div>
	);
};

export default ContactForm;
