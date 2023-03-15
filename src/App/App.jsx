import { Container, Title } from "./App.styled";
import { ContactForm } from "Components/ContactForm/ContactForm";
import { ContactList } from "Components/ContactList/ContactList";
import { Filter } from "Components/Filter/Filter";

export const App = () => {

	return (
		<Container>
			<Title>Phonebook</Title>
			<ContactForm />

			<Title>Contacts</Title>
			<Filter />
			<ContactList />
		</Container>
	);
}
