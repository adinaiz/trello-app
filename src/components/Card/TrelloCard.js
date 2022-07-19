import styled from 'styled-components'
import TrellocardItem from './TrelloCardItem'
import TrelloText from './TrelloText'
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';

const Container = styled.div`
	width: 290px;
	background-color: #ebecf0;
	border-radius: 5px;
	padding: 8px;
	border: 1px solid lightgray;
	text-align: start;
	margin: 5px;
	margin-left: 15px;
`
const Card = styled.div`
	text-align: start;
	width: 260px;
	font-weight: 600;
	display: flex;
	margin-top: 3px;
	margin-bottom: 3px;
	justify-content: space-between;
	& input{
		width: 230px;
		height:30px;
		padding: 4px;
		border-radius:5px;
		border: none;
		font-size: 20px;
		font-weight: 700;
		background-color: #ebecf0;
		color: rgb(70, 71, 71);
	}`


function TrelloCard({ todo, id, todos }) {
	const showModal = useSelector((state) => state.ui.modalIsVisible)
	return (<div>
		   {showModal && <Modal todos={todos}/>}
		<Container>
			<Card>
				<input value={todo}/>
			</Card>
			<div>
				<TrellocardItem todos={todos}/>
			</div>
			<TrelloText id={id} />
		</Container>
	</div>
		
	)
}

export default TrelloCard


