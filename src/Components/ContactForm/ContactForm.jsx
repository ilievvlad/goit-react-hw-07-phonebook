import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from 'redux/contacts/contacts.selectors';
import { addContactThunk } from 'redux/contacts/contacts.thunk';
import Notiflix from 'notiflix';
import { Form, Title, Input, Button } from "./ContactForm.styled";

export const ContactForm = () => {
	const items = useSelector(selectItems);

	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const handleChange = ({ target: { value, name } }) => {
		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'number':
				setNumber(value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = evt => {
		evt.preventDefault();
		const contact = { name, phone: number };

		const hasSameName = items.some(contact => contact.name === name);

		hasSameName
			? Notiflix.Notify.warning(`${name} is already in contacts`, {
				position: 'center-center',
				cssAnimationStyle: 'zoom',
			})
			: dispatch(addContactThunk(contact));

		hasSameName || (setName('') && hasSameName) || setNumber('');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<label>
				<Title>Name</Title>
				<Input
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					placeholder="Enter your name"
					value={name}
					onChange={handleChange}
				/>
			</label>
			<label>
				<Title>Number</Title>
				<Input
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					placeholder="Enter your phone"
					value={number}
					onChange={handleChange}
				/>
			</label>
			<Button type="submit">Add contact</Button>
		</Form>
	);
};