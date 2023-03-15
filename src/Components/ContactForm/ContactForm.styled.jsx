import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 30px;
	margin-bottom: 40px;
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

export const Button = styled.button`
	display: inline-block;
	height: 40px;
	background-color: var(--lightGray);
	border-radius: 5px;
	border: 1px solid var(--accent);

	@media (any-hover: hover){
	transition: all var(--anim);
		&:hover {
			color: #fff;
			background-color: var(--gray);
		}
	}
	&:active {
			background-color: var(--accent);
	}
`;