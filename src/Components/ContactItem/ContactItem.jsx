import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contacts.thunk';
import PropTypes from 'prop-types';
import { Button, Contact, Num } from './ContactItem.styled';

export const ContactItem = ({ name, phone, id }) => {
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(deleteContactThunk(id));
	};
	return (
		<>
			<Contact>{name}:<Num>{phone}</Num></Contact>
			<Button onClick={handleDelete}>Delete</Button>
		</>
	);
};
ContactItem.propTypes = {
	name: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};