import styled from 'styled-components'

const Input = (props) => {
	return <StyledInput {...props}>{props.children}</StyledInput>
}
export default Input

const StyledInput = styled.input`
	width: 285px;
	padding: 3px;
	height: 30px;
	border: 2px solid rgb(52, 152, 219);
	margin: 0.2rem auto;
	border-radius: 5px;
`