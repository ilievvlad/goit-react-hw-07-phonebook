import styled from 'styled-components';

export const Contact = styled.p`
	font-size: 17px;
	font-weight: 600;
	color: var(--gray);
`;

export const Num = styled.span`
	display: inline-block;
	margin-left: 10px;
	font-size: 18px;
	letter-spacing: 0.06em;
	text-decoration: underline var(--accent);
`;

export const Button = styled.button`
	display: inline-block;
	padding: 3px 7px;
	font-size: 12px;
	font-weight: 600;
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