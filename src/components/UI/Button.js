import styled from 'styled-components'

const StyledButton = styled.button`
	width: 150px;
	height: 37px;
	border: none;
	background-color:rgb(52, 152, 219);
	color: white;
	font-size: 15px;
	border-radius: 5px;
	margin-top: 5px;
	cursor: pointer;
`

const Button = (props) => {
	return <StyledButton {...props}>{props.children}</StyledButton>
}
export default Button

