import { ContactItem } from 'Components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectFilterContacts, selectIsLoading } from 'redux/contacts/contacts.selectors';
import { fetchContactsThunk } from 'redux/contacts/contacts.thunk';
import { Item } from './ContactList.styled';

export const ContactList = () => {
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContactsThunk());
	}, [dispatch]);

	const contacts = useSelector(selectFilterContacts);

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <h2>ERROR</h2>}
			{!isLoading && !error && (
				<ul>
					{contacts.map(({ id, name, phone }) => (
						<Item key={id}>
							<ContactItem name={name} phone={phone} id={id} />
						</Item>
					))}
				</ul>
			)}
		</>
	);
};
