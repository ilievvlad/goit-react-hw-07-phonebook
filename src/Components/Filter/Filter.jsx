import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filter.selectors';
import { filterAction } from 'redux/filter/filter.slice';
import { Label, Title, Input } from './Filter.styled';

export const Filter = () => {
	const filter = useSelector(selectFilter);
	const dispatch = useDispatch();
	const handleChange = ({ target: { value } }) => {
		dispatch(filterAction(value));
	};

	return (
		<Label>
			<Title>Find contacts by name</Title>
			<Input
				type="text"
				name="filter"
				placeholder="Enter contact name"
				onChange={handleChange}
				value={filter}
			/>
		</Label>
	);
};