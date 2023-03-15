import styled from 'styled-components';

export const Label = styled.label`
	display: block;
	margin-bottom: 30px;
`;

export const Title = styled.p`
	font-weight: 600;
	color: var(--gray);
	padding-bottom: 7px;
	cursor: pointer;
`;

export const Input = styled.input`
	background-color: var(--lightGray);
	width: 100%;
	height: 30px;
	border-radius: 5px;
	padding: 0 15px;
	font-size: 14px;
	caret-color: var(--accent);
	border: 1px solid #fff;
	transition: border-color var(--anim);

	&:focus {
		border-color: var(--accent);
	}
`;